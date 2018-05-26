import { connect } from 'react-redux'

import VillageList from '../../components/VillageList'
import * as villageActions from '../../actions/Village'

const mapStateToProps = ({ Village }) => ({
  villages: Village.villages,
})

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(villageActions.fetchVillages())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VillageList)
