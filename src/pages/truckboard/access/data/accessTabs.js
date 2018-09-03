import React from "react";

import Blacklisted from "./../Blacklisted";
import Assigned from "./../Assigned";
import Watched from "./../Watched";

export default [
  {
    name: "Blacklisted",
    component: <Blacklisted />,
    value: 0
  },
  {
    name: "Assigned",
    component: <Assigned />,
    value: 1
  },
  {
    name: "Watched",
    component: <Watched />,
    value: 2
  },
];
