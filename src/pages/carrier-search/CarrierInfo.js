import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import carrierInfoData from "./carrier-info-data";

function CarrierInfo(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          {carrierInfoData.map(paper => {
            return <Paper className={classes.paper}>{paper.carrierInfo}</Paper>;
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {carrierInfoData.map(paper => {
            return <Paper className={classes.paper}>{paper.subInfo}</Paper>;
          })}
        </Grid>
      </Grid>
    </div>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "-5%"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: "#f2f2f2"
  }
});

CarrierInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CarrierInfo);
