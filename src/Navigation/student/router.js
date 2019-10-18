import { Dimensions, TouchableOpacity, View } from "react-native";

// PACKAGES
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

// FILES
import CustomSidebarMenu from "./customComponent";
import { StackNav } from "./stackNav";

const DrawerNavigatorExample = createDrawerNavigator(
  {
    StackNav
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get("window").width - 90
  }
);

export default createAppContainer(DrawerNavigatorExample);
