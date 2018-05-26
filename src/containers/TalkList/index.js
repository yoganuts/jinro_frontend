import { connect } from 'react-redux'

import TalkList from '../../components/TalkList'
import * as actions from '../../actions/Talk'

const mapStateToProps = ({ Talk }, ownProps) => ({
  talks: Talk.talks,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMount() {
    dispatch(actions.fetchTalks(ownProps.villageId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TalkList)
