import { connect } from 'react-redux'

import VillageForm from '../../components/VillageForm'
import * as villageActions from '../../actions/Village'
import * as userActions from '../../actions/User'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onMount() {
    dispatch(villageActions.createSocket())
  },
  onVillageChange(villageName) {
    dispatch(userActions.changeVillageName(villageName))
  },
  onVillagerChange(villagerName) {
    dispatch(userActions.changeVillagerName(villagerName))
  },
  onVillageImageChange(imageNo) {
    dispatch(userActions.changeVillageImage(imageNo))
  },
  onVillagerImageChange(imageNo) {
    dispatch(userActions.changeVillagerImage(imageNo))
  },
  onSubmit(villageId, villageName, villageImageNo, villagerImageNo) {
    dispatch(villageActions.createVillage(villageId, villageName, villageImageNo, villagerImageNo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VillageForm)
