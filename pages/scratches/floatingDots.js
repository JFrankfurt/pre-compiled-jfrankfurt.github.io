import React, {Component} from 'react';
import {SVGForm, SVGSpace, Vector} from 'ptjs';
import {css, StyleSheet} from 'aphrodite';
import DriftingDot from "./driftingDot";

const styles = new StyleSheet.create({
  plotArea: {
    width: '100%'
  }
});

export default class FloatingDots extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.state.space = new SVGSpace("pt", this.ready).setup({bgcolor: '#002b36'});
    this.state.form = new SVGForm(this.state.space);
    this.setState({
      lastAdded: 0
    }, () => {
      this.state.space.add({
        animate: time => {
          // add dots if too few.
          const count = Object.keys(this.state.space.items).length;
          const maxCount = Math.round((this.state.space.size.x * this.state.space.size.y) / 22500);
          if (count < maxCount && time - this.state.lastAdded > Math.random() * 1500 + 500) {
            const dot = new DriftingDot(this.randomPoint(this.state.space.size), this.state.form, this.state.space);
            dot.setRadius(Math.random() > 0.5 ? 3 : 2);
            dot.mass = 1;
            dot.impulse(new Vector((Math.random() - Math.random()) / 15, (Math.random() - Math.random()) / 15));
            this.state.space.add(dot);
            this.setState({lastAdded: Math.round(time)});
          }
        }
      });
    });
  }

  ready = (_, elem) => {
    this.state.form.scope("item", elem);
    this.state.space.play();
  };

  randomPoint = (space = {x: 0, y: 0, z: 0}) => ({
    x: Math.random() * space.x,
    y: Math.random() * space.y,
    z: Math.random() * space.z
  });

  render() {
    return (
      <div id="pt" className={css(styles.plotArea)}/>
    );
  }
}