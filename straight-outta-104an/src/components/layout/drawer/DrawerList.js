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
import { FoodIcon } from '../../../assets/icons/FoodIcon'
import { CultureIcon } from '../../../assets/icons/CultureIcon'
import { FashionIcon } from '../../../assets/icons/FashionIcon'
import { NewsIcon } from '../../../assets/icons/NewsIcon'
import { SportIcon } from '../../../assets/icons/SportIcon'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper
  }
})

class DrawerList extends React.Component {
  state = {
    open: false,
    food: false,
    culture: false,
    fashion: false,
    news: false,
    sports: false
  }

  handleClickFood() {
    this.setState({ food: !this.state.food })
  }

  handleClickCulture() {
    this.setState({ culture: !this.state.culture })
  }

  handleClickFashion() {
    this.setState({ fashion: !this.state.fashion })
  }

  handleClickNews() {
    this.setState({ news: !this.state.news })
  }

  handleClickSports() {
    this.setState({ sports: !this.state.sports })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <FoodIcon />
            </ListItemIcon>
            <ListItemText primary="Mat" />
            {this.state.food ? (
              <ExpandLess onClick={() => this.handleClickFood()} />
            ) : (
              <ExpandMore onClick={() => this.handleClickFood()} />
            )}
          </ListItem>
          <Collapse
            in={this.state.food}
            transitionDuration="auto"
            unmountOnExit
          >
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Underkategori" />
            </ListItem>
          </Collapse>

          <ListItem button>
            <ListItemIcon>
              <CultureIcon />
            </ListItemIcon>
            <ListItemText primary="Kultur" />
            {this.state.culture ? (
              <ExpandLess onClick={() => this.handleClickCulture()} />
            ) : (
              <ExpandMore onClick={() => this.handleClickCulture()} />
            )}
          </ListItem>
          <Collapse
            in={this.state.culture}
            transitionDuration="auto"
            unmountOnExit
          >
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Underkategori" />
            </ListItem>
          </Collapse>

          <ListItem button>
            <ListItemIcon>
              <FashionIcon />
            </ListItemIcon>
            <ListItemText primary="Mode" />
            {this.state.fashion ? (
              <ExpandLess onClick={() => this.handleClickFashion()} />
            ) : (
              <ExpandMore onClick={() => this.handleClickFashion()} />
            )}
          </ListItem>
          <Collapse
            in={this.state.fashion}
            transitionDuration="auto"
            unmountOnExit
          >
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Underkategori" />
            </ListItem>
          </Collapse>

          <ListItem button>
            <ListItemIcon>
              <NewsIcon />
            </ListItemIcon>
            <ListItemText primary="Nyheter" />
            {this.state.news ? (
              <ExpandLess onClick={() => this.handleClickNews()} />
            ) : (
              <ExpandMore onClick={() => this.handleClickNews()} />
            )}
          </ListItem>
          <Collapse
            in={this.state.news}
            transitionDuration="auto"
            unmountOnExit
          >
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Underkategori" />
            </ListItem>
          </Collapse>

          <ListItem button>
            <ListItemIcon>
              <SportIcon />
            </ListItemIcon>
            <ListItemText primary="Sport" />
            {this.state.sports ? (
              <ExpandLess onClick={() => this.handleClickSports()} />
            ) : (
              <ExpandMore onClick={() => this.handleClickSports()} />
            )}
          </ListItem>
          <Collapse
            in={this.state.sports}
            transitionDuration="auto"
            unmountOnExit
          >
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Underkategori" />
            </ListItem>
          </Collapse>
        </List>
      </div>
    )
  }
}

DrawerList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DrawerList)
