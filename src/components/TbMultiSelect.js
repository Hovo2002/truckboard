import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import _ from "lodash";

class TbMultiSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showOptions: this.props.showOptions,
      options: this.props.options
    };
  }

  handleCollapse = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };

  getCheckboxHandler = option => {
    return event => {
      let options = this.state.options;
      options[option] = event.target.checked;
      this.setState({ options: options });
    };
  };

  render() {
    const { classes, name, isCollapsible, isVertical } = this.props;
    const { showOptions, options } = this.state;

    const form = (
      <FormControl component="fieldset">
        <FormGroup row={!isVertical} className={classes.nested}>
          {_.map(options, (checked, option) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={this.getCheckboxHandler(option)}
                    value={option}
                    color="primary"
                  />
                }
                label={option}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    );

    return (
      <List>
        {name ? (
          <ListItem button onClick={this.handleCollapse}>
            <ListItemText primary={name} />
            {isCollapsible ? showOptions ? <ExpandLess /> : <ExpandMore /> : ""}
          </ListItem>
        ) : (
          ""
        )}

        {isCollapsible ? (
          <Collapse in={showOptions} timeout="auto" unmountOnExit>
            {form}
          </Collapse>
        ) : (
          form
        )}
      </List>
    );
  }
}

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

TbMultiSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TbMultiSelect);
