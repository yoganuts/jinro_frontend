import { connect } from 'react-redux'

import VillageMenu from '../../components/VillageMenu'

const mapStateToProps = ({ User }) => ({
  user: User
})

export default connect(mapStateToProps)(VillageMenu)
