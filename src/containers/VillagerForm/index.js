import { connect } from 'react-redux'

import VillagerForm from '../../components/VillagerForm'
import * as villagerActions from '../../actions/Villager'
import * as userActions from '../../actions/User'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onChange(villagerName) {
    dispatch(userActions.changeVillagerName(villagerName))
  },
  onSubmit(villageCode, villagerName) {
    dispatch(villagerActions.createVillager(villageCode, villagerName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerForm)
