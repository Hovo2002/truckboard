import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import TbTabBar from "./../../components/TbTabBar";

import CustomerSearchForm from "./CustomerSearchForm";
import CustomerInfo from "./CustomerInfo";
import tabs from "./tabs";

class CustomerSearchPage extends React.Component {
  state = {
    selectCriteria: ""
  };

  changeValue = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.pageTitle}>Customer Search</div>
        <Paper className={classes.root} elevation={4}>
          <CustomerSearchForm />
          <CustomerInfo />
          <div className={classes.tabStyle}>
            <TbTabBar tabs={tabs} />
          </div>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  pageTitle: {
    textAlign: "left",
    width: "100%",
    fontSize: "150%",
    color: "#3748AC"
  },
  tabStyle: {
    marginTop: "3%"
  },
  multiSelectStyle: {
    marginTop: "5%",
    display: "flex"
  }
});

CustomerSearchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerSearchPage);
