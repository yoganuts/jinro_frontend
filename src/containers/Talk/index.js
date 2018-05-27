import { connect } from 'react-redux'

import Talk from '../../components/Talk'

const mapStateToProps = ({ User }) => ({
  user: User
})

export default connect(mapStateToProps)(Talk)
