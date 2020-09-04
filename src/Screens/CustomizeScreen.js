//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList, SafeAreaView, TouchableOpacity, TextInput, BackHandler } from "react-native";
import { Card, Appbar, Text, RadioButton } from "react-native-paper";
import { DrawerActions } from "react-navigation";
import { ListItem, Icon, Button } from 'react-native-elements'
// create a component
export default class CustomizeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }
    isVisibleRadio = () => {
        this.setState({ isVisible: !this.state.isVisible });
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
            <View>
                <Appbar.Header style={{ backgroundColor: "#ffc108" }}>
                    <Appbar.Action
                        icon="arrow-back"
                        onPress={() => { this.handleBackButtonClick() }}
                    />
                    <Appbar.Content title="CUSTOMIZE" />
                    <Appbar.Action icon="shopping-cart" />
                </Appbar.Header>
                <SafeAreaView>
                    <ScrollView style={styles.scrollContainer}>
                        <ListItem
                            title="DEAL 1"
                            titleStyle={{ fontWeight: "bold" }}
                            rightTitle="$99.9"
                            rightTitleStyle={{ fontWeight: "bold" }}
                            subtitle="1 Largr Pizza + 300ml Drink"
                            bottomDivider
                        />
                        <ListItem
                            title="Choose Your Pizza"
                            titleStyle={{ fontWeight: "bold" }}
                            subtitle="Select one"
                        />
                        <View>
                            <ListItem
                                containerStyle={{ height: 40 }}
                                leftElement={<TouchableOpacity onPress={() => { this.isVisibleRadio() }}>
                                    {!this.state.isVisible ? (
                                        <Icon
                                            name='radio-button-unchecked'
                                            type='material'
                                            color='#ffc108'
                                            size={30}
                                        />) : (<Icon
                                            name='radio-button-checked'
                                            type='material'
                                            color='#ffc108'
                                            size={30}
                                        />)}
                                </TouchableOpacity>}
                                title="Chicken Fajita"
                                titleStyle={{ color: "gray" }}
                                rightTitle="+$0.00"
                                rightTitleStyle={{ fontWeight: "bold" }}
                            />
                            <ListItem
                                containerStyle={{ height: 40 }}
                                leftElement={<TouchableOpacity onPress={() => { this.isVisibleRadio() }}>
                                    {!this.state.isVisible ? (
                                        <Icon
                                            name='radio-button-unchecked'
                                            type='material'
                                            color='#ffc108'
                                            size={30}
                                        />) : (<Icon
                                            name='radio-button-checked'
                                            type='material'
                                            color='#ffc108'
                                            size={30}
                                        />)}
                                </TouchableOpacity>}
                                title="Chicken Fajita"
                                titleStyle={{ color: "gray" }}
                                rightTitle="+$0.00"
                                rightTitleStyle={{ fontWeight: "bold" }}
                            />
                            <ListItem
                                containerStyle={{ height: 40 }}
                                leftElement={<TouchableOpacity onPress={() => { this.isVisibleRadio() }}>
                                    {!this.state.isVisible ? (
                                        <Icon
                                            name='radio-button-unchecked'
                                            type='material'
                                            color='#ffc108'
                                            size={30}
                                        />) : (<Icon
                                            name='radio-button-checked'
                                            type='material'
                                            color='#ffc108'
                                            size={30}
                                        />)}
                                </TouchableOpacity>}
                                title="Chicken Supreme"
                                titleStyle={{ color: "gray" }}
                                rightTitle="+$0.00"
                                rightTitleStyle={{ fontWeight: "bold" }}
                            />
                            <ListItem
                                containerStyle={{ height: 40 }}
                                leftElement={<TouchableOpacity onPress={() => { this.isVisibleRadio() }}>
                                    {!this.state.isVisible ? (
                                        <Icon
                                            name='radio-button-unchecked'
                                            type='material'
                                            color='#ffc108'
                                            size={30}
                                        />) : (<Icon
                                            name='radio-button-checked'
                                            type='material'
                                            color='#ffc108'
                                            size={30}
                                        />)}
                                </TouchableOpacity>}
                                title="Beef Pizza"
                                titleStyle={{ color: "gray" }}
                                rightTitle="+$0.00"
                                rightTitleStyle={{ fontWeight: "bold" }}
                            />
                            <ListItem
                                containerStyle={{ height: 40 }}
                                leftElement={<TouchableOpacity onPress={() => { this.isVisibleRadio() }}>
                                    {!this.state.isVisible ? (
                                        <Icon
                                            name='radio-button-unchecked'
                                            type='material'
                                            color='#ffc108'
                                            size={30}
                                        />) : (<Icon
                                            name='radio-button-checked'
                                            type='material'
                                            color='#ffc108'
                                            size={30}
                                        />)}
                                </TouchableOpacity>}
                                title="Cheese Lover"
                                titleStyle={{ color: "gray" }}
                                rightTitle="+$0.00"
                                rightTitleStyle={{ fontWeight: "bold" }}
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={{ margin: 10 }}>
                                <Text style={{ color: "#ffc108" }}>View More</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ marginTop: 10, marginLeft: 10 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Special Instruction</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                            <Text style={{ color: "gray", fontSize: 12 }}>
                                Please Let Us Know If You Are Allergic To Anything Or If We Need To Avoid Anything
                            </Text>
                            <View style={styles.textAreaContainer} >
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    placeholder="Type something"
                                    placeholderTextColor="gray"
                                    numberOfLines={5}
                                    multiline={true}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop:"5%" }}>
                            <View style={{ flexDirection: "row", width: "50%", alignSelf:"center", justifyContent:"center" }}>
                                <Button
                                    buttonStyle={{ backgroundColor: "#ffc108" }}
                                    icon={{
                                        name: "add",
                                        size: 15,
                                        color: "white"
                                    }} />
                                <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10 }}>1</Text>
                                <Button
                                    buttonStyle={{ backgroundColor: "#ffc108" }}
                                    icon={{ name: "remove", size: 15, color: "white" }}
                                />
                            </View>
                            <View style={{ width: "50%" }}>
                                <Button
                                    buttonStyle={{ backgroundColor: "#ffc108", width:"90%", borderRadius:10 }}
                                    title="ADD TO CART"
                                    onPress={()=>{this.props.navigation.navigate("Cart")}} />
                            </View>
                        </View>
                    </ScrollView>
                    {/* <Button
                        style={styles.orderButton}
                        onPress={() => { this.props.navigation.navigate("Order") }}
                    >
                        Place Order
        </Button> */}
                </SafeAreaView>
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
    textAreaContainer: {
        marginTop:5,
        borderColor: "gray",
        borderWidth: 1,
        padding: 5,
        borderRadius: 20
    },
    textArea: {
        height: 80,
        justifyContent: "flex-start"
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

