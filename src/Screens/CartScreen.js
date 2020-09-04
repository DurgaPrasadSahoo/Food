//import liraries
import React, { Component } from "react";
import { View,StyleSheet,ScrollView,FlatList,SafeAreaView } from "react-native";
import { Card,Appbar,Button,Text} from "react-native-paper";
import {DrawerActions} from "react-navigation";
// create a component
export default class CartScreen extends Component {
  render() {
    return (
      <View>
        <Appbar.Header style={{backgroundColor:"#ffc108"}}>
          <Appbar.Action
            icon="menu"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content title="Cart" />
          <Appbar.Action icon="shopping-cart" />
        </Appbar.Header>
        <SafeAreaView>
        <ScrollView style={styles.scrollContainer}>
          <Card>
            <Card.Content style={styles.cardContainer}>
              <Button>+</Button>
              <Text>1</Text>
              <Text>Large Pizza</Text>
              <Text>₹85</Text>
              <Button> - </Button>
            </Card.Content>
          </Card>
          <View style={styles.totalContainer}>
            <Text>Total</Text>
            <Text>₹85</Text>
          </View>
        </ScrollView>
        <Button 
            style={styles.orderButton}
            onPress={()=>{this.props.navigation.navigate("Order")}}
            >
                Place Order
        </Button>
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
  cardContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"baseline",
    padding:20
  },
  totalContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20
  },
  scrollContainer:{
  },
  orderButton:{
  }
});

//make this component available to the app

