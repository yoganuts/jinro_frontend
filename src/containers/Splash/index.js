import { connect } from 'react-redux'

import Splash from '../../components/Splash'
import * as userActions from '../../actions/User'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(userActions.initialized())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
