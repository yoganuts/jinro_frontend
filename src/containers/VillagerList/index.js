import { connect } from 'react-redux'

import VillagerList from '../../components/VillagerList'
import * as villagerActions from '../../actions/Villager'

const mapStateToProps = ({ User, Villager }) => ({
  villagers: Villager.villagers,
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onMount(villageId) {
    dispatch(villagerActions.fetchVillagers(villageId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerList)
