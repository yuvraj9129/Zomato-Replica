import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Restaurants from "./Restaurants";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textfield: {
    margin: theme.spacing(1),
    width: "70ch"
  }
}));

export default function Input() {
  var val = "";
  const [state, setState] = React.useState({
    checkedB: false,
    checkedC: false
  });
  const [query, setQuery] = React.useState({
    query: "",
    checked: "",
    search: false
  });
  const handleChangeR = (event) => {
    setQuery({ ...query, checked: "restaurant" });
  };
  const handleChangeC = (event) => {
    setQuery({ ...query, checked: "cuisine" });
  };
  const handleInputChange = (e) => {
    val = e.target.value;
    setQuery({ ...query, query: val });
  };
  const search = () => {
    setQuery({ ...query, query: "", search: true });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid xs={12}>
          <h1>🍕codeGama🍟</h1>
        </Grid>
        <Grid item xs>
          <h6>City :Banglore</h6>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.textfield}
            onChange={handleInputChange}
            id="outlined-secondary"
            label="Cuisine and Restaurants"
            variant="outlined"
            color="secondary"
          />

          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChangeC}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Restaurants"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedCR}
                  onChange={handleChangeR}
                  name="checkedC"
                  color="primary"
                />
              }
              label="Cuisine"
            />
          </FormGroup>
        </Grid>
        <Grid item xs>
          <Button onClick={search} variant="contained" color="secondary">
            Search
          </Button>
        </Grid>
      </Grid>
      {query.search ? (
        <Restaurants></Restaurants>
      ) : (
        <h5>Search Cuisine and Restaurant In Banglore🍞🧀🍗</h5>
      )}
    </div>
  );
}
