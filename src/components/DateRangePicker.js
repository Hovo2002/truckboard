import React, { PureComponent } from "react";

import { DatePicker } from "material-ui-pickers";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { withStyles } from "@material-ui/core/styles";

class DateRangePicker extends PureComponent {
  state = {
    fromDate: new Date(),
    toDate: new Date()
  };

  handleFromDate = date => {
    this.setState({ fromDate: date });
  };
  handleToDate = date => {
    this.setState({ toDate: date });
  };

  render() {
    const { fromDate, toDate } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.total}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="picker">
            <DatePicker
              label="From"
              clearable
              value={fromDate}
              onChange={this.handleFromDate}
              animateYearScrolling={false}
              leftArrowIcon={<KeyboardArrowLeft />}
              rightArrowIcon={<KeyboardArrowRight />}
            />
          </div>
          <div className={classes.picks}>
            <div className="picker">
              <DatePicker
                label="To"
                clearable
                value={toDate}
                onChange={this.handleToDate}
                animateYearScrolling={false}
                leftArrowIcon={<KeyboardArrowLeft />}
                rightArrowIcon={<KeyboardArrowRight />}
              />
            </div>
          </div>
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}
const styles = theme => ({
  total: {
    display: "flex"
  },
  picks: {
    marginLeft: "15px"
  }
});
export default withStyles(styles)(DateRangePicker);
