import { connect } from 'react-redux'

import HomePage from '../../pages/HomePage'

const mapStateToProps = ({ User }) => ({
  user: User
})

export default connect(mapStateToProps)(HomePage)
