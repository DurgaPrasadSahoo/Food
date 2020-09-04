//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation";
import { Appbar, Card, Title } from "react-native-paper";
import { Image, Button, ListItem, Rating, Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");
import Image1 from '../Images/9.jpeg'
// create a component
export default class RestaurantScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //data:dummyRestaurant
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header style={{ backgroundColor: '#ffc108' }}>
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
                  <View style={{left:290}}>
                  <TouchableOpacity  onPress={() => { this.props.navigation.navigate("RestaurantDetails") }}>
                  <Icon name="info-outline" type="material" color="#fff" size={35} />
                  </TouchableOpacity>
                  </View>
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
                <ScrollView>
                    <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Super Deals</Title>
                    <View>
                    <TouchableOpacity  onPress={() => { this.props.navigation.navigate("Customize") }}>
                        <ListItem
                            title="DEAL 1"
                            titleStyle={{ fontWeight: "bold" }}
                            rightTitle="$99.9"
                            rightTitleStyle={{ fontWeight: "bold" }}
                            subtitle="1 Largr Pizza + 300ml Drink"
                            bottomDivider
                            chevron
                        />
                        </TouchableOpacity>
                        <ListItem
                            title="DEAL 2"
                            titleStyle={{ fontWeight: "bold" }}
                            rightTitle="$99.9"
                            rightTitleStyle={{ fontWeight: "bold" }}
                            subtitle="1 Largr Pizza + 300ml Drink"
                            bottomDivider
                            chevron
                        />
                        <ListItem
                            title="DEAL 3"
                            titleStyle={{ fontWeight: "bold" }}
                            rightTitle="$99.9"
                            rightTitleStyle={{ fontWeight: "bold" }}
                            subtitle="1 Largr Pizza + 300ml Drink"
                            bottomDivider
                            chevron
                        />
                        <ListItem
                            title="DEAL 4"
                            titleStyle={{ fontWeight: "bold" }}
                            rightTitle="$99.9"
                            rightTitleStyle={{ fontWeight: "bold" }}
                            subtitle="1 Largr Pizza + 300ml Drink"
                            bottomDivider
                            chevron
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Pizza</Title>
                        <View>
                            <ListItem
                                title="Chicken Pizza"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="$99.9"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                            <ListItem
                                title="Cheese Pizza"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="$99.9"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                            <ListItem
                                title="Vegetable Pizza"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="$99.9"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
                            <ListItem
                                title="Chicken Fajita"
                                titleStyle={{ fontWeight: "bold" }}
                                rightTitle="$99.9"
                                rightTitleStyle={{ fontWeight: "bold" }}
                                subtitle="1 Largr Pizza + 300ml Drink"
                                bottomDivider
                                chevron
                            />
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
                    titleStyle={{color:"#000", fontWeight:"bold"}}
                    buttonStyle={{ width:width, backgroundColor: "#ffc108" }}
                    onPress={()=>this.props.navigation.navigate("Cart")}
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
