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
  onSubmit(villageId, villageName) {
    dispatch(villageActions.createVillage(villageId, villageName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VillageForm)
