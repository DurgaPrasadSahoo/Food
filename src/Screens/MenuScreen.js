//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList,Image } from "react-native";
import { Card, Appbar } from "react-native-paper";
import {DrawerActions} from 'react-navigation'

const dummyData = [
  {
    imageUrl: "https://images.unsplash.com/photo-1595507059263-11825d5bd472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
    title: "Pizzat"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Bergert"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Roll"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=327&q=80",
    title: "Paneer Tika"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1499186024912-c374ac2e9cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Veg Roll"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1511795267602-0424436b99c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Chicken Roll"
  }
];

// create a component
export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
        <View style={styles.container}>
          <Appbar.Header style={{backgroundColor:"#ffc108"}}>
            <Appbar.Action
                icon="menu"
                onPress={() =>
                    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                }
            />
            <Appbar.Content title="Menus" />
            <Appbar.Action icon="shopping-cart" />
          </Appbar.Header>
          <FlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                    <View style={styles.cardContainer}>
                      <Image style={styles.imageContainer} source={{uri:item.imageUrl}}/>
                      <View style={styles.shade}>
                        <Text style={styles.textContainer}>{item.title}</Text>
                      </View>
                    </View>
                );
              }}
          />
        </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  cardContainer:{
    flex:1,
    borderRadius:2,
    borderWidth:1.0,
    borderColor:"#fafafa",
    margin:20,
    height:200,
    //elevation:2
  },
  textContainer:{
    //color:"#fafafa",
    fontSize:20,
    alignSelf:"center"
  },
  shade:{
    backgroundColor:"#ffc108",
    height:30,
    opacity:0.4
  },
  imageContainer:{
    flex:3,
  }
});

//make this component available to the app
