import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TbTable from "./../../../components/TbTable";

import temporaryCover from "./data/temporaryCover";

class TemporaryCoverTab extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.table} elevation={4}>
        <TbTable data={temporaryCover} />
      </div>
    );
  }
}

const styles = theme => ({
  table: {
    width: "57%",
    marginTop: theme.spacing.unit * 3
  }
});

TemporaryCoverTab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TemporaryCoverTab);
