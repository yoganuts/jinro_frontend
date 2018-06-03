import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Fade from '@material-ui/core/Fade'
import { withStyles } from '@material-ui/core/styles'
import ReactRevealText from 'react-reveal-text'

import logo from '../../images/jinro.svg'

const styles = {
  root: {
    height: '100vh',
    backgroundColor: '#ccc',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
  logo: {
    width: 60,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    letterSpacing: '0.3em',
    fontFamily: 'Dosis',
    paddingLeft: 5,
  },
}

class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true})
    }, 500)
  }

  render () {
    const { classes } = this.props
    return (
      <Fragment>
        {!this.props.user.initialized &&
        <Fade in={true} timeout={500}>
          <div className={classes.root} onClick={this.props.onClick}>
            <div className={classes.box}>
              <img src={logo} alt="jinro line" className={classes.logo} />
              <ReactRevealText show={this.state.show} className={classes.text}>
                Jinro Line
              </ReactRevealText>
            </div>
          </div>
        </Fade>
        }
      </Fragment>
    )
  }
}

Splash.propTypes = {
  user: PropTypes.shape({
    initialized: PropTypes.bool
  }),
  onClick: PropTypes.func
}

export default withStyles(styles)(Splash)
