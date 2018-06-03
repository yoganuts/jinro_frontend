import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 3,
  },
  base: {
    display: 'flex',
    paddingLeft: 16,
    paddingRight: 16,
  },
  input: {
    border: '1px solid #ccc',
    borderRadius: 16,
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
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.input,
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(SearchBar)
