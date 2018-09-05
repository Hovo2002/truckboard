import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import TbTabIcons from "./../../components/TbTabIcons";
import tabs from "./test-page-data";
//import TbPage from "../../components/TbPage";
//import contentTestData from "./content-test-data"; 

class TestPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.title}>Test</div>
        <Paper className={classes.root} elevation={4}>
          <TbTabIcons tabs={tabs}/>
          {/* {contentTestData.map(data => {
            return <TbPage header={data.header} content={data.content} />  
          })
          } */}
        </Paper>
      </div>
    );
  }
}

TestPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    height: "auto"
  }),
  title: {
    textAlign: "left",
    width: "100%",
    fontSize: "150%",
    color: "#3748AC"
  }
});

export default withStyles(styles)(TestPage);
