import React from 'react'
import {css, StyleSheet} from 'aphrodite'
import FloatingDots from "./scratches/floatingDots"

const styles = StyleSheet.create({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 2fr 2fr',
    gridGap: 12,
    height: 'calc(100vh - 80px)',
    width: '100%',
  },
  section: {
    justifySelf: 'right',
    width: '100%',
    position: 'relative',
    gridColumn:'1 / 4',
    gridRow:'1 / 3',
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
})

export const Scratchpad = () => (
  <div className={css(styles.root)}>
    <div className={css(styles.section)}>
      <h3 className={css(styles.title)}>
        Brownian motion (+momentum/-collisions 😊)
        &nbsp;
        <a href="https://github.com/JFrankfurt/brownian-motion-animation"
           target="_blank"
           className={css(styles.link)}>
          github
        </a>
      </h3>
      <FloatingDots/>
    </div>
  </div>
)
