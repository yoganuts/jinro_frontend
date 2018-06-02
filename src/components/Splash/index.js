import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import { withStyles } from '@material-ui/core/styles'

import logo from '../../images/jinro.svg'

const styles = {
  root: {
    height: '100vh',
    backgroundColor: '#ccc'
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100vh'
  },
  logo: {
    width: 60
  }
}

function Splash(props) {
  const { classes } = props
  return (
    <Fragment>
      {!props.user.initialized &&
        <Fade in={true} timeout={1000}>
          <div className={classes.root} onClick={props.onClick}>
            <div className={classes.box}>
              <img src={logo} alt="jinro line" className={classes.logo} />
              <Typography variant="display1">Jinro Line</Typography>
            </div>
          </div>
        </Fade>
      }
    </Fragment>
  )
}

Splash.propTypes = {
  user: PropTypes.shape({
    initialized: PropTypes.bool
  }),
  onClick: PropTypes.func
}

export default withStyles(styles)(Splash)
