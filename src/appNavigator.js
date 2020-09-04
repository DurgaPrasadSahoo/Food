import { createStackNavigator, createAppContainer } from "react-navigation";
import  Config from './config';
const AppNavigator = createStackNavigator(Config.navigation);
 export default createAppContainer(AppNavigator);
