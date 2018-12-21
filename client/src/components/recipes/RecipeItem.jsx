import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Collapse,
  Avatar,
  IconButton,
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ExpandMore as ExpandMoreIcon,
  MoreVert as MoreVertIcon,
} from '@material-ui/icons';

const styles = theme => ({
  recipeCard: {
    margin: '20px 0',
    width: '320px',
  },
  recipeCardHeader: {
    height: '80px',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  recipeCardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  recipeCardContent: {
    overflow: 'hidden',
    textAlign: 'center',
    height: '200px',
    padding: '32px 20px',
  },
  recipeCardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  recipeAvatar: {
    height: 60,
    width: 60,
  },
});

class RecipeItem extends Component {
  state = {
    expanded: false,
    isFavorited: false,
  };

  handleExpandClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  };

  handleFavoriteCluck = () => {
    this.setState(prevState => ({
      isFavorited: !prevState.isFavorited,
    }));
  };

  render() {
    const { recipe, classes } = this.props;
    const { expanded, isFavorited } = this.state;

    return (
      <Grid item>
        <div className="recipe-item">
          <Card className={classes.recipeCard} raised>
            <CardHeader
              avatar={(
                <Avatar src={`/${recipe.user.image}`} className={classes.recipeAvatar} />
              )}
              action={(
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              )}
              title={recipe.title}
              subheader="September 14, 2016"
            />
            <CardActionArea component={Link} to={`/recipes/${recipe._id}`}>
              <CardMedia
                image={recipe.image}
                title="Paella dish"
                className={classes.recipeCardMedia}
              />
            </CardActionArea>
            <CardContent className={classes.recipeCardContent}>
              <Typography component="body1">
                {recipe.description}
              </Typography>
            </CardContent>
            <CardActions className={classes.recipeCardActions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon color={isFavorited ? 'action' : ''} />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
            </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                  chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                  salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                  minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                  to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                  cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
            </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
              </CardContent>
            </Collapse>
          </Card>

          {/* <Link to={`/recipes/${recipe._id}`} className="btn text-dark">
        <Card className="bg-light mb-3">
          <CardImg src={img} alt="" top />
          <CardBody>
            <CardTitle className="text-capitalize">{recipe.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              {recipe.ingredient}
            </CardSubtitle>
            <CardText>Description of recipe</CardText>
          </CardBody>
        </Card>
      </Link> */}
        </div>
      </Grid>
    );
  }
}

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    ingredient: PropTypes.object.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RecipeItem);
