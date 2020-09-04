//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList, SafeAreaView, Text, Dimensions } from "react-native";
import { Appbar, Checkbox } from "react-native-paper";
//import {CheckBox} from 'native-base'
import { DrawerActions } from "react-navigation";
import { Slider, Icon, Card, ListItem, CheckBox, Button } from 'react-native-elements';

const { width, height } = Dimensions.get("window");
// create a component
export default class FilterScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:0.1}}>
                <Appbar.Header style={{ backgroundColor: "#ffc108" }}>
                    <Appbar.Action
                        icon="arrow-back"
                        onPress={() =>
                            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                        }
                    />
                    <Appbar.Content title="Filters" />
                    <Appbar.Action icon="shopping-cart" />
                </Appbar.Header>
                </View>
                <View style={{flex:0.85}}>
                <ScrollView>
                <View style={{ alignItems: 'stretch', justifyContent: 'center' }}>
                    <Card containerStyle={{ padding: 10 }} >
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Price</Text>
                        <Slider
                            style={{ width: "100%", height: 40 }}
                            minimumValue={10}
                            maximumValue={50}
                            minimumTrackTintColor="#000000"
                            maximumTrackTintColor="#000000"
                        />

                    </Card>
                </View>
                <Card containerStyle={{ padding: 5, height: "15%" }} >
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>OFFERS</Text>
                    </View>
                    <ListItem
                        containerStyle={{ height: "10%" }}
                        title="Accept Vouchers"
                        titleStyle={{ color: "gray" }}
                        rightElement={<Checkbox status="checked" color="#ffc108" />}
                    // leftAvatar={{ source: { uri: u.avatar } }}
                    />
                    <ListItem
                        containerStyle={{ height: "10%" }}
                        title="Online Payments"
                        titleStyle={{ color: "gray" }}
                        rightElement={<Checkbox status="checked" color="#ffc108" />}
                    // leftAvatar={{ source: { uri: u.avatar } }}
                    />
                    <ListItem
                        containerStyle={{ height: "10%" }}
                        title="Free Delivery"
                        titleStyle={{ color: "gray" }}
                        rightElement={<Checkbox status="checked" color="#ffc108" />}
                    // leftAvatar={{ source: { uri: u.avatar } }}
                    />
                </Card>
                <Card containerStyle={{ padding: 5, height:"35%" }} >
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>OFFERS</Text>
                    </View>
                    <View>
                        <ListItem
                            containerStyle={{ height: "10%" }}
                            title="Western"
                            titleStyle={{ color: "gray" }}
                            rightElement={<Checkbox status="checked" color="#ffc108" />}
                        />
                        <ListItem
                            containerStyle={{ height: "10%" }}
                            title="chinese"
                            titleStyle={{ color: "gray" }}
                            rightElement={<Checkbox status="checked" color="#ffc108" />}
                        />
                        <ListItem
                            containerStyle={{ height: "10%" }}
                            title="Berger"
                            titleStyle={{ color: "gray" }}
                            rightElement={<Checkbox status="checked" color="#ffc108" />}
                        />
                         <ListItem
                            containerStyle={{ height: "10%" }}
                            title="Pizza"
                            titleStyle={{ color: "gray" }}
                            rightElement={<Checkbox status="checked" color="#ffc108" />}
                        />
                        <ListItem
                            containerStyle={{ height: "10%" }}
                            title="Western"
                            titleStyle={{ color: "gray" }}
                            rightElement={<Checkbox status="checked" color="#ffc108" />}
                        />
                        <ListItem
                            containerStyle={{ height: "10%" }}
                            title="chinese"
                            titleStyle={{ color: "gray" }}
                            rightElement={<Checkbox status="checked" color="#ffc108" />}
                        />
                        <ListItem
                            containerStyle={{ height: "10%" }}
                            title="Berger"
                            titleStyle={{ color: "gray" }}
                            rightElement={<Checkbox status="checked" color="#ffc108" />}
                        />
                         <ListItem
                            containerStyle={{ height: "10%" }}
                            title="Pizza"
                            titleStyle={{ color: "gray" }}
                            rightElement={<Checkbox status="checked" color="#ffc108" />}
                        />
                    </View>
                </Card>
                </ScrollView>
                </View>
               <View style={{flex:0.05}}>
               <Button
                    title="APPLY FILTER"
                    titleStyle={{color:"#000", fontWeight:"bold"}}
                    buttonStyle={{ width:width, backgroundColor: "#ffc108" }}
                    onPress={()=>this.props.navigation.navigate("Cart")}
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
        backgroundColor: "#fafafa"
    },
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: 20
    },
    totalContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },
    scrollContainer: {
    },
    orderButton: {
    }
});

//make this component available to the app

