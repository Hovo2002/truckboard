import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import TbPostLoadModal from "./../../../components/TbPostLoadModal";
import TbTabBar from "./../../../components/TbTabBar";

import postsTabs from "./posts-tabs/postsTabs";
import truckMatchTabs from "./matches-tabs/truckMatchTabs";

class PartialLoadsTab extends React.Component {
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
        <Typography variant="display1" gutterBottom>
          Posts
        </Typography>

        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={this.openModal}
        >
          Post Partial Loads
        </Button>

        <TbPostLoadModal
          title="Post Partial Load"
          type="partialLoad"
          open={showModal}
          onClose={this.closeModal}
        />

        <TbTabBar tabs={postsTabs} />

        <Typography variant="display1" gutterBottom>
          Truck Match
        </Typography>

        <TbTabBar tabs={truckMatchTabs} />
      </div>
    );
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4,
    backgroundColor: "#3f51b5",
    color: theme.palette.background.paper,
    width: theme.spacing.unit * 30,
    padding: theme.spacing.unit * 2
  },
});

PartialLoadsTab.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PartialLoadsTab);
