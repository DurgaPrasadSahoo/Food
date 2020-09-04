//import liraries
import React, { Component } from "react";
import { View, StyleSheet,FlatList, TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation";
import { Appbar,Card } from "react-native-paper";

const dummyRestaurant = [
    {
      imageUrl: "https://images.unsplash.com/photo-1595507059263-11825d5bd472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
      title: "Ten Dowing Street",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Boozer's Bar & Restaurant",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Ten Dowing Street",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=327&q=80",
      title: "Boozer's Bar & Restaurant",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1499186024912-c374ac2e9cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Ten Dowing Street",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1511795267602-0424436b99c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Boozer's Bar & Restaurant",
      place: "Vijay Nagar"
    }
  ];

// create a component
export default class AllRestaurantScreen extends Component {
  constructor(props) {
      super(props);
      this.state={
          data:dummyRestaurant
      }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Appbar.Header style={{backgroundColor:"#ffc108"}}>
          <Appbar.Action
            icon="menu"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content title="Restaurant" />
          <Appbar.Action icon="shopping-cart" />
        </Appbar.Header>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            keyExtractor={(item, index) => item.title}
            renderItem={({ item: rowData }) => {
              return (
                 <TouchableOpacity  onPress={() => { this.props.navigation.navigate("Restaurant") }}>
                <Card style={{
                  elevation:1,
                  borderColor:"#000",
                  margin:10,
                }}>
                    <Card.Title title={rowData.title} />
                    <Card.Cover source={{ uri: rowData.imageUrl }} />
                </Card>
                </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
});

//make this component available to the app
