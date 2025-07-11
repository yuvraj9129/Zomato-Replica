import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";
import Menu from "./Menu";
import Review from "./Review";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800
  },
  image: {
    width: 228,
    height: 228
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function DetailedPage(prop) {
  const classes = useStyles();
  let location = useLocation();

  const [detail, setDetail] = React.useState([]);
  const [q, setQ] = React.useState(location.state.id);
  const API_KEY = "bab7f707b72ea0b1154b7d786a9f05e4";

  const baseUrl = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${q}`;
  React.useEffect(() => {
    fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "user-key": API_KEY
      }
    }).then((data) =>
      console.log(
        data.json().then((item) => {
          // console.log(item);

          setDetail(item);
        })
      )
    );
  }, [baseUrl]);

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary">
        <Link
          to={{
            pathname: "/",
            state: { id: "" }
          }}
        >
          Go Back
        </Link>
      </Button>
      <h3>About {detail.name}</h3>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={detail.thumb} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <h5>{detail.name}</h5>
                </Typography>
                <Typography variant="body2" gutterBottom></Typography>
                <Typography variant="body2" color="textSecondary"></Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <b>Daily Menu Items :</b> {detail.cuisines}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <b>Phone number :</b>
                  {detail.phone_numbers}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <b>Timings :</b>
                  {detail.timings}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ cursor: "pointer" }}
                ></Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ cursor: "pointer" }}
                ></Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">😋</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <div class="container">
        <div class="row">
          <div class="col m3">
            <Menu id={q}></Menu>
          </div>
          <div class="col m9">
            <Review id={q}></Review>
          </div>
        </div>
      </div>
    </div>
  );
}
