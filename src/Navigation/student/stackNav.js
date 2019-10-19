import { createStackNavigator, createAppContainer } from "react-navigation";

// SCREENS
import { Screens } from "../../Screens";
import PhoneAuthTest from "../../Screens/Splash/phoneauth";
import { BooksCorner } from "../../Screens/DrawerScreens/BooksCorner";

export const StackNav = createStackNavigator(
  {
    Splash: Screens.Notification,
    Login: Screens.Login,
    SignUp: Screens.SignUp,
    Dashboard: Screens.Dashboard,
    Home: Screens.Home,
    PhoneVerification: Screens.PhoneVerification,
    ParentConnect: Screens.ParentConnect,
    Notification: Screens.Notification,
    ContactUs: Screens.ContactUs,
    Quizzo: Screens.Quizzo,
    SubcribeNow: Screens.SubcribeNow,
    Profile: Screens.Profile,
    SubjectTitle: Screens.SubjectTitle,
    ShareApp: Screens.ShareApp,
    QuizResult: Screens.QuizResult,
    Thumbnail: Screens.Thumbnail,
    Videos: Screens.Videos,
    EditProfile: Screens.EditProfile,
    EditNumber: Screens.EditNumber,
    AddPhoneNumber: Screens.AddPhoneNumber,
    AddInfo: Screens.AddInfo,
    Subject: Screens.Subject,
    DetailScreen: BooksCorner.DetailScreen,
    SelectScreen: BooksCorner.SelectScreen,
    HomeScreen: BooksCorner.HomeScreen,
    FilterScreen: BooksCorner.FilterSreen,
    SubjectScreen: BooksCorner.SubjectScreen,
    SellOfferingScreen: BooksCorner.SellOfferingScreen,
    AdDetailScreen: BooksCorner.AdDetailScreen,
    ChooseImageScreen: BooksCorner.ChooseImageScreen,
    AcademicScreen: BooksCorner.AcademicScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: { top: "never", bottom: "never" }
    }
  }
);
