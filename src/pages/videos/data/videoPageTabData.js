import React from "react";
import AgentAnnouncementsTab from "./../AgentAnnouncementsTab";
import VlogsTab from "./../VlogsTab";
import TrainingVideosTab from "./../TrainingVideosTab";

export default [
  {
    name: "Agent Announcements",
    component: <AgentAnnouncementsTab />,
    value: 0
  },
  {
    name: "Vlogs",
    component: <VlogsTab />,
    value: 1
  },
  {
    name: "Training Videos",
    component: <TrainingVideosTab />,
    value: 2
  },
];
