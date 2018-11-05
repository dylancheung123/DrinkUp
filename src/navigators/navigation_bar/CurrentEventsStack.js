"use strict";

import {createStackNavigator} from "react-navigation";
import {CurrentEventsScreen} from "../../screens/navigation_bar/CurrentEventsScreen";
import {SingleEventScreen} from "../../screens/SingleEventScreen";
import SingleEventStackNavigator from "../SingleEventStackNavigator";

/**
 * Current Events Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const currentEventsStack = createStackNavigator({
  CurrentEvents: {
    screen: CurrentEventsScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  SingleEventStack: SingleEventStackNavigator
},
{
  initialRouteName: "CurrentEvents"
}
);