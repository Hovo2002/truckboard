import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TbTable from "./../../../components/TbTable";

import public_postdata from "./public_postdata";

class PublicPostTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.tablesize}>
        <TbTable data={public_postdata} />
      </div>
    );
  }
}

const styles = theme => ({
  tablesize: {
    width: "67%"
  }
});

PublicPostTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PublicPostTab);
