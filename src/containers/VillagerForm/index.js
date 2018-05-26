import { connect } from 'react-redux'

import VillagerForm from '../../components/VillagerForm'
import * as villagerActions from '../../actions/Villager'
import * as userActions from '../../actions/User'

const mapStateToProps = ({ User }) => ({
  userVillagerData: User.villagerData.hasOwnProperty(User.currentVillageId) ? User.villagerData[User.currentVillageId] : {}
})

const mapDispatchToProps = (dispatch) => ({
  onChange(content) {
    dispatch(userActions.changeVillagerName(content))
  },
  onSubmit(villageId, villagerName) {
    dispatch(villagerActions.createVillager(villageId, villagerName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerForm)
