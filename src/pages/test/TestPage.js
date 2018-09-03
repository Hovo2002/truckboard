import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import TbTabBar from "./../../components/TbTabBar";
import tabs from "./test-page-data";

class TestPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.title}>Test</div>
        <Paper className={classes.root} elevation={4}>
          <TbTabBar tabs={tabs} />
        </Paper>
      </div>
    );
  }
}

TestPage.propTypes = {
  classes: PropTypes.object.isRequired
};

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

export default withStyles(styles)(TestPage);
