import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

class TbPage extends Component {
  render() {
    const { classes, header, content } = this.props;

    return(
        <div>
            <h1 className={classes.header}>{ header }</h1>
            <p className={classes.content}>{ content }</p>
        </div>
    )
  }
}

const styles = theme => ({
    header:{
        fontSize: 40,
        color:"red",
    },
    content:{
        fontSize:20
    }
});
  
  export default withStyles(styles)(TbPage);