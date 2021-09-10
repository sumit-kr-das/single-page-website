import {
  Box,
  Card,
  CardActionArea,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  align:{
      margin: "2rem",
      boxShadow: "2px 0px 16px -2px rgba(92,91,91,0.5)"
  }
});

const Cards = ({firstName, lastName, email, photo}) => {
  const classes = useStyles();
  return (
    <Box className={classes.align}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={photo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {firstName} {lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant="contained">
            Share
          </Button>
          <Button size="small" color="secondary" variant="contained">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;
