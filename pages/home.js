import React, {Component} from 'react'
import {css, StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  root: {
    width: '80%',
    minWidth: '300px',
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 600px)': {
      flexDirection: 'column'
    }
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '16px',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  },
  image: {
    borderRadius: '50%',
    width: '300px',
    height: '300px',
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline'
  },
  monoSpaced: {
    fontFamily: "'Inconsolata', monospace",
    fontSize: '0.95em'
  }
})

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    this.getProfile()
      .then(data => this.setState({loading: false, ...data}))
  }

  getProfile = async () =>
    await fetch('https://api.github.com/users/JFrankfurt')
      .then(res => res.json())

  render() {
    return (
      <div className={css(styles.root)}>
        <div className={css(styles.profile)}>
          <div className={css(styles.imageContainer)}>
            <img className={css(styles.image)} src={this.state.avatar_url}/>
          </div>
          <div className={css(styles.summary)}>
            <div className={css(styles.title)}>
              <h2>Jordan Frankfurt</h2><span>&nbsp;(<a href="https://www.twitter.com/JordanFrankfurt">twitter</a>
              | <a href="https://keybase.io/jordanfrankfurt">contact me</a>)</span>
            </div>
            <p>Software Engineer{`\u2013`}Brooklyn, NY.</p>
            <pre className={css(styles.monoSpaced)}> day job: eth dapps @ Consensys</pre>
            <br/>
            <b>Topics of interest:</b>
            <pre className={css(styles.monoSpaced)}> structured credit (nonagy cmos and servicing)</pre>
            <pre className={css(styles.monoSpaced)}> cryptography (Mimblewimble! ❤️)</pre>
            <pre className={css(styles.monoSpaced)}> history of monetary systems</pre>
            <br/>
            <b>Technical Experience</b>
            <pre className={css(styles.monoSpaced)}> full stack JS (node/express, react/angular)</pre>
            <pre className={css(styles.monoSpaced)}> sql, nosql, and in memory data stores</pre>
            <pre className={css(styles.monoSpaced)}> microservice arch. (messaging, service discovery)</pre>
            <br/>
            {!this.state.loading
            && <div>
              <h3><a href={this.state.html_url}>Github:</a></h3>
              <pre className={css(styles.monoSpaced)}>followers: {this.state.followers}</pre>
              <pre className={css(styles.monoSpaced)}>following: {this.state.following}</pre>
              <pre className={css(styles.monoSpaced)}>open source repos: {this.state.public_repos}</pre>
              <pre className={css(styles.monoSpaced)}>last updated: {this.state.updated_at}</pre>
            </div>}
          </div>
        </div>
      </div>
    )
  }
}
