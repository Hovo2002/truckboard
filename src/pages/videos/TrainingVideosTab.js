import React from "react";

import TbTable from "./../../components/TbTable";
import videosTableData from "./data/videosTableData";

class TrainingVideosTab extends React.Component {
  render() {
    return <TbTable data={videosTableData} />;
  }
}

export default TrainingVideosTab;
