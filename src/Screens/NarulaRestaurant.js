//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text, ImageBackground, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { DrawerActions } from "react-navigation";
import { Appbar, Card, Title } from "react-native-paper";
import { Image, Button, ListItem, Rating, Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");
import Image1 from '../Images/narula.jpg'
// create a component
export default class NarulaRestaurant extends Component {
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
                    <Appbar.Content title="Narula Restaurant" />
                    <Appbar.Action icon="shopping-cart" />
                </Appbar.Header>
                <Image
                    source={Image1}
                    style={{ width: width, height: 200 }}
                />
                <ScrollView>
                    <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Din ki Suruwat (8.00am-11.00am)</Title>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Poori Sabji"
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
                                title="Chola Bhatura"
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
                                title="Aloo Paratha"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹45"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Gobi Paratha"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="₹55"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                // subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                            <ListItem
                                title="Mix Paratha"
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
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Dopahar ka Khana (12.30pm-3.30pm)(Mon-Fri)</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="RAJMA+CHAWAL+BHAJI"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹170"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="DAL+CHAWAL+BHAJI "
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
                                    title="CHICKEN CHAWAL"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹170"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="DAL MAKHANI CHAWAL"
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
                                    title="BUTTER CHICKEN+BUTTER NAAN+LASSI"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹220"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Shaam & Bahar(4.00pm-7.30pm)</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="ALOO TIKKI (AMRITSARI)"
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
                                    title="PAPDI CHAT"
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
                                    title="KULCHA CHANA"
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
                                    title="PANEER KEBAB ROLL"
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
                                    title="BREAD PAKODE"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹80"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Suruwat Ki Jaye SHORBA</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="MAKAI MALAI SHORBA"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹135"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="TOMATO DHANIA SHORBA"
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
                                    title="VEG YAKHNI SHORBA"
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
                                    title="CHICKEN MALAI SHORBA"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹150"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="CHICKEN CHATPATA SHORBA"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹140"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Kadai se Veg</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="DAHI KE SHOLAY"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹210"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="PAPDI PANEER"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹225"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="CRISPY VEG TIKKI"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹200"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="CRISPY AMERICAN CORN"
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
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Kadai se Non-Veg</Title>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="BULLET CHICKEN"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹240"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="PAPER CHICKEN "
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹230"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="FISH AMRITSARI"
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
                                    title="CHICKEN TAWA KEBAB"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹270"
                                    rightTitleStyle={{ fontWeight: "bold" }}
                                    // subtitle="1 Largr Pizza + 300ml Drink"
                                    bottomDivider
                                    chevron
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Customize") }}>
                                <ListItem
                                    title="FISH FINGER"
                                    titleStyle={{ fontWeight: "bold" }}
                                    rightTitle="₹270"
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
