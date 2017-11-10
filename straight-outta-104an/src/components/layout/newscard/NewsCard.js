import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Collapse from 'material-ui/transitions/Collapse'

const styles = {
  card: {
    maxWidth: 345,
    boxShadow: '5px 5px 5px #888888',
    textAlign: 'left',
    marginBottom: '25px'
  },
  media: {
    height: 200,
    marginTop: 40
  },
  category: {
    float: 'right',
    padding: 10,
    fontSize: 'large',
    opacity: 0.75,
    display: 'inline-block'
  },
  date: {
    float: 'left',
    padding: 10,
    fontSize: 'small',
    opacity: 0.75,
    display: 'inline-block'
  },
  button: {
   float: 'right'
  }
}

class NewsCard extends React.Component {
  state = { open: false }
  
  handleClick() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { classes } = this.props
    return (
      <div style={{ display: 'flex' }}>
        <Card className={classes.card}>
        <Typography
            className={classes.date}
            type="headline"
            component="h2"
          >
            {this.props.result.date}
          </Typography>
          <Typography
            className={classes.category}
            type="headline"
            component="h2"
          >
            {this.props.result.subCategory}
          </Typography>
          <CardMedia className={classes.media} image="https://cdn2.cdnme.se/cdn/8-2/422946/images/2008/24649_450_1206533212_1782186.jpg" />
          <CardContent>
            <Typography type="headline" component="h2">
              {this.props.result.title}
            </Typography>
            <Typography component="p">
             {this.props.result.content.slice(0, 80) + "..."}
            </Typography> 
            <Collapse
              in={this.state.open}
              transitionDuration="auto"
              unmountOnExit
            > 
            <Typography component="p">
              {this.props.result.content}
            </Typography>
            </Collapse>
          </CardContent>
          <CardActions className={classes.button}>
            <Button raised onClick={() => this.handleClick()}>Läs mer</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NewsCard)
