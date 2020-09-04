//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text, ImageBackground, ScrollView } from "react-native";
import { DrawerActions } from "react-navigation";
import {Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import { Appbar, Card, Title } from "react-native-paper";
import { Image, Button, ListItem, Rating, Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");
import Image1 from '../Images/9.jpeg'
import Tab1 from './RestaurantAboutTab'
import Tab2 from './RestaurantReviewsTab'
// create a component
export default class RestaurantDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //data:dummyRestaurant
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header style={{ backgroundColor: 'rgba(169,169,169, 0.2)' }}>
                    <Appbar.Action
                        icon="arrow-back"
                        onPress={() =>
                            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                        }
                    />
                    <Appbar.Content title="California Pizza" />
                    <Appbar.Action icon="shopping-cart" />
                </Appbar.Header>
                <ImageBackground source={Image1} style={{ width: width, height: height / 4 }}>
                    <View style={{ flex:1,width: width, height: height / 4 }}>
                   <View style={{ flexDirection:"row"}}>
                   <Icon name="arrow-back" type="material" color="#fff" />
                   </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                            <Text style={{ fontWeight: "bold", fontSize: 30 }}>California Pizza</Text>
                            <Button
                                title="Delivery in 30 min"
                                buttonStyle={{ width: 200, backgroundColor: "rgba(52, 52, 52, 0.4)", borderRadius: 30 }}
                            //onPress={()=>this.props.navigation.navigate("Menu")}
                            />
                             {/* <Rating imageSize={20} fractions="{1}" startingValue="{3.3}"/> */}
                        </View>
                    </View>
                </ImageBackground>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#ffc108' }} renderTabBar={() =>
                    <ScrollableTab  
                    style={{ backgroundColor: '#fff' }} />}>
          <Tab heading={<TabHeading style={{ backgroundColor: "#fff" }}><Text>About</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#fff" }}><Text>Reviews</Text></TabHeading>}>
            <Tab2 />
          </Tab>
        </Tabs>
               
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
});

//make this component available to the app
