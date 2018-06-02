import { connect } from 'react-redux'

import VillagerPage from '../../pages/VillagerPage'

const mapStateToProps = ({ User }) => ({
  user: User
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(VillagerPage)
