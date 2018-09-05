import React from "react";

import MapSearchTab from "../truckboard/map-search/MapSearchTab";
import PartialLoadsTab from "../truckboard/partial-loads/PartialLoadsTab";
import InTransitTab from "../truckboard/in-transit/InTransitTab";
import StandbyTrucksTab from "../truckboard/standby-trucks/StandbyTrucksTab";
import AccessTab from "../truckboard/access/AccessTab";
import TemporaryCoverTab from "../truckboard/temporary-cover/TemporaryCoverTab";
import FullLoadsTab from "../truckboard/full-loads/FullLoadsTab";
import InfoCentralTab from "../truckboard/info-central/InfoCentralTab";

import RoomIcon from '@material-ui/icons/Room';

export default [
  {
    name: "Map Search",
    component: <MapSearchTab />,
    icon:<RoomIcon/>,
    value: 0
  },
  {
    name: "Partial Loads",
    component: <PartialLoadsTab />,
    icon:<RoomIcon/>,
    value: 1
  },
  {
    name: "In-Transit",
    component: <InTransitTab />,
    icon:<RoomIcon/>,
    value: 2
  },
  {
    name: "Standby Trucks",
    component: <StandbyTrucksTab />,
    icon:<RoomIcon/>,
    value: 3
  },
  {
    name: "Temporary Cover",
    component: <TemporaryCoverTab />,
    icon:<RoomIcon/>,
    value: 4
  },
  {
    name: "Post Temp-Truck",
    component: "Item Six",
    icon:<RoomIcon/>,
    value: 5
  },
  {
    name: "Access",
    component: <AccessTab />,
    icon:<RoomIcon/>,
    value: 6
  },
  {
    name: "Full Loads",
    component: <FullLoadsTab />,
    icon:<RoomIcon/>,
    value: 7
  },
  {
    name: "Info Central",
    component: <InfoCentralTab />,
    icon:<RoomIcon/>,
    value: 8
  }
];
