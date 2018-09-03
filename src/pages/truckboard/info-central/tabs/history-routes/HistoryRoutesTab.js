import React from "react";

import TbTable from "./../../../../../components/TbTable";

import historyRoutesData from "./history-routes-data";

export default class HistoryRoutesTab extends React.Component {
  render() {
    return <TbTable data={historyRoutesData} />;
  }
}
