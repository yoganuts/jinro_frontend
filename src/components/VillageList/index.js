import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import Button from '@material-ui/core/Button'
import EnterIcon from '@material-ui/icons/DirectionsWalk'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: '100%'
  },
  enterButton: {
    color: 'rgba(255, 255, 255, 0.7)'
  }
})

class VillageList extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" style={{ height: 'auto' }} cols={2}>
            <ListSubheader component="div">村一覧(chat room list)</ListSubheader>
          </GridListTile>
          {this.props.villages.map(village =>
            <GridListTile key={village.id}>
              <img
                src={require(`../../images/village/${String(village.image_no).padStart(2, "0")}.jpeg`)}
                alt={village.name}
              />
              <GridListTileBar
                title={village.name}
                subtitle={`村民：${village.villagers.length}名`}
                actionIcon= {
                  <Button
                    component={Link}
                    to={`${process.env.REACT_APP_PUBLIC_URL}/villages/${village.id}`}
                    className={classes.enterButton}
                  >
                    <EnterIcon />入る
                  </Button>
                }
              />
            </GridListTile>
          )}
        </GridList>
      </div>
    )
  }
}

VillageList.propTypes = {
  villages: PropTypes.array.isRequired,
  onMount: PropTypes.func.isRequired
}

export default withStyles(styles)(VillageList)
