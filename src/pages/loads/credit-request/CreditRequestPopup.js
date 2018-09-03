import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import CreditRequestSearch from "./CreditRequestSearch";
import CreditRequestInfo from "./CreditRequestInfo";

class CreditRequestPopup extends React.Component {
  state = {
    creditAvailable: "",
    creditRequest: "",
    orderChecked: true
  };

  creditChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  switchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const { classes, open, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={"md"}>
        <DialogTitle className={classes.titleDilog}>Credit Request</DialogTitle>
        <DialogContent>
          <CreditRequestSearch />
          <div className={classes.credit}>
            <FormControl fullWidth>
              <InputLabel htmlFor="adornment-amount">
                Credit Available
              </InputLabel>
              <Input
                id="adornment-amount"
                value={this.state.creditAvailable}
                onChange={this.creditChange("creditAvailable")}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth className={classes.creditReq}>
              <InputLabel htmlFor="adornment-amount">Credit Request</InputLabel>
              <Input
                id="adornment-amount"
                value={this.state.amount}
                onChange={this.creditChange("creditRequest")}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <FormControlLabel
            className={classes.switchStyle}
            label="Truck Order Not Used"
            control={
              <Switch
                checked={this.state.orderChecked}
                onChange={this.switchChange("orderChecked")}
                value="orderChecked"
                color="primary"
              />
            }
          />
          <div className={classes.creditRequestInfo}>
            {" "}
            <CreditRequestInfo />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="raised"
            onClick={onClose}
            color="primary"
            className={classes.button}
          >
            Request
          </Button>
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

CreditRequestPopup.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  titleDilog: {
    textAlign: "center",
    backgroundColor: "#e6e6e6"
  },
  button: {
    margin: "2%"
  },
  contentText: {
    fontFamily: "italic"
  },
  credit: {
    display: "flex",
    marginTop: "-10%",
    margin: "10%"
  },
  creditReq: {
    marginLeft: "10%"
  },
  creditRequestInfo: {
    marginTop: "10%"
  },
  switchStyle: {
    marginLeft: "76%",
    marginTop: "-8%"
  }
});

export default withStyles(styles)(CreditRequestPopup);
