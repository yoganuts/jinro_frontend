import { connect } from 'react-redux'

import Stamp from '../../components/Stamp'
import * as talkActions from '../../actions/Talk'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
  onSelect(villageId, villagerCode, stampNo) {
    dispatch(talkActions.createTalk(villageId, villagerCode, null, stampNo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Stamp)
