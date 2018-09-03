import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import TbTabBar from "./../../../components/TbTabBar";

import tabs from "./tabs";

function InfoCentralTab(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={4}>
      <TbTabBar tabs={tabs} />
    </Paper>
  );
}

InfoCentralTab.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    height: "auto"
  })
});

export default withStyles(styles)(InfoCentralTab);
