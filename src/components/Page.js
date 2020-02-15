import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ContentCard from "./ContentCard";

const classes = () => ({
  typography: {
    textAlign: "center"
  }
});

class Page extends Component {
  render() {
    return (
      <div>
        <Grid container xs={12} spacing={3} direction="row">
          <Grid item xs={6} spacing={8}>
            <ContentCard direction="right" />
          </Grid>
          <Grid item xs={6} spacing={8}>
            <ContentCard direction="left" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(classes)(Page);
