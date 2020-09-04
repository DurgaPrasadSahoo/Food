//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation";
import { Appbar, Card, Title } from "react-native-paper";
import { Image, Button, ListItem, Rating, Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");
import Image1 from '../Images/9.jpeg'
// create a component
export default class RestaurantReviewsTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //data:dummyRestaurant
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                
                <ScrollView>
                    <Title style={{ color: "#ffc108", fontWeight: "bold" }}>4 Reviews</Title>
                    <View>
                        <ListItem
                            title="April 10, 2020"
                            titleStyle={{color:"gray" }}
                            rightElement={<Rating imageSize={15} />}
                            subtitle="It is too Good than other service providers"
                            bottomDivider
                        />
                        <ListItem
                            title="April 10, 2020"
                            titleStyle={{color:"gray" }}
                            rightElement={<Rating imageSize={15} />}
                            subtitle="It is too Good than other service providers"
                            bottomDivider
                        />
                        <ListItem
                            title="April 10, 2020"
                            titleStyle={{color:"gray" }}
                            rightElement={<Rating imageSize={15} />}
                            subtitle="It is too Good than other service providers"
                            bottomDivider
                        />
                        <ListItem
                            title="April 10, 2020"
                            titleStyle={{color:"gray" }}
                            rightElement={<Rating imageSize={15} />}
                            subtitle="It is too Good than other service providers"
                            bottomDivider
                        />
                    </View>
                    </ScrollView>
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
