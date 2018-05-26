import { connect } from 'react-redux'

import VillagePage from '../../pages/VillagePage'
import * as userActions from '../../actions/User'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMount() {
    dispatch(userActions.selectVillage(ownProps.match.params.villageId))
  }
})

export default connect(null, mapDispatchToProps)(VillagePage)
