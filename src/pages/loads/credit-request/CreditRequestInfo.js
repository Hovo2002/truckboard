import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import creditRequestInfoData from "./credit-request-info-data";

function CreditRequestInfo(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <div className={classes.mainGrid}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              ID:{creditRequestInfoData.ID}
            </Paper>
            <Paper className={classes.paper}>
              Name:{creditRequestInfoData.name}
            </Paper>
            <Paper className={classes.paper}>
              MC Authority:{creditRequestInfoData.MCAuthority}
            </Paper>
            <Paper className={classes.paper}>
              Type:{creditRequestInfoData.type}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.secondGrid}>
            <Paper className={classes.paper}>
              Email:{creditRequestInfoData.email}
            </Paper>
            <Paper className={classes.paper}>
              Primary Number:{creditRequestInfoData.primaryNumber}
            </Paper>
            <Paper className={classes.paper}>
              Secondary Number:{creditRequestInfoData.secondaryNumber}
            </Paper>
            <Paper className={classes.paper}>
              Fax Number:{creditRequestInfoData.faxNumber}
            </Paper>
          </Grid>
        </div>
        <Grid item xs={12} sm={12} className={classes.alertsPaper}>
          <Paper className={classes.paper}>
            Alerts:{creditRequestInfoData.alerts}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            Primary Address:{creditRequestInfoData.primaryAddress}
          </Paper>
          <Paper className={classes.paper}>
            Billing Address:{creditRequestInfoData.billingAddress}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CreditRequestInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "-5%"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: "#f2f2f2"
  },
  mainGrid: {
    width: "98%",
    marginLeft: "1%",
    display: "flex"
  },
  secondGrid: {
    marginLeft: "1%"
  },
  alertsPaper: {
    marginTop: "2%",
    width: "100%"
  }
});

export default withStyles(styles)(CreditRequestInfo);
