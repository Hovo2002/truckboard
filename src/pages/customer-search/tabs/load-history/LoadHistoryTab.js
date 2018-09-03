import React from "react";

import TbTable from "./../../../../components/TbTable";

import loadHistoryData from "./load-history-data";

export default class LoadHistoryTab extends React.Component {
  render() {
    return <TbTable data={loadHistoryData} />;
  }
}
