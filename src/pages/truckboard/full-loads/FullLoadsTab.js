import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import TbTabBar from "./../../../components/TbTabBar";
import TbPostLoadModal from "./../../../components/TbPostLoadModal";

import post_data from "./post_data";
import matches_data from "./matches_data";

class FullLoadsTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { classes } = this.props;
    const { showModal } = this.state;
    return (
      <div>
        <h2 className={classes.headline}>Posts</h2>
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={this.openModal}
        >
          Post Full Load
        </Button>
        <TbPostLoadModal
          title="Post Full Load"
          type="fullLoad"
          open={showModal}
          onClose={this.closeModal}
        />
        <TbTabBar tabs={post_data} />
        <h2 className={classes.headline}>Truck Match </h2>
        <TbTabBar tabs={matches_data} />
      </div>
    );
  }
}

const styles = theme => ({
  headline: {
    fontWeight: 400,
    color: "#3748AC"
  },
  button: {
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4
  }
});

FullLoadsTab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles)(FullLoadsTab);
