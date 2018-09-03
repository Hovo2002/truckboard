import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.title}>Video</div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          Hello
        </Typography>
      </Paper>
    </div>
  );
}

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    height: "auto"
  }),
  title: {
    textAlign: "left",
    width: "100%",
    fontSize: "150%",
    color: "#3748AC"
  }
});

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
