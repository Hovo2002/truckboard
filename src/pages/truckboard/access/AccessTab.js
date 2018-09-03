import React from "react";
import Typography from "@material-ui/core/Typography";

import TbTabBar from "./../../../components/TbTabBar";

import accessTabs from "./data/accessTabs";

class AccessTab extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Access
        </Typography>

        <TbTabBar tabs={accessTabs} />
      </div>
    );
  }
}

export default AccessTab;
