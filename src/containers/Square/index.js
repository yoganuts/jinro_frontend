import { connect } from 'react-redux'

import Square from '../../components/Square'

const mapStateToProps = ({ User }) => ({
  userVillagerCode: User.villagerData.hasOwnProperty(User.currentVillageId) ? User.villagerData[User.currentVillageId].code : null
})

export default connect(mapStateToProps)(Square)
