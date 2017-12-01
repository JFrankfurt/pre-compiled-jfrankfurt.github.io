import {Particle, Vector} from 'ptjs';

export default class DriftingDot extends Particle {
  constructor(...args) {
    super(...args);
    this.time = 0;
    this.lifespan = 10000;
    Object.keys(args[0]).forEach(k => this[k] = args[0][k]);
    this.form = args[1];
    this.space = args[2];
  }

  randomPoint = (space = {x: 0, y: 0, z: 0}) => ({
    x: Math.random() * space.x,
    y: Math.random() * space.y,
    z: Math.random() * space.z
  });

  lifespanFade = x => -1 * (Math.cos(x / (0.5 * Math.PI) * 10) * 0.5 + 0.5) + 1;

  animate = (time, frameTime) => {
    this.form.enterScope(this);
    this.play(time, frameTime);

    this.time += Math.round(frameTime);

    // dampen momentum
    if (Math.abs(this.momentum.x) + Math.abs(this.momentum.y) > 0.4) {
      this.momentum.x *= Math.random();
      this.momentum.y *= Math.random();
    }
    // relocation
    if (this.x > this.space.size.x || this.x < 0 || this.y > this.space.size.y || this.y < 0) {
      this.moveTo(this.randomPoint(this.space.size));
      this.momentum.x *= (Math.random() - Math.random()) * 0.5;
      this.momentum.y *= (Math.random() - Math.random()) * 0.5;
      this.time = 0; // always re-enter with an opacity of 0.
    }
    //draw fill and dot.
    this.form.stroke(false).fill(`rgba(147, 161, 161, ${this.lifespanFade(this.time / this.lifespan)})`);
    this.form.point(this, this.radius, true);
  };

  rand = () => Math.random() - Math.random();

  // faster physics
  integrate = (t, dt) => this.integrateEuler(t, dt);

  // random force application.
  forces = (state, t) => ({force: new Vector(this.rand() / 200, this.rand() / 200)});
}