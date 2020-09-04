import App from "./Firebase";
import SplashScreen from "./Screens/SplashScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import OrderScreen from "./Screens/OrderScreen";
import MenuScreen from "./Screens/MenuScreen";
import AllRestaurantScreen from "./Screens/AllRestaurantScreen";
import RestaurantScreen from "./Screens/RestaurantScreen";
import RestaurantDetailsScreen from "./Screens/RestaurantDetailsScreen";
import RestaurantAboutTab from "./Screens/RestaurantAboutTab";
import RestaurantReviewsTab from "./Screens/RestaurantReviewsTab";
import FilterScreen from "./Screens/FilterScreen";
import CustomizeScreen from "./Screens/CustomizeScreen";
import SunDownerRestaurant from "./Screens/SunDownerRestaurant";
import DawatRestaurant from "./Screens/DawatRestaurant";
import OdishaRestaurant from "./Screens/OdishaRestaurant";
import NarulaRestaurant from "./Screens/NarulaRestaurant";


const Config = {
  
    navigation: {
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: {
                header: null,
            },
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            },
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null,
            },
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            },
        },
        Cart: {
            screen: CartScreen,
            navigationOptions: {
                header: null,
            },
        },
        AllRestaurant: {
            screen: AllRestaurantScreen,
            navigationOptions: {
                header: null,
            },
        },
        Restaurant: {
            screen: RestaurantScreen,
            navigationOptions: {
                header: null,
            },
        },
        SunDowner: {
            screen: SunDownerRestaurant,
            navigationOptions: {
                header: null,
            },
        },
        Dawat: {
            screen: DawatRestaurant,
            navigationOptions: {
                header: null,
            },
        },
        Odisha: {
            screen: OdishaRestaurant,
            navigationOptions: {
                header: null,
            },
        },
        Narula: {
            screen: NarulaRestaurant,
            navigationOptions: {
                header: null,
            },
        },
        RestaurantDetails: {
            screen: RestaurantDetailsScreen,
            navigationOptions: {
                header: null,
            },
        },
        RestaurantAboutTab: {
            screen: RestaurantAboutTab,
            navigationOptions: {
                header: null,
            },
        },
        RestaurantReviewsTab: {
            screen: RestaurantReviewsTab,
            navigationOptions: {
                header: null,
            },
        },
        Order: {
            screen: OrderScreen,
            navigationOptions: {
                header: null,
            },
        },
        Menu: {
            screen: MenuScreen,
            navigationOptions: {
                header: null,
            },
        },
        Filter: {
            screen: FilterScreen,
            navigationOptions: {
                header: null,
            },
        },
        Customize: {
            screen: CustomizeScreen,
            navigationOptions: {
                header: null,
            },
        },
    }
}

export default Config;