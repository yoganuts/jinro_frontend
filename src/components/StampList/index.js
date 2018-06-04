import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Stamp from '../../containers/Stamp'

const styles = {
  root: {
    paddingLeft: 12,
    paddingRight: 12,
    overflow: 'scroll',
  },
}

function StampList(props) {
  const { classes } = props
  let stamps = []
  for (let i=0; i<4; i++) {
    stamps.push(
      <Grid item xs={3} sm={2} key={i}>
        <Stamp stampNo={i} />
      </Grid>
    )
  }
  return (
    <Grid container className={classes.root}>
      {stamps}
    </Grid>
  )
}

export default withStyles(styles)(StampList)
