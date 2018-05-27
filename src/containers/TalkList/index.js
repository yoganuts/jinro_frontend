import { connect } from 'react-redux'

import TalkList from '../../components/TalkList'
import * as talkActions from '../../actions/Talk'

const mapStateToProps = ({ User, Talk }) => ({
  talks: Talk.talks,
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onMount(villageId) {
    dispatch(talkActions.fetchTalks(villageId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TalkList)
