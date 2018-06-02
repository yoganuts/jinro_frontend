import { connect } from 'react-redux'

import VillageNew from '../../components/VillageNew'
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
  onVillageImageChange(imageNo) {
    dispatch(userActions.changeVillageImage(imageNo))
  },
  onSubmit(villageId, villageName, villageImageNo, villagerImageNo) {
    dispatch(villageActions.createVillage(villageId, villageName, villageImageNo, villagerImageNo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VillageNew)
