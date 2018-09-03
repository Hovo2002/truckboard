import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TbTable from "./../../../components/TbTable";

import private_postdata from "./private_postdata";

class PrivatepostTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.tablesize}>
        <TbTable data={private_postdata} />
      </div>
    );
  }
}

const styles = theme => ({
  tablesize: {
    width: "67%"
  }
});

PrivatepostTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrivatepostTab);
