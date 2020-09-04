//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text, ImageBackground, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { DrawerActions } from "react-navigation";
import { Appbar, Card, Title } from "react-native-paper";
import { Image, Button, ListItem, Rating, Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");
import Image1 from '../Images/odisha.jpeg'
// create a component
export default class OdishaRestaurant extends Component {
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
                    <Appbar.Content title="Odisha Restaurant" />
                    <Appbar.Action icon="shopping-cart" />
                </Appbar.Header>
                <Image
                    source={Image1}
                    style={{ width: width, height: 200 }}
                />
                <ScrollView>
                    <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Non Veg</Title>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Khasi Manso aloo Jhol (6pcs / 4pcs)"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹330 / ₹230"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Khasi Manso Kassa"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹350 / ₹250"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Desi Chicken aloo Jhol "
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹300 / ₹200"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Desi Chicken Kassa"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹320 / ₹220"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Broiler Chicken aloo jhol"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹220 / ₹170"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Broiler Chicken Kassa"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹230 / ₹170"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Mutton Keema "
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹300 / ₹200"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Chicken Korama (Sunday Special)"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹250"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Mutton Champ (Sunday Special)"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹350"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Mutton Liver Kassa "
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹300 / ₹200"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Chilika Chingudi Jhol"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹330"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Veg</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="ODISHA THALI (Lunch Only)"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹140* / ₹170 / ₹230"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Rice"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹50"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Khechidi (Monday, Thrusday) "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹70"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Dalma (Monday, Thrusday) "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹50"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Dal"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹40"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Dal Fry"
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
                                    title="Paratha"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹25"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Roti"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹12"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Chakuli Pitha"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹20"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Raita"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹25"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>SWEET</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Kheeri"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹40"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Gulab Jamun"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹20"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Rasgulla"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹20"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Beverage</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Butter Milk"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹35"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Cold Drink"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹20"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Masala Cold Drink"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹35"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Mineral Water"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹20"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="Lime Soda"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹40"
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
