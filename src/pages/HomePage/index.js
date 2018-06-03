import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Fade from '@material-ui/core/Fade'
import { withStyles } from '@material-ui/core/styles'

import HomeHeader from '../../components/HomeHeader'
import VillageList from '../../containers/VillageList'
import VillageNew from '../../containers/VillageNew'
import SearchBar from '../../components/SearchBar'

const styles = {
  list: {
    marginTop: 36,
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
    }
  }

  componentWillMount() {
    this.props.onMount()
  }

  componentWillUnmount() {
    this.props.onUnmount()
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm,
    })
  }

  closeForm() {
    this.setState({
      showForm: false,
    })
  }

  render() {
    const { classes } = this.props
    return (
      <Fragment>
        {this.props.user.initialized &&
          <Fade in={true}>
            <div>
              <HomeHeader showForm={this.state.showForm} toggleForm={ () => this.toggleForm() } />
              <div className={classes.list}>
                {this.state.showForm &&
                  <VillageNew closeForm={ () => this.closeForm() } />
                }
                <SearchBar onChange={ (e) => console.log(e.target.value) } />
                <VillageList />
              </div>
            </div>
          </Fade>
        }
      </Fragment>
    )
  }
}

HomePage.propTypes = {
  user: PropTypes.shape({
    initialized: PropTypes.bool
  }),
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired,
}

export default withStyles(styles)(HomePage)
