import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TbTable from "../../components/TbTable";

import DateRangePicker from "./Picker";

import month_profit from "./month_profit";
import general_data from "./general_data";
import info_data from "./info_data";

function MyStatsTab(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.title}>Agent Statistics </div>
      <h4 className={classes.subtitle}>Filters </h4>
      <DateRangePicker />
      <h4 className={classes.subtitle}>Monthly Stats</h4>
      <TbTable data={month_profit} />
      <h4 className={classes.subtitle}>Totals</h4>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={24} sm={12}>
            {info_data.map(paper => {
              return (
                <Paper className={classes.paper}>{paper.infodatavalue}</Paper>
              );
            })}
          </Grid>
        </Grid>
      </div>
      <h4 className={classes.subtitle}>Average</h4>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={24} sm={12}>
            {general_data.map(paper => {
              return (
                <Paper className={classes.paper}>
                  {paper.generaldatavalue}
                </Paper>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
const styles = theme => ({
  title: {
    textAlign: "left",
    width: "100%",
    fontSize: "150%",
    color: "#3748AC"
  },
  subtitle: {
    fontWeight: 400,
    color: "#3748AC"
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2
  }
});

MyStatsTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyStatsTab);
