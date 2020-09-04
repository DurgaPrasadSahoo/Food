//import liraries
import React, { Component } from "react";
import { View,FlatList,StyleSheet,ScrollView,SafeAreaView} from "react-native";
import {Appbar,Card,Text,Button} from "react-native-paper";
import {DrawerActions} from "react-navigation";

const orderData=[
  {
    imageUrl: "https://images.unsplash.com/photo-1595507059263-11825d5bd472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
      title: "Ten Dowing Street",
    price:"₹9.00",
    quantity:"2"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Boozer's Bar & Restaurant",
    price:"₹18.00",
    quantity:"1"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Ten Dowing Street",
    price:"₹50.00",
    quantity:"5"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=327&q=80",
      title: "Boozer's Bar & Restaurant",
    price:"₹90.00",
    quantity:"2"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1499186024912-c374ac2e9cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Ten Dowing Street",
    price:"₹12.00",
    quantity:"1"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1511795267602-0424436b99c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Boozer's Bar & Restaurant",
    price:"₹15.00",
    quantity:"2"
  }
];


// create a component
export default class OrderScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      orders:orderData
    }
  }
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
          <Appbar.Content title="Orders" />
          <Appbar.Action icon="shopping-cart" />
        </Appbar.Header>
        <ScrollView>
        <SafeAreaView>
        <FlatList
        contentContainerStyle={{paddingBottom:50}}
        showsVerticalScrollIndicator={false}
        data={this.state.orders}
        renderItem={({ item: rowData }) =>{
          return (
                <Card style={{
                  elevation:1,
                  borderColor:"#000",
                  margin:10,
                  flex:1
                }}>
                    <Card.Title title={rowData.title} />
                    <Card.Cover source={{ uri: rowData.imageUrl }} />
                    <View style={styles.cardContainer}>
                    <Card.Content style={styles.cardContent}>
                      <Text>Total : {rowData.price}</Text>
                      <Text>Quantity : {rowData.quantity}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button mode="outlined">Reorder</Button>
                    </Card.Actions>
                    </View>
                </Card>
              );
        }}
        />
        </SafeAreaView>
        </ScrollView>
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
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  cardContent:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around"
  }
});

//make this component available to the app
