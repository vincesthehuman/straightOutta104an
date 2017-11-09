import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    maxWidth: 345,
    boxShadow: '5px 5px 5px #888888',
    textAlign: 'left',
    marginBottom: '25px'
  },
  media: {
    height: 200
  },
  category: {
    textAlign: 'right',
    padding: 10,
    fontSize: 'large',
    opacity: 0.75
  }
}

function NewsCard(props) {
  const { classes } = props
  return (
    <div style={{display: 'flex'}}>
      <Card className={classes.card}>
        <Typography className={classes.category} type="headline" component="h2">
          Djur
        </Typography>
        <CardMedia className={classes.media} title="Katt" image="" />
        <CardContent>
          <Typography type="headline" component="h2">
            Katt
          </Typography>
          <Typography component="p">
            Här kommer en nyhet om en katt! Den här katten är fin.
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary">Dela</Button>
          <Button raised>Läs mer</Button>
        </CardActions>
      </Card>
    </div>
  )
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NewsCard)
