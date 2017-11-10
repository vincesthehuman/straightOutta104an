import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Collapse from 'material-ui/transitions/Collapse'

const styles = {
  card: {
    maxWidth: 345,
    boxShadow: '5px 5px 5px #6d6d6d ',
    textAlign: 'left',
    marginBottom: '25px'
  },
  media: {
    height: 200,
    marginTop: 40
  },
  title: {
    fontSize: 20,
    color: '#5e5e5e ',
    paddingBottom: 5,
    fontWeight: 600
  },
  category: {
    float: 'right',
    padding: 10,
    paddingRight: 15,
    fontSize: 15,
    display: 'inline-block',
    color: '#777777 '
  },
  date: {
    float: 'left',
    padding: 10,
    paddingLeft: 15,
    fontSize: 15,
    display: 'inline-block',
    color: '#777777 '
  },
  content: {
    color: '#777777 '
  },
  button: {
    display: 'flex',
    float: 'right',
    paddingRight: 7,
    paddingBottom: 7
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
          <CardMedia className={classes.media} image={this.props.result.imageUrl} />
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
          <div className={classes.button}>
          <CardActions>
            <Button color="primary">DELA</Button>
            <Button raised color="primary" onClick={() => this.handleClick()}>{this.state.open ? "DÖLJ" : "LÄS MER"}</Button>
          </CardActions>
          </div>
        </Card>
      </div>
    )
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NewsCard)
