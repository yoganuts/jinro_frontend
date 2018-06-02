import { connect } from 'react-redux'

import VillagePage from '../../pages/VillagePage'
import * as userActions from '../../actions/User'
import * as villageActions from '../../actions/Village'

const mapStateToProps = ({ User, Village }) => ({
  user: User,
  village: Village.village
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMount() {
    const villageId = parseInt(ownProps.match.params.villageId, 10)
    dispatch(userActions.selectVillage(villageId))
    dispatch(villageActions.fetchVillage(villageId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagePage)
