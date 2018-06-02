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
import { Link } from 'react-router-dom'

import VillagerForm from '../../containers/VillagerForm'

class VillagerPage extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    return (
      <Fade in={true}>
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <IconButton component={Link} to={`${process.env.REACT_APP_PUBLIC_URL}/villages/${this.props.user.villageId}`}>
                <BackIcon />
              </IconButton>
              <Typography variant="title">
                村人一覧
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            {this.props.villagers.map((villager) =>
              <Fragment key={villager.id}>
                <ListItem>
                  <Avatar
                    src={require(`../../images/villager/${String(villager.image_no).padStart(2, "0")}.png`)}
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
            <VillagerForm />
          }
        </div>
      </Fade>
    )
  }
}

export default VillagerPage
