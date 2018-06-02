import { connect } from 'react-redux'

import VillagerForm from '../../components/VillagerForm'
import * as userActions from '../../actions/User'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onVillagerChange(villagerName) {
    dispatch(userActions.changeVillagerName(villagerName))
  },
  onVillagerImageChange(imageNo) {
    dispatch(userActions.changeVillagerImage(imageNo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerForm)
