import { connect } from 'react-redux'

import TalkForm from '../../components/TalkForm'

const mapStateToProps = ({ User }, ownProps) => ({
  userVillagerCode: User.villager_codes.hasOwnProperty(ownProps.villageId) ? User.villager_codes[ownProps.villageId] : null
})

export default connect(mapStateToProps)(TalkForm)
