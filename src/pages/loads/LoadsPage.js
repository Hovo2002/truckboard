import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import TbTable from "./../../components/TbTable";
import EquipmentRequestPopup from "./equipment-request/EquipmentRequestPopup";
import LoadFilterForm from "./LoadFilterForm";
import CreditRequestPopup from "./credit-request/CreditRequestPopup";

import creditRequestData from "./credit-request-data";
import equipmentRequestData from "./equipment-request-data";
import loadsData from "./loads-data";

class LoadsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCreditRequest: false,
      openEquipmentRequest: false
    };
  }
  showCreditRequest = () => {
    this.setState({ openCreditRequest: true });
  };

  closeCreditRequest = () => {
    this.setState({ openCreditRequest: false });
  };
  showEquipmentRequest = () => {
    this.setState({ openEquipmentRequest: true });
  };

  closeEquipmentRequest = () => {
    this.setState({ openEquipmentRequest: false });
  };
  render() {
    const { classes } = this.props;
    const { openCreditRequest } = this.state;
    const { openEquipmentRequest } = this.state;
    return (
      <div>
        <div className={classes.title}>Loads</div>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            <div className={classes.request}>
              <div className={classes.creditRequest}>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes.button}
                  onClick={this.showCreditRequest}
                >
                  Credit Request
                </Button>
                <CreditRequestPopup
                  open={openCreditRequest}
                  onClose={this.closeCreditRequest}
                />
                <TbTable data={creditRequestData} />
              </div>
              <div className={classes.equipmentRequest}>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes.button}
                  onClick={this.showEquipmentRequest}
                >
                  Equipment Request
                </Button>
                <EquipmentRequestPopup
                  open={openEquipmentRequest}
                  onClose={this.closeEquipmentRequest}
                />
                <TbTable data={equipmentRequestData} />
              </div>
            </div>
          <Button
              variant="contained"
              fullWidth
              color="primary"
              className={classes.newLoadButton}
            >
              New Load
            </Button>
            <LoadFilterForm />
            <div className={classes.loadTB}>
              <TbTable data={loadsData} />
            </div>
          </Typography>
        </Paper>
      </div>
    );
  }
}
LoadsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

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
  },
  creditRequest: {
    width: "37%",
    margin: "0.5%"
  },
  equipmentRequest: {
    width: "36%",
    margin: "0.5%"
  },
  request: {
    display: "flex",
    width: "100%"
  },
  loadTB: {
    width: "75%"
  },
  newLoadButton:{
    marginTop: "2%",
    marginLeft: "25%",
    width: "30%",
  }
});

export default withStyles(styles)(LoadsPage);
