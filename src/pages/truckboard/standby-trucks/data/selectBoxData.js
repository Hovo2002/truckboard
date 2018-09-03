export default [
  {
    name: "Equipment Type:",
    showOptions: false,
    isCollapsible: true,
    isVertical: true,
    options: {
      Van: false,
      Reefer: false,
      "Flat Bed": false,
      "Power Only": false,
      "Double Drop": false,
      "Low Boy": false,
      "Step Deck": false
    }
  },
  {
    name: "",
    showOptions: true,
    isCollapsible: false,
    isVertical: true,
    options: {
      "show only Watched Trucks": false,
      "show only Assigned Trucks": false
    }
  },
  {
    name: "Trailer Details:",
    showOptions: false,
    isCollapsible: true,
    isVertical: true,
    options: {
      "Plate Trailer": false,
      "Lift Gate": false,
      "E-Track": false,
      Logistics: false,
      "High Cube": false
    }
  },
  {
    name: "Perks:",
    showOptions: false,
    isCollapsible: true,
    isVertical: true,
    options: {
      Hazmat: false,
      "US Citizen": false,
      "Twic Card": false,
      Team: false
    }
  },
  {
    name: "Exclude Trailers That Do Not Prefer:",
    showOptions: false,
    isCollapsible: true,
    isVertical: true,
    options: {
      Frozen: false,
      Berries: false,
      "Convention Loads": false,
      "Heavy Load": false,
      "Multi Pick-Drop": false,
      "Floor Loading": false,
      "N-CA Drops": false,
      "Floor Nailing": false
    }
  }
];
