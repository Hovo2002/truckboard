import React from "react";

import MyStatsTab from "./StatsTab";
import RankingsTab from "./RankingsTab";

export default [
  {
    name: "My Stats",
    value: 0,
    component: <MyStatsTab />
  },
  {
    name: "Rankings",
    value: 1,
    component: <RankingsTab />
  }
];
