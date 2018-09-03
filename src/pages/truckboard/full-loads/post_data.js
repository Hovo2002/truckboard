import React from "react";

import PublicPostTab from "./PublicPostTab";
import PrivatePostTab from "./PrivatePostTab";

export default [
  {
    name: "Public Post",
    value: 0,
    component: <PublicPostTab />
  },
  {
    name: "Private Post",
    value: 1,
    component: <PrivatePostTab />
  }
];
