import { connect } from 'react-redux'

import VillagerList from '../../components/VillagerList'
import * as villagerActions from '../../actions/Villager'

const mapStateToProps = ({ User, Villager }) => ({
  villagers: Villager.villagers,
  villageId: User.currentVillageId,
  userVillagerCode: User.villagerData.hasOwnProperty(User.currentVillageId) ? User.villagerData[User.currentVillageId].code : null
})

const mapDispatchToProps = (dispatch) => ({
  onMount(villageId) {
    dispatch(villagerActions.fetchVillagers(villageId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerList)
