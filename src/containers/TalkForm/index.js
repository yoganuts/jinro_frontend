import { connect } from 'react-redux'

import TalkForm from '../../components/TalkForm'
import * as talkActions from '../../actions/Talk'
import * as userActions from '../../actions/User'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onMount() {
    dispatch(talkActions.createSocket())
  },
  onChange(talkContent) {
    dispatch(userActions.changeTalkContent(talkContent))
  },
  onSubmit(villagerCode, talkContent) {
    dispatch(talkActions.createTalk(villagerCode, talkContent))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TalkForm)
