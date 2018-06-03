import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  base: {
    display: 'flex',
    paddingLeft: 16,
    paddingRight: 16,
  }
}

function SearchBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <div className={classes.base}>
        <TextField
          fullWidth
          placeholder="検索"
          onChange={ (e) => props.onChange(e) }
        />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(SearchBar)
