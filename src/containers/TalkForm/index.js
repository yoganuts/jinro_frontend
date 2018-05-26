import { connect } from 'react-redux'

import TalkForm from '../../components/TalkForm'
import * as talkActions from '../../actions/Talk'
import * as userActions from '../../actions/User'

const mapStateToProps = ({ User }) => ({
  userVillagerData: User.villagerData.hasOwnProperty(User.currentVillageId) ? User.villagerData[User.currentVillageId] : {}
})

const mapDispatchToProps = (dispatch) => ({
  onMount() {
    dispatch(talkActions.createSocket())
  },
  onChange(content) {
    dispatch(userActions.changeTalkContent(content))
  },
  onSubmit(villagerCode, talkContent) {
    dispatch(talkActions.createTalk(villagerCode, talkContent))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TalkForm)
