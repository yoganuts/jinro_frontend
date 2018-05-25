import { connect } from 'react-redux'

import VillageList from '../../components/VillageList'
import * as actions from '../../actions/Village'

const mapStateToProps = ({ Village }) => ({
  villages: Village.villages,
})

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(actions.fetchVillages())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VillageList)
