import { connect } from 'react-redux'

import TalkList from '../../components/TalkList'
import * as actions from '../../actions/Talk'

const mapStateToProps = ({ Talk, User }, ownProps) => ({
  userVillagerCode: User.villager_codes.hasOwnProperty(ownProps.villageId) ? User.villager_codes[ownProps.villageId] : null,
  talks: Talk.talks,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMount() {
    dispatch(actions.fetchTalks(ownProps.villageId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TalkList)
