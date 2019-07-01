import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default createAppContainer(
  createSwitchNavigator({
    Auth,
    Main: Screens
  })
);
