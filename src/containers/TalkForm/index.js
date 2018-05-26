import { connect } from 'react-redux'

import TalkForm from '../../components/TalkForm'
import * as talkActions from '../../actions/Talk'
import * as userActions from '../../actions/User'

const mapStateToProps = ({ User }, ownProps) => ({
  userVillagerData: User.villagerData.hasOwnProperty(ownProps.villageId) ? User.villagerData[ownProps.villageId] : {}
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
