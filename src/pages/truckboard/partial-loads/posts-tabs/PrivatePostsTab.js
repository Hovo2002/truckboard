import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TbTable from "./../../../../components/TbTable";

import privatePostsData from "./data/privatePosts";

class PrivatePostsTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.table}>
        <TbTable data={privatePostsData} />
      </div>
    );
  }
}

PrivatePostsTab.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  table: {
    width: "58%"
  }
});

export default withStyles(styles)(PrivatePostsTab);
