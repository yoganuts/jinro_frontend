import { connect } from 'react-redux'

import VillagerList from '../../components/VillagerList'
import * as actions from '../../actions/Villager'

const mapStateToProps = ({ Villager, User }, ownProps) => ({
  userVillagerCode: User.villager_codes[ownProps.villageId],
  villagers: Villager.villagers,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMount() {
    dispatch(actions.fetchVillagers(ownProps.villageId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerList)
