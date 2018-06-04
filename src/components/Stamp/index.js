import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  stamp: {
    width: '100%',
  },
}

class Stamp extends Component {
  onSelect() {
    this.props.onSelect(
      this.props.user.villageId,
      this.props.user.villagerCode,
      this.props.stampNo
    )
  }

  render() {
    const { classes } = this.props
    return (
      <img
        src={require(`../../images/stamp/${String(this.props.stampNo).padStart(3, '0')}.png`)}
        alt="stamp"
        className={classes.stamp}
        onClick={ () => this.onSelect() }
      />
    )
  }
}

export default withStyles(styles)(Stamp)
