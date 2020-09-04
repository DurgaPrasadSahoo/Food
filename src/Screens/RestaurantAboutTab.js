//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text, ImageBackground, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { DrawerActions } from "react-navigation";
import { Appbar, Card, Title } from "react-native-paper";
import { Image, Button, ListItem, Rating, Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");
import Image1 from '../Images/9.jpeg'
import Map from '../Images/map.jpg'
// create a component
export default class RestaurantAboutTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //data:dummyRestaurant
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", margin: 10 }}>
                    <Icon name="location-on" type="material" color="#ffc108" />
                    <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>Bhubaneswar</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    <Icon name="access-time" type="material" color="#ffc108" />
                    <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>4.00 - 6.00</Text>
                </View>
                <View>
                    <Image
                        source={Map}
                        style={{ width:width, height: 320 }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
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
