import { connect } from 'react-redux'

import Talk from '../../components/Talk'

const mapStateToProps = ({ User }, ownProps) => ({
  userVillagerData: User.villagerData.hasOwnProperty(ownProps.villageId) ? User.villagerData[ownProps.villageId] : {}
})

export default connect(mapStateToProps)(Talk)
