import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CallIcon from "@material-ui/icons/Call";

import TbMultiSelect from "./../../../../components/TbMultiSelect";

import MarkEquipmentPopup from "./MarkEquipmentPopup";
import TempCoverPopup from "./TempCoverPopup";

import trailerDetailsData from "./trailer-details-data";

class OperationsActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMarkEquipment: false,
      openTemproraryCover: false
    };
  }

  showMarkEquipment = () => {
    this.setState({ openMarkEquipment: true });
  };

  closeMarkEquipment = () => {
    this.setState({ openMarkEquipment: false });
  };

  showTemproraryCover = () => {
    this.setState({ openTemproraryCover: true });
  };

  closeTemproraryCover = () => {
    this.setState({ openTemproraryCover: false });
  };

  render() {
    const { classes } = this.props;
    const { openMarkEquipment } = this.state;
    const { openTemproraryCover } = this.state;
    return (
      <div>
        <div>
          {trailerDetailsData.map(trailerDetail => {
            return (
              <TbMultiSelect
                showOptions={trailerDetail.showOptions}
                name={trailerDetail.name}
                options={trailerDetail.options}
                isCollapsible={trailerDetail.isCollapsible}
                isVertical={trailerDetail.isVertical}
              />
            );
          })}
        </div>
        <Button
          variant="raised"
          size="small"
          color="primary"
          className={classes.saveButton}
        >
          Save
        </Button>
        <div className={classes.equipmentStyle}> Equipment Options</div>
        <Button
          variant="raised"
          color="secondary"
          size="small"
          className={classes.equipmentButton}
          onClick={this.showTemproraryCover}
        >
          Temporary Cover
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="raised"
          className={classes.equipmentButton}
        >
          Watch
        </Button>
        <Button
          className={classes.callButton}
          variant="fab"
          color="primary"
          onClick={this.showMarkEquipment}
        >
          <CallIcon />
        </Button>

        <MarkEquipmentPopup
          open={openMarkEquipment}
          onClose={this.closeMarkEquipment}
        />
        <TempCoverPopup
          open={openTemproraryCover}
          onClose={this.closeTemproraryCover}
        />
      </div>
    );
  }
}

const styles = theme => ({
  callButton: {
    marginLeft: "95%",
    marginTop: "-5%"
  },
  equipmentStyle: {
    marginLeft: "4%",
    marginTop: "3%"
  },
  equipmentButton: {
    fontFamily: "italic",
    margin: "0.5%"
  },
  saveButton: {
    marginTop: "1%",
    marginLeft: "2%"
  }
});

OperationsActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OperationsActions);
