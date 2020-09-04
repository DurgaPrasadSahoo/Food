//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text, ImageBackground, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { DrawerActions } from "react-navigation";
import { Appbar, Card, Title } from "react-native-paper";
import { Image, Button, ListItem, Rating, Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");
import Image1 from '../Images/dawat.jpeg'
// create a component
export default class DawatRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //data:dummyRestaurant
        }
    }
    handleBackButtonClick = () => {
        this.props.navigation.goBack(null);
        return true;
      }
      componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
      }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header style={{ backgroundColor: '#ffc108' }}>
                    <Appbar.Action
                        icon="arrow-back"
                        onPress={() => { this.handleBackButtonClick() }}
                    />
                    <Appbar.Content title="Dawat Restaurant" />
                    <Appbar.Action icon="shopping-cart" />
                </Appbar.Header>
                <Image
                    source={Image1}
                    style={{ width: width, height: 200 }}
                />
                <ScrollView>
                    <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Vegetable Soup</Title>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Sweet Corn "
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹60"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Hot-n-Sour "
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹60"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Lemon Corriander "
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹60"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Mushroom "
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹60"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Non-Vegetarian Soup</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chicken Sweet Corn"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹90"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Lemon Corriander "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹90"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Cream of Mushroom and Chicken "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹90"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chinese Mixed Soup"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹90"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Manchow "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹90"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Starters</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chicken Sweet Corn"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹125"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="French Fries"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹125"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Boiled Green Peas"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹125"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Aloo Tikki With Chutney"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹125"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Baby Corn"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹170"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>ChowChow, ChowMein & Chopsuey</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Vegetable Chow Chow"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹120"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Vegetable / Egg Chow Mein "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹115 / ₹125"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chicken / Chilly Garlic Noodles"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹165"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Pan fried Noodles Veg"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹140"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Egg Chilly Garlic Noodles"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹135"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Fried Rice</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Vegetable / Ginger / Jeera"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹130"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Egg / Mushroom  "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹160"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chicken / Prawn / Mixed "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹175 / ₹200 / ₹210"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Dawat Chinese Special Mixed "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹250"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Vegetable</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Manchurian"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹130"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chinese Mixed Veg "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹130"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Sweet - n - Sour "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹130"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chilly Potato"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹130"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chilly Veg"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹130"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Paneer</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chilly"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹185"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Garlic"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹185"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Ginger"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹185"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Manchurian"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹185"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Capsicum"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹185"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Mushroom</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chilly"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹180"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Garlic"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹180"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Veg"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹180"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Manchurian"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹180"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Capsicum Manchurian Chilly"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹180"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Chicken</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chilly"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹205"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Garlic"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹205"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Sweet - n - Sour"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹205"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Manchurian"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹205"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Lolipop (6ps)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹205"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Chicken (Boneless)</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chilly"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹260"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Garlic"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹260"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Ginger"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹260"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Manchurian"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹260"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Lemon Chicken(4pc)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹325"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Prawn</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chilly"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹325"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Garlic"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹325"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Ginger"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹325"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Manchurian"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹325"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Sweet - n - Sour"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹325"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                {/* <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            keyExtractor={(item, index) => item.title}
            renderItem={({ item: rowData }) => {
              return (
                <Card style={{
                  elevation:1,
                  borderColor:"#000",
                  margin:10,
                }}>
                    <Card.Title title={rowData.title} />
                    <Card.Cover source={{ uri: rowData.imageUrl }} />
                </Card>
              );
            }}
          /> */}
                <Button
                    title="VIEW CART"
                    titleStyle={{ color: "#000", fontWeight: "bold" }}
                    buttonStyle={{ width: width, backgroundColor: "#ffc108" }}
                    onPress={() => this.props.navigation.navigate("Cart")}
                />
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
