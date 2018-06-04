import { connect } from 'react-redux'

import TalkForm from '../../components/TalkForm'
import * as talkActions from '../../actions/Talk'
import * as userActions from '../../actions/User'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onMount(villageId) {
    dispatch(talkActions.createSocket(villageId))
  },
  onUnmount(villageId) {
    dispatch(talkActions.removeSocket(villageId))
  },
  onChange(talkContent) {
    dispatch(userActions.changeTalkContent(talkContent))
  },
  onSubmit(villageId, villagerCode, talkContent) {
    dispatch(talkActions.createTalk(villageId, villagerCode, talkContent, null))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TalkForm)
