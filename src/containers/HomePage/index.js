import { connect } from 'react-redux'

import HomePage from '../../pages/HomePage'
import * as villageActions from '../../actions/Village'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onMount() {
    dispatch(villageActions.createSocket())
  },
  onUnmount() {
    dispatch(villageActions.removeSocket())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
