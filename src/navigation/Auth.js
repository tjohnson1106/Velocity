import { createStackNavigator } from "react-navigation";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Forget from "../screens/Forget";

export default createStackNavigator(
  {
    Login,
    Register,
    Forgot
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
