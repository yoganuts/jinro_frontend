import { connect } from 'react-redux'

import Talk from '../../components/Talk'

const mapStateToProps = ({ User }) => ({
  userVillagerData: User.villagerData.hasOwnProperty(User.currentVillageId) ? User.villagerData[User.currentVillageId] : {}
})

export default connect(mapStateToProps)(Talk)
