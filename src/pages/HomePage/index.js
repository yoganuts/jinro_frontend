import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Fade from '@material-ui/core/Fade'

import Header from '../../components/Header'
import VillageList from '../../containers/VillageList'
import VillageForm from '../../containers/VillageForm'

export default function HomePage(props) {
  return (
    <Fragment>
      {props.user.initialized &&
        <Fade in={true} timeout={500}>
          <div>
            <Header />
            <VillageForm />
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