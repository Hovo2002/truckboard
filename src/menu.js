import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import MapIcon from "@material-ui/icons/Map";
import CachedIcon from "@material-ui/icons/Cached";
import VideocamIcon from "@material-ui/icons/Videocam";
import AssessmentIcon from "@material-ui/icons/Assessment";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

import LoadsPage from "./pages/loads/LoadsPage";
import TruckBoardPage from "./pages/truckboard/TruckBoardPage";
import CarrierSearchPage from "./pages/carrier-search/CarrierSearchPage";
import CustomerSearchPage from "./pages/customer-search/CustomerSearchPage";
import VideoPage from "./pages/videos/VideoPage";
import Payroll from "./pages/Payroll";
import StatisticsPage from "./pages/statistics/StatisticsPage";
import DirectoryPage from "./pages/directory/DirectoryPage";

export default [
  {
    name: "Loads",
    link: "/loads",
    icon: <DirectionsBusIcon />,
    component: LoadsPage
  },
  {
    name: "Truck Board",
    link: "/truckboard",
    icon: <MapIcon />,
    component: TruckBoardPage
  },
  {
    name: "Administration",
    link: "",
    icon: <CachedIcon />,
    submenu: [
      {
        name: "Agent Statistics",
        link: "/statistics",
        icon: <AssessmentIcon />,
        component: StatisticsPage
      },
      {
        name: "Payroll",
        link: "/payroll",
        icon: <MoneyIcon />,
        component: Payroll
      }
    ]
  },
  {
    name: "Search",
    link: "",
    icon: <SearchIcon />,
    submenu: [
      {
        name: "Customer",
        link: "/customer_search",
        icon: <SearchIcon />,
        component: CustomerSearchPage
      },
      {
        name: "Cerrier",
        link: "/carrier_search",
        icon: <SearchIcon />,
        component: CarrierSearchPage
      }
    ]
  },
  {
    name: "Videos",
    link: "/video",
    icon: <VideocamIcon />,
    component: VideoPage
  },
  {
    name: "Directory",
    link: "/directory",
    icon: <AccessibilityIcon />,
    component: DirectoryPage
  }
];
