import React from "react";

import TbTable from "./../../../../../components/TbTable";

import dedicatedCarriersData from "./dedicated-carriers-data";

export default class DedicatedCarriersTab extends React.Component {
  render() {
    return <TbTable data={dedicatedCarriersData} />;
  }
}
