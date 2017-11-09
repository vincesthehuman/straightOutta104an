import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
    boxShadow: '5px 5px 5px #888888',
    textAlign: 'left'
  },
  media: {
    height: 200,
  },
  button: {
    color: 'black',
    marginRight: 20,
    background: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  },
  category: {
    textAlign: 'right',
    padding: 10,
    fontSize: 'large',
    opacity: 0.75
  }
};

function NewsCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
      <Typography className={classes.category} type="headline" component="h2">
            Djur
          </Typography>
        <CardMedia
          className={classes.media}
          image="/static/images/logo.png"
          title="Katt"
        />
        <CardContent>
        <Typography type="headline" component="h2">
            Katt
          </Typography>
          <Typography component="p">
            Här kommer en nyhet om en katt! Den här katten är fin.
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button}>
            Dela
          </Button>
          <Button className={classes.button}>
            Läs mer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);