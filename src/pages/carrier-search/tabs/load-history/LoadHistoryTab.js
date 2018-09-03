import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import TbTable from "./../../../../components/TbTable";

import loadHistoryData from "./load-history-data";

class LoadHistoryTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TbTable data={loadHistoryData} />
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  }
});

LoadHistoryTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoadHistoryTab);
