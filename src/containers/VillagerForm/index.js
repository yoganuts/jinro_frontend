import { connect } from 'react-redux'

import VillagerForm from '../../components/VillagerForm'
import * as villagerActions from '../../actions/Villager'
import * as userActions from '../../actions/User'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onMount(villageId) {
    dispatch(villagerActions.createSocket(villageId))
  },
  onChange(villagerName) {
    dispatch(userActions.changeVillagerName(villagerName))
  },
  onSubmit(villageId, villagerName) {
    dispatch(villagerActions.createVillager(villageId, villagerName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerForm)
