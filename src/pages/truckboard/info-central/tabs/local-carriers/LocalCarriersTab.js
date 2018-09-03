import React from "react";

import TbTable from "./../../../../../components/TbTable";

import localCarriersData from "./local-carriers-data";

export default class LocalCarriersTab extends React.Component {
  render() {
    return <TbTable data={localCarriersData} />;
  }
}
