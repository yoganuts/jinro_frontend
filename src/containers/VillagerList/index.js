import { connect } from 'react-redux'

import VillagerList from '../../components/VillagerList'
import * as actions from '../../actions/Villager'

const mapStateToProps = ({ User, Villager }) => ({
  villagers: Villager.villagers,
  villageId: User.currentVillageId
})

const mapDispatchToProps = (dispatch) => ({
  onMount(villageId) {
    dispatch(actions.fetchVillagers(villageId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerList)
