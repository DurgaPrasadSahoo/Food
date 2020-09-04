
import React, { Component } from "react";
import { View, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation";
import { Text, Appbar, Title, Card } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import Sidebar from '../Components/Sidebar';
import Drawer from "react-native-drawer";
import '@firebase/firestore';
import firebase from 'firebase';
//import SearchBar from 'react-native-search-bar';
import { SearchBar, Image, Avatar, Button, Rating, Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");
let imageUrl1 = require("../Images/1.jpeg")
let imageUrl2 = require("../Images/2.jpeg")
let imageUrl3 = require("../Images/3.jpeg")
let imageUrl4 = require("../Images/4.jpeg")
let imageUrl5 = require("../Images/5.jpeg")
let imageUrl6 = require("../Images/6.jpeg")
let imageUrl7 = require("../Images/7.jpeg")
let imageUrl8 = require("../Images/8.jpeg")
let imageUrl9 = require("../Images/9.jpeg")
let imageUrl10 = require("../Images/sundowner.png")
let imageUrl11 = require("../Images/odisha.jpeg")
let imageUrl12 = require("../Images/dawat.jpeg")
let imageUrl13 = require("../Images/narula.jpg")
const dummyData = [
  // {
  //   imageUrl: require("../Images/1.jpeg"),
  //   title: "Burgers",
  //   id: 1
  // },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Shakes",
    id: 2
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Sandwhichs",
    id: 3
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Continetial",
    id: 4
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "chinees",
    id: 5
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Local Food",
    id: 6
  }
];

const dummyRestaurant = [
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Ten Dowing Street",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Boozer's Bar & Restaurant",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Calypso Club & Lounge",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Trance Pub",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Vidoora",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Mustang Lounge",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Quaram Lounge",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Bottom Sip & Bar",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Tabrena The Cafe Bar",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Pitchers Cafe and Bar",
    place: "Vijay Nagar"
  }
];
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
      place: dummyRestaurant,
      isDrawerOpen: false,
      search: '',
      items: []
    };
    this.ref = firebase.firestore().collection('restruants');
    this.unsubscribe = null;
  }
  toggleDrawerMenu = () => {
    console.log("called", this.state.isDrawerOpen);
    this.setState({ isDrawerOpen: true });
  };
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
  onCollectionUpdate = (item) => {
    console.log("Item1", item)
    let data = [];
    item.forEach((doc) => {
      var objToAdd = doc.data();
      objToAdd.id = doc.id;
      data.push(objToAdd);
    });
    this.setState({ items: data })
    console.log("Item2", this.state.items)
  }
  render() {

    return (
      <Drawer
        type="overlay"
        open={this.state.isDrawerOpen}
        content={<Sidebar navigation={this.props.navigation} />}
        tapToClose={true}
        openDrawerOffset={0.5} // 20% gap on the right side of drawer
        closeDrawerOffset={0}
        styles={drawerStyles}
        tweenEasing={"easeInOutQuad"}
        onClose={() => {
          this.setState({ isDrawerOpen: false });
        }}>
        <View style={{ flex: 1 }}>
          <Appbar.Header style={{ backgroundColor: "#ffc108" }}>
            <Appbar.Action
              icon="menu"
              onPress={() => { this.toggleDrawerMenu(); }}
            />
            <Appbar.Content title="Location Bhubaneswar" />
            <Appbar.Action icon="shopping-cart" onPress={() =>
              this.props.navigation.navigate("Cart")
            } />
          </Appbar.Header>
          {/* <View style={{borderwidth:2, borderRadius:10, borderColor:"red"}}>
          <SearchBar
            ref="searchBar"
            placeholder="Search Restaurant"
           // onChangeText={...}
           // onSearchButtonPress={...}
           // onCancelButtonPress={...}
          />
          </View> */}
          <View style={{ flexDirection: "row", backgroundColor: "#ffc108" }}>
            <View style={{ width: "90%" }}>
              <SearchBar
                placeholder="Find Restaurants"
                onChangeText={this.updateSearch}
                containerStyle={{ backgroundColor: "#ffc108" }}
                inputContainerStyle={{ backgroundColor: "#fff", borderRadius: 30 }}
              // value={search}
              />
            </View>
            <View style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: "black" }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("Filter") }}>
                <View style={{ top: "30%", right: "10%" }}>
                  <Icon
                    name='filter-list'
                    type='material'
                    color='#000'
                    size={40}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Title style={{ color: "#ffc108", fontWeightWeight: "bold" }}>Popular Categories</Title>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Avatar
                    rounded
                    size="large"
                    source={imageUrl1}
                  // style={{ width: 100, height: 100, borderRadius: 100 / 2, }}
                  />
                  <Button
                    title="Pizza"
                    titleStyle={{ color: "#000" }}
                    buttonStyle={{ backgroundColor: "#ffc108", borderTopLeftRadius: 30, borderTopEndRadius: 30 }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Avatar
                    rounded
                    size="large"
                    source={imageUrl2}
                  // style={{ width: 100, height: 100, borderRadius: 100 / 2, }}
                  />
                  <Button
                    title="Pakoda"
                    titleStyle={{ color: "#000" }}
                    buttonStyle={{ backgroundColor: "#ffc108", borderTopLeftRadius: 30, borderTopEndRadius: 30 }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Avatar
                    rounded
                    size="large"
                    source={imageUrl3}
                  // style={{ width: 100, height: 100, borderRadius: 100 / 2, }}
                  />
                  <Button
                    title="Chowmin"
                    titleStyle={{ color: "#000" }}
                    buttonStyle={{ backgroundColor: "#ffc108", borderTopLeftRadius: 30, borderTopEndRadius: 30 }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Avatar
                    rounded
                    size="large"
                    source={imageUrl4}
                  // style={{ width: 100, height: 100, borderRadius: 100 / 2, }}
                  />
                  <Button
                    title="Roll"
                    titleStyle={{ color: "#000" }}
                    buttonStyle={{ backgroundColor: "#ffc108", borderTopLeftRadius: 30, borderTopEndRadius: 30 }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Avatar
                    rounded
                    size="large"
                    source={imageUrl5}
                  // style={{ width: 100, height: 100, borderRadius: 100 / 2, }}
                  />
                  <Button
                    title="sandwich"
                    titleStyle={{ color: "#000" }}
                    buttonStyle={{ backgroundColor: "#ffc108", borderTopLeftRadius: 30, borderTopEndRadius: 30 }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Avatar
                    rounded
                    size="large"
                    source={imageUrl6}
                  // style={{ width: 100, height: 100, borderRadius: 100 / 2, }}
                  />
                  <Button
                    title="Burger"
                    titleStyle={{ color: "#000" }}
                    buttonStyle={{ backgroundColor: "#ffc108", borderTopLeftRadius: 30, borderTopEndRadius: 30 }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
              </View>
            </ScrollView>
            {/* <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={dummyData}
              keyExtractor={item =>JSON.stringify(item.id)}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate("Menu") }}>
                    <View style={styles.popularCategories}>
                      <Avatar.Image size={100} source={{ uri: item.imageUrl }} />
                      <Text style={styles.popularText}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            /> */}

            <Title style={{ color: "#ffc108", fontWeight: "bold" }}>Best Deals</Title>
            {/* <Carousel
              enableMomentum={true}
              activeSlideAlignment={"start"}
              ref={c => {
                this._carousel = c;
              }}
              layout={"default"}
              data={dummyData}
              inactiveSlideScale={0.95}
              inactiveSlideOpacity={1}
              renderItem={({ item: rowData }) => {
                return (
                  <View>
                    <Card>
                      <Card.Cover source={{ uri: rowData.imageUrl }} />
                      <Text
                        style={{ fontSize: 20, padding: 20 }}>{rowData.title}</Text>
                    </Card>
                  </View>
                );
              }}
              sliderWidth={500}
              itemWidth={200}
            /> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Image
                    source={imageUrl6}
                    style={{ width: 200, height: 200 }}
                  />
                  <Button
                    title="Burger"
                    titleStyle={{ color: "#000" }}
                    buttonStyle={{ width: 200, backgroundColor: "#ffc108" }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Image
                    source={imageUrl5}
                    style={{ width: 200, height: 200 }}
                  />
                  <Button
                    title="Pizza"
                    buttonStyle={{ width: 200, backgroundColor: "#ffc108" }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Image
                    source={imageUrl4}
                    style={{ width: 200, height: 200 }}
                  />
                  <Button
                    title="Roll"
                    buttonStyle={{ width: 200, backgroundColor: "#ffc108" }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Image
                    source={imageUrl3}
                    style={{ width: 200, height: 200 }}
                  />
                  <Button
                    title="Pakoda"
                    buttonStyle={{ width: 200, backgroundColor: "#ffc108" }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
                <View style={{ flexDirection: "column", margin: 10 }}>
                  <Image
                    source={imageUrl2}
                    style={{ width: 200, height: 200 }}
                  />
                  <Button
                    title="Panner"
                    buttonStyle={{ width: 200, backgroundColor: "#ffc108" }}
                    onPress={() => this.props.navigation.navigate("Menu")}
                  />
                </View>
              </View>
            </ScrollView>
            <Title style={{ marginTop: 15, color: "#ffc108", fontWeightWeight: "bold" }}>Most Popular Restaurant</Title>
            {/* <View style={{ marginTop: 10 }}>
            <FlatList
              data={this.state.items}
              keyExtractor={item =>JSON.stringify(item.id)}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate("Menu") }}>
                    <View style={styles.popularCategories}>
                      <Avatar.Image size={100} source={{ uri: item.image }} />
                      <Text style={styles.popularText}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            /> 
           </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("SunDowner") }}>
                <Image
                  source={imageUrl10}
                  style={{ width: width, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>SunDowner Cafe</Text>
                <View style={{ justifyContent: "center", left: 50 }}>
                  <Rating imageSize={15} fractions="{1}" startingValue="{3.3}" />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("Odisha") }}>
                <Image
                  source={imageUrl11}
                  style={{ width: width, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Odisha Hotel</Text>
                <View style={{ justifyContent: "center", left: 50 }}>
                  <Rating imageSize={15} fractions="{1}" startingValue="{3.3}" />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("Dawat") }}>
                <Image
                  source={imageUrl12}
                  style={{ width: width, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Dawat Restaurant</Text>
                <View style={{ justifyContent: "center", left: 50 }}>
                  <Rating imageSize={15} fractions="{1}" startingValue="{3.3}" />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("Narula") }}>
                <Image
                  source={imageUrl13}
                  style={{ width: width, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Narula Restaurant</Text>
                <View style={{ justifyContent: "center", left: 50 }}>
                  <Rating imageSize={15} fractions="{1}" startingValue="{3.3}" />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("Restaurant") }}>
                <Image
                  source={imageUrl9}
                  style={{ width: width, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Cheesy Restaurant</Text>
                <View style={{ justifyContent: "center", left: 50 }}>
                  <Rating imageSize={15} fractions="{1}" startingValue="{3.3}" />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("Restaurant") }}>
                <Image
                  source={imageUrl8}
                  style={{ width: width, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Cheesy Restaurant</Text>
                <View style={{ justifyContent: "center", left: 50 }}>
                  <Rating imageSize={15} fractions="{1}" startingValue="{3.3}" />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("Restaurant") }}>
                <Image
                  source={imageUrl7}
                  style={{ width: width, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Cheesy Restaurant</Text>
                <View style={{ justifyContent: "center", left: 50 }}>
                  <Rating imageSize={15} fractions="{1}" startingValue="{3.3}" />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("Restaurant") }}>
                <Image
                  source={imageUrl9}
                  style={{ width: width, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Cheesy Restaurant</Text>
                <View style={{ justifyContent: "center", left: 50 }}>
                  <Rating imageSize={15} fractions="{1}" startingValue="{3.3}" />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("Restaurant") }}>
                <Image
                  source={imageUrl8}
                  style={{ width: width, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Cheesy Restaurant</Text>
                <View style={{ justifyContent: "center", left: 50 }}>
                  <Rating imageSize={15} fractions="{1}" startingValue="{3.3}" />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("Restaurant") }}>
                <Image
                  source={imageUrl7}
                  style={{ width: width, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Cheesy Restaurant</Text>
                <View style={{ justifyContent: "center", left: 50 }}>
                  <Rating imageSize={15} fractions="{1}" startingValue="{3.3}" />
                </View>
              </View>
            </View> */}
            <FlatList
              data={this.state.items}
            //  keyExtractor={item => JSON.stringify(item.id)}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate("Menu") }}>
                    <View style={styles.popularCategories}>
                      <Avatar.Image size={100} source={{ uri: item.image }} />
                      <Text style={styles.popularText}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
            {/* <FlatList
              showsVerticalScrollIndicator={false}
              data={this.state.items}
              // keyExtractor={(item, index) => item.name}
              renderItem={({ item: rowData }) => {
                return (
                  <Card style={{
                    elevation: 1,
                    borderColor: "#000",
                    margin: 10,
                  }}
                    onPress={() => { this.props.navigation.navigate("Restaurant") }}>
                    <Card.Title title={rowData.name} />
                    <Card.Cover source={{ uri: rowData.image }} />
                  </Card>
                );
              }}
            /> */}
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20
  },
  popularCategories: {
    flex: 1,
    alignItems: "center",
    margin: 7
  },
  popularText: { marginTop: 5, fontSize: 17 }
});
const drawerStyles = {
  drawer: { shadowColor: "#fac02e", shadowOpacity: 0.8, shadowRadius: 3 },
  //main: {paddingLeft: 3}
};
