import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import TbTabBar from "./../../components/TbTabBar";
import TbMultiSelect from "./../../components/TbMultiSelect";

import CarrierSearchForm from "./CarrierSearchForm";
import CarrierInfo from "./CarrierInfo";
import carrierMultiSelectData from "./carrier-MultiSelect-data";
import tabs from "./tabs";

class CarrierSearchPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.Pagetitle}>Carrier Search</div>
        <Paper className={classes.root} elevation={4}>
          <CarrierSearchForm />
          <CarrierInfo />
          <div className={classes.multiSelectStyle}>
            {carrierMultiSelectData.map(carrierMultiSelect => {
              return (
                <TbMultiSelect
                  showOptions={carrierMultiSelectData.showOptions}
                  name={carrierMultiSelectData.name}
                  options={carrierMultiSelectData.options}
                  isCollapsible={carrierMultiSelectData.isCollapsible}
                  isVertical={carrierMultiSelectData.isVertical}
                />
              );
            })}
          </div>

          <div className={classes.tabStyle}>
            <TbTabBar tabs={tabs} />
          </div>
        </Paper>
      </div>
    );
  }
}

CarrierSearchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  tabStyle: {
    marginTop: "3%"
  },
  multiSelectStyle: {
    marginTop: "5%",
    display: "flex"
  },
  Pagetitle: {
    textAlign: "left",
    width: "100%",
    fontSize: "150%",
    color: "#3748AC"
  }
});

export default withStyles(styles)(CarrierSearchPage);
