import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TbTable from "./../../../../components/TbTable";

import publicPostsData from "./data/publicPosts";

class PublicPostsTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.table}>
        <TbTable data={publicPostsData} />
      </div>
    );
  }
}

PublicPostsTab.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  table: {
    width: "58%"
  }
});

export default withStyles(styles)(PublicPostsTab);
