import React from "react";

import TbTable from "./../../../../components/TbTable";

import lastLoadsData from "./last-loads-data";

export default class LastLoadsTab extends React.Component {
  render() {
    return <TbTable data={lastLoadsData} />;
  }
}
