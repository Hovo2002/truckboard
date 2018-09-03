import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TbTable from "../../components/TbTable";

import DateRangePicker from "./Picker";

import gross_info from "./gross_info";
import loads_infotable from "./loads_infotable";
import average_info from "./average_info";

function RankingsTab(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.title}>Rankings</div>
      <h4 className={classes.subtitle}>Filters</h4>
      <DateRangePicker />

      <div className={classes.total}>
        <div className={classes.tables}>
          <h2 className={classes.subtitle}>Gross</h2>
          <h4 className={classes.subtitle}>My Rank: 0</h4>
          <TbTable data={gross_info} />
        </div>
        <div className={classes.tables}>
          <h2 className={classes.subtitle}>Loads</h2>
          <h4 className={classes.subtitle}>My Rank: 0</h4>
          <TbTable data={loads_infotable} />
        </div>
        <div className={classes.tables}>
          <h2 className={classes.subtitle}>Average</h2>
          <h4 className={classes.subtitle}>My Rank: 0</h4>
          <TbTable data={average_info} />
        </div>
      </div>
    </div>
  );
}

const styles = theme => ({
  title: {
    textAlign: "left",
    width: "100%",
    fontSize: "150%",
    color: "#3748AC"
  },
  subtitle: {
    fontWeight: 400,
    color: "#3748AC"
  },
  total: {
    display: "flex",
    width: "80%",
    marginTop: "15px"
  },
  tables: {
    width: "34%",
    marginLeft: "88px"
  }
});

RankingsTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RankingsTab);
