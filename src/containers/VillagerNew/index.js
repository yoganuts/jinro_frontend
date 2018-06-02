import { connect } from 'react-redux'

import VillagerNew from '../../components/VillagerNew'
import * as villagerActions from '../../actions/Villager'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onMount(villageId) {
    dispatch(villagerActions.createSocket(villageId))
  },
  onSubmit(villageId, villagerName, villagerImageNo) {
    dispatch(villagerActions.createVillager(villageId, villagerName, villagerImageNo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerNew)
