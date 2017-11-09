import React from 'react'
import Drawer from 'material-ui/Drawer'
import DrawerList from '../drawer/DrawerList'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styles = theme => ({
  root: {
    marginTop: 0,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  listFull: {
    width: 'auto'
  }
})

class Header extends React.Component {
  state = {
    open: false
  }

  showDrawer() {
    this.setState({ open: !this.state.open })
  }
  toggleDrawer = () => () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { classes } = this.props
    const sideList = (
      <div className={classes.list}>
        <DrawerList />
      </div>
    )
    return (
      <div className={classes.drawer}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => this.showDrawer()}
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Straight outta 104an!
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onRequestClose={this.toggleDrawer()}>
          <div tabIndex={0} role="button">
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
