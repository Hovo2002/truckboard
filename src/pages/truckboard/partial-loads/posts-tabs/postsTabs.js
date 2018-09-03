import React from "react";

import PublicPostsTab from "./PublicPostsTab";
import PrivatePostsTab from "./PrivatePostsTab";

export default [
  {
    name: "Public Posts",
    component: <PublicPostsTab />,
    value: 0
  },
  {
    name: "Private Posts",
    component: <PrivatePostsTab />,
    value: 1
  }
];
