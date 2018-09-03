import React from "react";

import NewMatchesTab from "./NewMatchesTab";
import AllMatchesTab from "./AllMatchesTab";

export default [
  {
    name: "New Matches",
    component: <NewMatchesTab />,
    value: 0
  },
  {
    name: "All Matches",
    component: <AllMatchesTab />,
    value: 1
  }
];
