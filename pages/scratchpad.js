import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import FloatingDots from "./scratches/floatingDots";

const styles = StyleSheet.create({
  root: {
    width: '100%'
  },
  section: {
    position: 'relative',
    width: '100%',
    marginBottom: '10px'
  },
  title: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    fontSize: '0.95em',
  },
  link: {
    color: 'var(--base00)'
  }
});

export const Scratchpad = () => (
  <div className={css(styles.root)}>
    <div className={css(styles.section)}>
      <h3 className={css(styles.title)}>
        <a href="https://github.com/JFrankfurt/brownian-motion-animation"
           className={css(styles.link)}>
          Brownian motion (+momentum/-collisions)
        </a>
      </h3>
      <FloatingDots/>
    </div>
  </div>
);