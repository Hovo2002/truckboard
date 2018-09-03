import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class MarkEquipmentPopup extends React.Component {
  render() {
    const { classes, open, onClose } = this.props;
    return (
      <Dialog aria-labelledby="form-dialog-title" open={open} onClose={onClose}>
        <DialogTitle className={classes.titleDilog}>
          MARK EQUIPMENT AS...
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.contentText}>
            Phone 1:
          </DialogContentText>
          <div className={classes.phone1Style}>
            <Button
              variant="raised"
              color="secondary"
              className={classes.button}
            >
              Refused My Load
            </Button>
            <Button
              variant="raised"
              color="secondary"
              className={classes.button}
            >
              Wrong Location
            </Button>
            <Button
              variant="raised"
              color="secondary"
              className={classes.button}
            >
              No Answer
            </Button>
            <Button variant="raised" color="primary" className={classes.button}>
              Just Checking in
            </Button>
          </div>
          <DialogContentText className={classes.contentText}>
            Phone 2:
          </DialogContentText>
          <div className={classes.phone2Style}>
            <Button
              variant="raised"
              color="secondary"
              className={classes.button}
            >
              Wrong Available Date
            </Button>
            <Button
              variant="raised"
              color="secondary"
              className={classes.button}
            >
              Has A load
            </Button>
            <Button variant="raised" color="primary" className={classes.button}>
              Temp Cover
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="raised"
            onClick={onClose}
            color="secondary"
            className={classes.button}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const styles = theme => ({
  titleDilog: {
    textAlign: "center",
    backgroundColor: "#e6e6e6"
  },
  phone1Style: {
    display: "flex",
    margin: "5%",
    float: "left"
  },
  phone2Style: {
    display: "flex",
    margin: "5%",
    overflow: "hidden"
  },
  button: {
    margin: "2%"
  },
  contentText: {
    fontFamily: "italic"
  }
});

MarkEquipmentPopup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MarkEquipmentPopup);
