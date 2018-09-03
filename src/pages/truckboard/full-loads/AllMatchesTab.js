import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import TbTable from "./../../../components/TbTable";

import all_matchesdata from "./all_matchesdata";

class AllMatchesTab extends React.Component {
  state = {
    delete: ""
  };

  handleDelete = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.total}>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="delete-simple">With Selected</InputLabel>
              <Select
                value={this.state.delete}
                onChange={this.handleDelete}
                inputProps={{
                  name: "delete",
                  id: "delete-simple"
                }}
              >
                <MenuItem value={10}>Delete</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.field}>
            <TextField
              id="search"
              label="Radius Search"
              type="search"
              className={classes.textField}
              margin="normal"
            />
          </div>
        </div>
        <div className={classes.tablesize}>
          <TbTable data={all_matchesdata} />
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  total: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  field: {
    marginTop: "-8px",
    width: "6%"
  },
  tablesize: {
    width: "67%"
  }
});

AllMatchesTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllMatchesTab);
