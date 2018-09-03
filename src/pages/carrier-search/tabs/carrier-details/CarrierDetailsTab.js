import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TbMultiSelect from "./../../../../components/TbMultiSelect";

import carrierDetailsData from "./carrier-details-data";
import carrierDetailsSelect from "./carrierDetailsSelect";

function CarrierDetailsTab(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.multiSelectStyle}>
        {carrierDetailsSelect.map(carrierDetailsSelect => {
          return (
            <TbMultiSelect
              showOptions={carrierDetailsSelect.showOptions}
              name={carrierDetailsSelect.name}
              options={carrierDetailsSelect.options}
              isCollapsible={carrierDetailsSelect.isCollapsible}
              isVertical={carrierDetailsSelect.isVertical}
            />
          );
        })}
      </div>
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12} sm={6}>
          {carrierDetailsData.map(paper => {
            return <Paper className={classes.paper}>{paper.mainInfo}</Paper>;
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {carrierDetailsData.map(paper => {
            return <Paper className={classes.paper}>{paper.subInfo}</Paper>;
          })}
        </Grid>
      </Grid>
    </div>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "3%"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  multiSelectStyle: {
    marginTop: "3%",
    backgroundColor: "#f2f2f2"
  }
});

CarrierDetailsTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CarrierDetailsTab);
