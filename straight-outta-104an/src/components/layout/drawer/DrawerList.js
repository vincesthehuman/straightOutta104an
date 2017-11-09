import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import InboxIcon from 'material-ui-icons/Inbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import StarBorder from 'material-ui-icons/StarBorder'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper
  }
})

class DrawerList extends React.Component {
  state = { open: false }

  test(message) {
    console.log(message)
    //this.setState({ open: !this.state.open })
  }

  handleClick() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <List>
          <ListItem button onClick={() => this.handleClick()}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={this.state.open}
            transitionDuration="auto"
            unmountOnExit
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Starred" />
            </ListItem>
          </Collapse>
          <ListItem button onClick={() => this.handleClick()}>
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
