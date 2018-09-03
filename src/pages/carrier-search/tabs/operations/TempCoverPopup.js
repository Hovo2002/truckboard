import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

class TempCoverPopup extends React.Component {
  render() {
    const { classes, onClose, open } = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <DialogContentText className={classes.contentText}>
            <h1> Please Confirm </h1>
            <h4> You cannot undo this</h4>
            Mark Equipment Info As Temporarily Covered
          </DialogContentText>
          <div className={classes.ErrorIconStyle}>
            <ErrorOutlineIcon className={classes.ErrorIconStyle} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="raised" color="primary" className={classes.button}>
            Yes
          </Button>
          <Button
            variant="raised"
            color="secondary"
            className={classes.button}
            onClick={onClose}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const styles = theme => ({
  button: {
    margin: "2%"
  },
  contentText: {
    fontFamily: "italic",
    textAlign: "center"
  },
  ErrorIconStyle: {
    textAlign: "center",
    fontSize: "50px",
    color: "red",
    marginTop: "15px"
  }
});

TempCoverPopup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TempCoverPopup);
