import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://www.google.se/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiZ7vrJtbHXAhWR6KQKHfAGDGkQjhwIBQ&url=https%3A%2F%2Fwww.agria.se%2Fkatt%2Fartiklar%2Fsjukdomar-och-skador%2Fkattens-urinvagssjukdomar%2F&psig=AOvVaw3uMFd0FzC59iTsvNdUxxtd&ust=1510314356027066"
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
          <Button dense color="primary">
            Dela
          </Button>
          <Button dense color="primary">
            Läs mer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);