import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TbTable from "./../../../../components/TbTable";

import newMatchesData from "./data/allMatches";

class NewMatchesTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TbTable data={newMatchesData} className={classes.table} />
      </div>
    );
  }
}

NewMatchesTab.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: "58%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    width: "50%"
  }
});

export default withStyles(styles)(NewMatchesTab);
