import React from "react";

import DedicatedCarriersTab from "./tabs/dedicated-carriers/DedicatedCarriersTab";
import HistoryRoutesTab from "./tabs/history-routes/HistoryRoutesTab";
import IndustryContactsTab from "./tabs/industry-contacts/IndustryContactsTab";
import LocalCarriersTab from "./tabs/local-carriers/LocalCarriersTab";

export default [
  {
    name: "Dedicated Carrier",
    component: <DedicatedCarriersTab />,
    value: 0
  },
  {
    name: "Local Carrier",
    component: <LocalCarriersTab />,
    value: 1
  },
  {
    name: "Industry Contact",
    component: <IndustryContactsTab />,
    value: 2
  },
  {
    name: "History Routes",
    component: <HistoryRoutesTab />,
    value: 3
  }
];
