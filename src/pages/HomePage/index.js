import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Fade from '@material-ui/core/Fade'

import HomeHeader from '../../components/HomeHeader'
import VillageList from '../../containers/VillageList'
import VillageNew from '../../containers/VillageNew'

export default function HomePage(props) {
  return (
    <Fragment>
      {props.user.initialized &&
        <Fade in={true}>
          <div>
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
