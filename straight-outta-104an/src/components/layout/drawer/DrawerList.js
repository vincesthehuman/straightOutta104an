import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemIcon,
  ListItemText
} from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import SvgIcon from 'material-ui/SvgIcon'
import DraftsIcon from 'material-ui-icons/Drafts'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import {FoodIcon} from '../../../assets/icons/FoodIcon.js'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper
  }
})



class DrawerList extends React.Component {
  state = { open: false }

  handleClick() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <FoodIcon  />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {this.state.open ? (
              <ExpandLess onClick={() => this.handleClick()} />
            ) : (
              <ExpandMore onClick={() => this.handleClick()} />
            )}
          </ListItem>
          <Collapse
            in={this.state.open}
            transitionDuration="auto"
            unmountOnExit
          >
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Starred" />
            </ListItem>
          </Collapse>
          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </div>
    )
  }
}

DrawerList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DrawerList)
