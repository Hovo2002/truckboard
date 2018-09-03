import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class CommentsTab extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            Comments history
          </Typography>
          <Typography component="p" />
          Some comment..
        </Paper>
        <form className={classes.commentLabel} noValidate autoComplete="off">
          <TextField
            id="Comment"
            InputLabelProps={{
              shrink: true
            }}
            placeholder="Add a comments"
            fullWidth
            margin="normal"
          />
        </form>
        <div className={classes.buttonStyle}>
          <Button fullWidth variant="raised" color="primary" disableRipple>
            Add Comments
          </Button>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  commentLabel: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "3%"
  },
  buttonStyle: {
    marginTop: "1.5%"
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

CommentsTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CommentsTab);
