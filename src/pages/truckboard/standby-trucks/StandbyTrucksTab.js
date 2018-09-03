import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

import TbMultiSelect from "./../../../components/TbMultiSelect";
import TbTable from "./../../../components/TbTable";

import selectBoxData from "./data/selectBoxData";
import table from "./data/table";

class StandbyTrucksTab extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={12}>
          {selectBoxData.map(selectBoxData => {
            return (
              <div className={classes.selectBox}>
                <FormControl className={classes.formControl}>
                  <TbMultiSelect
                    showOptions={selectBoxData.showOptions}
                    name={selectBoxData.name}
                    options={selectBoxData.options}
                    isCollapsible={selectBoxData.isCollapsible}
                    isVertical={selectBoxData.isVertical}
                  />
                </FormControl>
              </div>
            );
          })}
        </Grid>

        <div className={classes.table}>
          <TbTable data={table} />
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: "85%"
  },
  selectBox: {
    width: "19%",
    float: "left"
  },
  table: {
    width: "95%"
  }
});

StandbyTrucksTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(StandbyTrucksTab);
