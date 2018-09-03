import React from "react";

import MapSearchTab from "./map-search/MapSearchTab";
import PartialLoadsTab from "./partial-loads/PartialLoadsTab";
import InTransitTab from "./in-transit/InTransitTab";
import StandbyTrucksTab from "./standby-trucks/StandbyTrucksTab";
import AccessTab from "./access/AccessTab";
import TemporaryCoverTab from "./temporary-cover/TemporaryCoverTab";
import FullLoadsTab from "./full-loads/FullLoadsTab";
import InfoCentralTab from "./info-central/InfoCentralTab";

export default [
  {
    name: "Map Search",
    component: <MapSearchTab />,
    value: 0
  },
  {
    name: "Partial Loads",
    component: <PartialLoadsTab />,
    value: 1
  },
  {
    name: "In-Transit",
    component: <InTransitTab />,
    value: 2
  },
  {
    name: "Standby Trucks",
    component: <StandbyTrucksTab />,
    value: 3
  },
  {
    name: "Temporary Cover",
    component: <TemporaryCoverTab />,
    value: 4
  },
  {
    name: "Post Temp-Truck",
    component: "Item Six",
    value: 5
  },
  {
    name: "Access",
    component: <AccessTab />,
    value: 6
  },
  {
    name: "Full Loads",
    component: <FullLoadsTab />,
    value: 7
  },
  {
    name: "Info Central",
    component: <InfoCentralTab />,
    value: 8
  }
];
