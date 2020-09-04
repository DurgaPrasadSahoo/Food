//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text, ImageBackground, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { DrawerActions } from "react-navigation";
import { Appbar, Card, Title } from "react-native-paper";
import { Image, Button, ListItem, Rating, Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");
import Image1 from '../Images/sundowner.png'
// create a component
export default class SunDownerRestaurant extends Component {
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
                    <Appbar.Content title="Sundowner Cafe" />
                    <Appbar.Action icon="shopping-cart" />
                </Appbar.Header>
                <Image
                    source={Image1}
                    style={{ width: width, height: 200 }}
                />
                <ScrollView>
                    <Title style={{ color: "#ffc108", fontWeight: "bold" }}>SALAD</Title>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Cam Fire Corn and Bell Pepper Salad"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹247"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Caesar Salad (veg)"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹247"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Caesar Salad (non veg)"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹273"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Greek Salad(veg) "
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹273"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Peri Peri Chicken Salad (NON VEG)"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹273"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>SOUP</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Mushroom Chai"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹195"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Mexican Hotpot Soup (VEG)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹195"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Maxican Hotpot Soup(Chicken)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹221"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Veg Chowder Soup"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹195"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chicken Chowder Soup"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹221"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>STARTER (VEG)</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="French Fries"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹221"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Potato Wedges"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹221"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Corn Mushroom Vol-Au-Vent"
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
                                    title="Saute Mushroom"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹247"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Pesto Glazed Paneer  "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹260"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>STARTER (NON -VEG)</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Tastadas de pollo"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹286"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Lonestar Barbeque Chicken Leg"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹455"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Fish ascolence"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹455"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Grilled Chicken Wings "
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
                                    title="Fish Finger"
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
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>BURGER & SANDWICHES</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Club Sandwich (veg)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹221"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Club Sandwich  (non veg)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹247"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Grilled Sandwich (veg) "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹169"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Grilled Sandwich (non-Veg ) "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹195"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="juicy lamb burger "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹390"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Pastas & Rissotos (Veg/NonVeg)</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Choice of Pasta - Penne/Spaghetti/Fusilli"
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
                                    title="Penne pasta with Alfredo white sauce(veg)"
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
                                    title="Penne pasta with Alfredo white sauce(NON veg)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹364"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Rissoto (mushroom)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹390"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Rissoto (chicken)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹416"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>BIRYANI WITH ACCOMANIMENTS</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Veg Biryani "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹286"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chicken Biryani"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹390"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Mutton Biryani "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹429"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Prangan Special Butter Chicken Biryani "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹507"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Prangan Special Butter Paneer Biryani "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹455"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>CURRIES & DAL</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chicken Curry"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹390"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chicken Bhartha"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹390"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Bhuna Mutton"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹429"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Kadai Chicken"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹390"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chef Special Chicken"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹390"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>NOODLES /RICE</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Veg Burnt Garlic Fried Rice "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹221"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chicken Burnt Garlic Fried Rice "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹247"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="veg Pan Fried Noodles in choice of sauce "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹234"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chicken Pan Fried Noodles in choice of sauce "
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
                                    title="veg Chinatown Hakka Noodles"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹221"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>MAIN</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Stir Fried Asian Greens(v) "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹247"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Paneer in choice of sauce (v)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹286"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Mushroom in choice of sauce (v)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹286"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Shanghai Chicken (N)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹312"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Three Pepper Chicken (N) "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹312"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>DESERTS</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Darsaan with icecream "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹195"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Sizzling Brownie"
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
                                    title="Whiskey Tiramisu "
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
                                    title="banana split sundae"
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
                                    title="Ice cream of your choice"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹156"
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
