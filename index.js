import React from 'react'
import {css, StyleSheet} from 'aphrodite'
import ReactDOM from 'react-dom'
import {HashRouter, Link, Route, Switch} from "react-router-dom"

import {Scratchpad} from "./pages/scratchpad"
import Home from "./pages/home"

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  navBar: {
    width: '100%',
    height: '50px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--red)'
  },
  navBarContent: {
    width: '60%',
    minWidth: '300px',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  homeButton: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.3em',
    padding: '0 20px',
    transition: '300ms all ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }
  },
  linkSection: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    height: '100%',
    color: 'white',
    padding: '0 20px',
    transition: '300ms all ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }
  }
})

const Wrapper = ({ children }) =>
  <div className={css(styles.root)}>
    <div className={css(styles.navBar)}>
      <div className={css(styles.navBarContent)}>
        <Link className={css(styles.homeButton)} to='/'>JF</Link>
        <div className={css(styles.linkSection)}>
          <Link className={css(styles.link)} to='/scratchpad/'>scratchpad</Link>
        </div>
      </div>
    </div>
    {children}
  </div>


ReactDOM.render(
  <HashRouter>
    <Wrapper>
      <Switch>
        <Route exact path="/scratchpad" component={Scratchpad}/>
        <Route exact path="/*" component={Home}/>
      </Switch>
    </Wrapper>
  </HashRouter>,
  document.getElementById('root')
)
