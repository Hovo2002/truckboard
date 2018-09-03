import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TbTable from "./../../components/TbTable";
import directoryPageData from "./directory-page-data";

class DirectoryPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.directoryPageTitle}>Corporate Directory </div>
        <TbTable data={directoryPageData} />
      </div>
    );
  }
}
DirectoryPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  directoryPageTitle: {
    textAlign: "left",
    width: "100%",
    fontSize: "150%",
    color: "#3748AC"
  }
});
export default withStyles(styles)(DirectoryPage);
