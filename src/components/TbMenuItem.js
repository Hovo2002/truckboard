import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default class TbMenuItem extends React.Component {
  render() {
    return (
      <Link to={this.props.link} className={this.props.className}>
        <ListItem button>
          <ListItemIcon>{this.props.icon}</ListItemIcon>
          <ListItemText inset primary={this.props.name} />
        </ListItem>
      </Link>
    );
  }
}
