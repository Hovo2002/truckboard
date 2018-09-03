import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import TbMenuItem from "./TbMenuItem";

class TbParentMenuItem extends React.Component {
  state = {
    showSubmenu: false
  };

  handleClick = () => {
    this.setState({ showSubmenu: !this.state.showSubmenu });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Link to={{}} className={this.props.className}>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>{this.props.icon}</ListItemIcon>
            <ListItemText inset primary={this.props.name} />
            {this.state.showSubmenu ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </Link>

        <Collapse in={this.state.showSubmenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {this.props.submenu.map(submenuItem => {
              return (
                <div className={classes.nested}>
                  <TbMenuItem
                    name={submenuItem.name}
                    link={submenuItem.link}
                    icon={submenuItem.icon}
                    className={this.props.className}
                  />
                </div>
              );
            }, this)}
          </List>
        </Collapse>
      </div>
    );
  }
}

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 1.5
  }
});

TbParentMenuItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TbParentMenuItem);
