import { connect } from 'react-redux'

import VillagePage from '../../pages/VillagePage'
import * as userActions from '../../actions/User'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMount() {
    dispatch(userActions.selectVillage(parseInt(ownProps.match.params.villageId, 10)))
  }
})

export default connect(null, mapDispatchToProps)(VillagePage)
