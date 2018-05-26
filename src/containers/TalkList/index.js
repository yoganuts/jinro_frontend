import { connect } from 'react-redux'

import TalkList from '../../components/TalkList'
import * as actions from '../../actions/Talk'

const mapStateToProps = ({ User, Talk }) => ({
  talks: Talk.talks,
  villageId: User.currentVillageId
})

const mapDispatchToProps = (dispatch) => ({
  onMount(villageId) {
    dispatch(actions.fetchTalks(villageId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TalkList)
