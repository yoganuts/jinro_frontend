import { connect } from 'react-redux'

import VillagerPage from '../../pages/VillagerPage'
import * as userActions from '../../actions/User'
import * as villagerActions from '../../actions/Villager'

const mapStateToProps = ({ User, Villager }) => ({
  user: User,
  villagers: Villager.villagers
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMount() {
    const villageId = parseInt(ownProps.match.params.villageId, 10)
    dispatch(userActions.selectVillage(villageId))
    dispatch(villagerActions.fetchVillagers(villageId))
    dispatch(villagerActions.createSocket(villageId))
  },
  onUnmount(villageId) {
    dispatch(villagerActions.removeSocket(villageId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerPage)
