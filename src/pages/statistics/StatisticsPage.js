import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import TbTabBar from "../../components/TbTabBar";

import tabs from "./tabs";

function StatisticsPage(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.title}>Statistics</div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          <div>
            <TbTabBar tabs={tabs} />
          </div>
        </Typography>
      </Paper>
    </div>
  );
}

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    height: "auto"
  }),
  title: {
    textAlign: "left",
    width: "100%",
    fontSize: "150%",
    color: "#3748AC"
  }
});

StatisticsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StatisticsPage);
