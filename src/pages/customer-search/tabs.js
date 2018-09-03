import React from "react";

import LoadHistoryTab from "./tabs/load-history/LoadHistoryTab";
import CommentsTab from "./tabs/comments/CommentsTab";

export default [
  {
    name: "Load History",
    value: 0,
    component: <LoadHistoryTab/>
  },
  {
    name: "Comments",
    value: 1,
    component: <CommentsTab/>
  }
];
