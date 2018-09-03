import React from "react";

import CommentsTab from "./tabs/comments/CommentsTab";
import CarrierDetailsTab from "./tabs/carrier-details/CarrierDetailsTab";
import LastLoadsTab from "./tabs/last-load/LastLoadsTab";
import LoadHistoryTab from "./tabs/load-history/LoadHistoryTab";
import OperationsTab from "./tabs/operations/OperationsTab";

export default [
  {
    name: "Carrier Detail",
    value: 0,
    component: <CarrierDetailsTab />
  },
  {
    name: "Load History",
    value: 1,
    component: <LoadHistoryTab />
  },
  {
    name: "Last Load",
    value: 2,
    component: <LastLoadsTab />
  },
  {
    name: "Operation",
    value: 3,
    component: <OperationsTab />
  },
  {
    name: "Comments",
    value: 4,
    component: <CommentsTab />
  }
];
