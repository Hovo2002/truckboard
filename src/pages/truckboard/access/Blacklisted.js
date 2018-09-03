import React from "react";

import TbTable from "./../../../components/TbTable";

import blacklistedData from "./data/blacklistedData";

class Blacklisted extends React.Component {
  render() {
    return <TbTable data={blacklistedData} />;
  }
}

export default Blacklisted;
