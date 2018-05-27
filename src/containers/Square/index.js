import { connect } from 'react-redux'

import Square from '../../components/Square'

const mapStateToProps = ({ User }) => ({
  user: User
})

export default connect(mapStateToProps)(Square)
