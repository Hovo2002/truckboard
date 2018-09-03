import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import EquipmentRequestSearch from "./EquipmentRequestSearch";
import TbTable from "./../../../components/TbTable";

import equipmentRequestData from "./equipment-request-data";

const EquipmentInfo = [
  {
    generalInfo: "Carrier Name:"
  },
  {
    generalInfo: "Insurance Exp Date:"
  }
];

class EquipmentRequestPopup extends React.Component {
  state = {
    equipmentAvailable: "",
    equipmentRequest: "",
    orderChecked: true
  };

  switchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const { classes, open, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose} maxWidth={"md"}>
        <DialogTitle className={classes.titleDilog}>
          Equipment Request
        </DialogTitle>
        <DialogContent>
          <EquipmentRequestSearch />
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
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={12}>
                {EquipmentInfo.map(paper => {
                  return (
                    <Paper className={classes.paper}>{paper.generalInfo}</Paper>
                  );
                })}
              </Grid>
            </Grid>
          </div>

          <TbTable data={equipmentRequestData} />
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

EquipmentRequestPopup.propTypes = {
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
  switchStyle: {
    marginLeft: "76%",
    marginTop: "-20%"
  },
  root: {
    flexGrow: 1,
    marginTop: "-5%"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: "#f2f2f2"
  }
});

export default withStyles(styles)(EquipmentRequestPopup);
