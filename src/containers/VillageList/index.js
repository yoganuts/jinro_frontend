import { connect } from 'react-redux'

import VillageList from '../../components/VillageList'
import * as villageActions from '../../actions/Village'

const mapStateToProps = ({ Village }) => ({
  villages: Village.villages,
})

const mapDispatchToProps = dispatch => ({
  onFetch(params) {
    dispatch(villageActions.fetchVillages(params))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VillageList)
