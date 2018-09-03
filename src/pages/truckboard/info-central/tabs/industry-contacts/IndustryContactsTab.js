import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import TbTable from "./../../../../../components/TbTable";

import industryContactsData from "./industry-contacts-data";
import AddContactsPopup from "./AddContactsPopup";

class IndustryContactsTab extends React.Component {
  state = {
    openIndustryContact: false
  };

  openContact = () => {
    this.setState({ openIndustryContact: true });
  };

  closeContact = () => {
    this.setState({ openIndustryContact: false });
  };

  render() {
    const { openIndustryContact } = this.state;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.openContact}>
          Add Industry Contact
        </Button>
        <AddContactsPopup
          open={openIndustryContact}
          onClose={this.closeContact}
        />
        <TbTable data={industryContactsData} />
      </div>
    );
  }
}

const styles = theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing.unit * 2
  }
});

IndustryContactsTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IndustryContactsTab);
