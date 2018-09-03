import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DialogTitle from "@material-ui/core/DialogTitle";

import TbMultiSelect from "./../../../../../components/TbMultiSelect";

import industryContactTypes from "./industry-contact-types";
import warehouseType from "./warehouse-type";
import industryContactsInputData from "./industry-contact-inputs-data";

class AddContactPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      warehouseRedeliver: true,
    };
  }

  switchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  changeContact = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, open, onClose } = this.props;

    return (
      <Dialog open={open} onClose={onClose} maxWidth={"md"}>
        <DialogTitle>Info Central Search</DialogTitle>
        <DialogContent>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel>Type</InputLabel>
              <Select
                value={this.state.type}
                onChange={this.changeContact}
                inputProps={{
                  name: "type"
                }}
              >
                {industryContactTypes.map(menuItem => {
                  return (
                    <MenuItem value={menuItem.indrustryType}>
                      {menuItem.indrustryType}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </form>

          <div className={classes.switchStyle}>
            Warehouse Redeliver:
            <Switch
              checked={this.state.warehouseRedeliver}
              onChange={this.switchChange("warehouseRedeliver")}
              value="warehouseRedeliver"
              color="primary"
            />
          </div>
          <div className={classes.warehouseTypeStyle}>
            {warehouseType.map(warehouseType => {
              return (
                <TbMultiSelect
                  showOptions={warehouseType.showOptions}
                  name={warehouseType.name}
                  options={warehouseType.options}
                  isCollapsible={warehouseType.isCollapsible}
                  isVertical={warehouseType.isVertical}
                />
              );
            })}{" "}
          </div>
          <div className={classes.textFieldStyle}>
            {industryContactsInputData.map(industryContact => {
              return (
                <TextField
                  label={industryContact.label}
                  placeholder={industryContact.placeholder}
                  className={classes.textField}
                />
              );
            })}
            <div className={classes.SearchCommStyle}>
              <TextField
                className={classes.inputStyle}
                label="Search"
                placeholder="Search"
                margin="normal"
              />
              <TextField
                className={classes.inputStyle}
                label="Comments"
                placeholder="Comments"
                margin="normal"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={""} color="primary">
            Save
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            color="secondary"
            autoFocus
          >
            Cencel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AddContactPopup.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  textField: {
    margin: 20
  },
  switchStyle: {
    marginLeft: "30%",
    marginTop: "-5%"
  },
  warehouseTypeStyle: {
    marginLeft: "65%",
    marginTop: "-7%"
  },
  button: {
    display: "block",
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  inputStyle: {
    width: "90%",
    margin: "5%"
  },
  textFieldStyle: {
    marginTop: "8%"
  },
  SearchCommStyle: {
    display: "flex",
    marginTop: "5%",
    margin: "3%"
  }
});

export default withStyles(styles)(AddContactPopup);
