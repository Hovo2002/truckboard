import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TbTable from "./../../../components/TbTable";

import watchedData from "./data/watchedData";

class Watched extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.table}>
        <TbTable data={watchedData} />
      </div>
    );
  }
}

Watched.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  table: {
    width: "76%"
  }
});

export default withStyles(styles)(Watched);
