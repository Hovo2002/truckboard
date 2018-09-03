import React from "react";
import { DatePicker } from "material-ui-pickers";
import PropTypes from "prop-types";

import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Send from "@material-ui/icons/Send";
import Close from "@material-ui/icons/Close";

import _ from "lodash";
import classNames from "classnames";

class TbPostLoadModal extends React.Component {
  constructor(props) {
    super(props);

    this.loadTypes = ["Reefer", "Van", "Van/Reefer", "Flat Bed"];

    this.state = {
      loadType: "",
      timeForRemoval: "",
      isPublic: true,
      trailerSize: "",
      rate: "",
      temperature: "",
      numberOfpicks: "",
      postradius: "",
      numberOfdrops: ""
    };
  }

  selectItem = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  selectNumber = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleFromDate = date => {
    this.setState({ dateFrom: date });
  };

  handleToDate = date => {
    this.setState({ dateTo: date });
  };

  changePublicState = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const {
      loadType,
      timeForRemoval,
      isPublic,
      trailerSize,
      rate,
      temperature,
      dateFrom,
      dateTo,
      numberOfPicks,
      numberOfDrops,
      postRadius
    } = this.state;

    const { classes, open, type, title, onClose } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={onClose}
      >
        <div className={classes.paper}>
          <Typography variant="title" id="modal-title">
            {title}
          </Typography>

          <div className={classes.total}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Load Type:</InputLabel>
              <Select
                value={loadType}
                onChange={this.selectItem}
                inputProps={{
                  name: "loadType"
                }}
              >
                {this.loadTypes.map(loadType => {
                  return <MenuItem value={loadType}>{loadType}</MenuItem>;
                })}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Time for Removal</InputLabel>
              <Select
                value={timeForRemoval}
                onChange={this.selectItem}
                inputProps={{
                  name: "timeForRemoval"
                }}
              >
                {_.range(1, 49).map(
                  value =>
                    value !== 0 && value !== 1 ? (
                      <MenuItem value={value}>{value} hours</MenuItem>
                    ) : (
                      <MenuItem value={value}>{value} hour</MenuItem>
                    )
                )}
              </Select>
            </FormControl>

            <h5 className={classes.private}>Private/Public</h5>
            <div className={classes.icons}>
              <FormControlLabel
                control={
                  <Switch
                    classes={{
                      switchBase: classes.iOSSwitchBase,
                      bar: classes.iOSBar,
                      icon: classes.iOSIcon,
                      iconChecked: classes.iOSIconChecked,
                      checked: classes.iOSChecked
                    }}
                    disableRipple
                    checked={isPublic}
                    onChange={this.changePublicState("isPublic")}
                    value="isPublic"
                  />
                }
              />
            </div>
          </div>
          <div className={classes.total}>
            {type === "fullLoad" ? (
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Trailer Size:</InputLabel>
                <Select
                  value={trailerSize}
                  onChange={this.selectItem}
                  inputProps={{
                    name: "trailerSize"
                  }}
                >
                  {_.range(53, 39).map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : type === "partialLoad" ? (
              <TextField
                id="search"
                label="Total Feet of Partial:"
                type="text"
                className={classes.textField}
                margin="normal"
              />
            ) : (
              ""
            )}

            <TextField
              id="search"
              label="Weight"
              type="text"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="rateNumber"
              label="Rate:"
              value={rate}
              onChange={this.selectNumber("rate")}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />

            <TextField
              id="temperatureNumber"
              label="Temperature:"
              value={temperature}
              onChange={this.selectNumber("temperature")}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
          </div>

          <h4 className={classes.subtitle}>Pickup</h4>
          <div className={classes.total}>
            <TextField
              id="search"
              label="Search for city"
              type="search"
              className={classes.textField}
              margin="normal"
            />

            <div className={classes.pick}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="picker">
                  <DatePicker
                    clearable
                    label="Pick up Date"
                    value={dateFrom}
                    onChange={this.handleFromDate}
                    animateYearScrolling={false}
                    leftArrowIcon={<KeyboardArrowLeft />}
                    rightArrowIcon={<KeyboardArrowRight />}
                  />
                </div>
              </MuiPickersUtilsProvider>
            </div>

            <TextField
              id="number"
              label="Number of Picks"
              value={numberOfPicks}
              onChange={this.selectNumber("numberOfPicks")}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
            {type === "fullLoad" ? (
              <TextField
                id="number"
                label="Post Radius"
                value={postRadius}
                onChange={this.selectNumber("postRadius")}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
              />
            ) : (
              ""
            )}
          </div>
          <h4 className={classes.subtitle}>Delivery</h4>
          <div className={classes.total}>
            <TextField
              id="search"
              label="Search for city"
              type="search"
              className={classes.textField}
              margin="normal"
            />

            <div className={classes.pick}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="picker">
                  <DatePicker
                    clearable
                    label="Delivery Date"
                    value={dateTo}
                    onChange={this.handleToDate}
                    animateYearScrolling={false}
                    leftArrowIcon={<KeyboardArrowLeft />}
                    rightArrowIcon={<KeyboardArrowRight />}
                  />
                </div>
              </MuiPickersUtilsProvider>
            </div>

            <TextField
              id="number"
              label="Number of Drops"
              value={numberOfDrops}
              onChange={this.selectNumber("numberOfDrops")}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
          </div>

          <TextField
            id="full-width"
            label="Comments"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            margin="normal"
          />

          <div className={classes.butgroup}>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={this.handleSend}
            >
              <Send
                className={classNames(classes.leftIcon, classes.iconSmall)}
              />
              Send
            </Button>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={onClose}
            >
              <Close
                className={classNames(classes.leftIcon, classes.iconSmall)}
              />
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 120,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 2,
    top: "15%",
    left: "25%"
  },
  subtitle: {
    fontWeight: 400,
    color: "#3748AC"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200
  },
  total: {
    display: "flex"
  },
  iOSSwitchBase: {
    "&$iOSChecked": {
      color: theme.palette.common.white,
      "& + $iOSBar": {
        backgroundColor: "#3748AC"
      }
    },
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  iOSChecked: {
    transform: "translateX(35px)",
    "& + $iOSBar": {
      opacity: 1,
      border: "none"
    }
  },
  iOSBar: {
    borderRadius: 4,
    width: 83,
    height: 30,
    marginTop: -15,
    marginLeft: -35,
    border: "solid 1px",
    borderColor: "#3748AC",
    backgroundColor: "white",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  iOSIcon: {
    width: 24,
    height: 24,
    color: "#3748AC"
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1],
    color: "white"
  },
  icons: {
    marginTop: 19,
    marginLeft: -67
  },
  private: {
    marginLeft: 39,
    marginTop: 12
  },
  button: {
    margin: theme.spacing.unit,
    border: "solid 1px",
    borderColor: "#3748AC",
    backgroundColor: "#3748AC",
    color: "white",
    marginBottom: "2%"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    marginTop: 9
  },
  pick: {
    marginTop: "9px"
  },
  butgroup: {
    display: "flex",
    marginLeft: "75%"
  }
});

TbPostLoadModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TbPostLoadModal);
