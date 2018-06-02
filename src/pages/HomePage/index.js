import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Fade from '@material-ui/core/Fade'
import { withStyles } from '@material-ui/core/styles'

import HomeHeader from '../../components/HomeHeader'
import VillageList from '../../containers/VillageList'
import VillageNew from '../../containers/VillageNew'

const styles = {
  space: {
    marginBottom: 120
  }
}

function HomePage(props) {
  const { classes } = props
  return (
    <Fragment>
      {props.user.initialized &&
        <Fade in={true}>
          <div className={classes.space}>
            <HomeHeader />
            <VillageNew />
            <VillageList />
          </div>
        </Fade>
      }
    </Fragment>
  )
}

HomePage.propTypes = {
  user: PropTypes.shape({
    initialized: PropTypes.bool
  })
}

export default withStyles(styles)(HomePage)
