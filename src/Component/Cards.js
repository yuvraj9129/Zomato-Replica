import React from "react";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

function Cards(prop) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        to={{
          pathname: "/Detailedpage",
          state: { id: prop.data.id }
        }}
        className="brand-logo"
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={prop.data.thumb}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {prop.data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {prop.data.cuisines}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            View More
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}
export default Cards;
