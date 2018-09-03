import React from "react";

import AllMatchesTab from "./AllMatchesTab";
import NewMatchesTab from "./NewMatchesTab";

export default [
  {
    name: "All Matches",
    value: 0,
    component: <AllMatchesTab />
  },
  {
    name: "New Matches",
    value: 1,
    component: <NewMatchesTab />
  }
];
