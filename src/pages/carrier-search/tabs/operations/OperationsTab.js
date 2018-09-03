import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import TbTable from "./../../../../components/TbTable";

import operationsData from "./../operations/operations-data";
import OperationsActions from "./../operations/OperationsActions";

class OperationsTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.tableStyle}>
          <TbTable data={operationsData} />
        </div>
        <div>
          <Paper className={classes.paperStyle}>
            <Typography component="p">
              <OperationsActions />
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  paperStyle: {
    paddingTop: "2%",
    marginTop: "2%"
  }
});

OperationsTab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(OperationsTab);
