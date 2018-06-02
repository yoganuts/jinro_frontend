import React, { Component, Fragment } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Fade from '@material-ui/core/Fade'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import BackIcon from '@material-ui/icons/KeyboardArrowLeft'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import VillagerNew from '../../containers/VillagerNew'

const styles = {
  root: {
    top: 0,
    position: 'fixed',
    width: '100%',
    zIndex: 999,
  },
  toolbar: {
    minHeight: 36,
    justifyContent: 'space-between',
  },
  icon: {
    width: 36,
    height: 36,
  },
  list: {
    marginTop: 36,
  },
}

class VillagerPage extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    const { classes } = this.props
    return (
      <Fade in={true}>
        <div>
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Toolbar className={classes.toolbar}>
                <IconButton
                  component={Link}
                  to={`${process.env.REACT_APP_PUBLIC_URL}/villages/${this.props.user.villageId}`}
                  className={classes.icon}
                >
                  <BackIcon />
                </IconButton>
                <Typography variant="subheading">
                  村人一覧
                </Typography>
                <IconButton className={classes.icon}>
                </IconButton>
              </Toolbar>
            </AppBar>
          </div>
          <List className={classes.list}>
            {this.props.villagers.map((villager) =>
              <Fragment key={villager.id}>
                <ListItem>
                  <Avatar
                    src={require(`../../images/villager/${String(villager.image_no).padStart(2, "0")}.jpg`)}
                    alt={villager.name}
                  />
                  <ListItemText>
                    {villager.name} {this.props.user.villagerCode === villager.code && '(you)'}
                  </ListItemText>
                </ListItem>
                <Divider inset component="li" />
              </Fragment>
            )}
          </List>
          {!this.props.user.villagerCode &&
            <VillagerNew />
          }
        </div>
      </Fade>
    )
  }
}

export default withStyles(styles)(VillagerPage)
