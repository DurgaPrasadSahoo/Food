import { Content, List, ListItem, Icon, Left, Body } from "native-base";
import React, { Component } from "react";
import { View, Image, StyleSheet, Linking, Alert, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default class Sidebar extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      clickedPosition: 1,
      userRole: "",
      uploadUrl: "",
    };
    
  }
  componentDidMount() {
    // this.unsubscribe = this.databaseRef.onSnapshot(this.onCollectionUpdate);
    //this.dbref.onSnapshot(this.loadUser);
  }

  onLogout = () => {
    Alert.alert(
      "Logout",
      "Do you want to Logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => { this.props.navigation.navigate("Login") },
        },
      ],
      {
        cancelable: false,
      }
    );
    return true;
  };

//   referInWhatsap = async () => {


//     const shareOptions = {
//       title: 'Share via',
//       message: 'Please download this app',
//       url: 'https://play.google.com/store/apps/details?id=com.weimerz',
//       social: Share.Social.WHATSAPP,
//       whatsAppNumber: "918018138876",  // country code + phone number(currently only works on Android)
//       filename: 'test', // only for base64 file in Android 
//     };



//     try {
//       const ShareResponse = await Share.shareSingle(shareOptions);
//       // setResult(JSON.stringify(ShareResponse, null, 2));
//     } catch (error) {
//       console.log('Error =>', error);
//       //setResult('error: '.concat(getErrorString(error)));
//     }
//   };
  render() {
    return (
      <Content style={{ backgroundColor:  'rgba(52, 52, 52, 0.8)' }}>
        {/* <DrawerHeader/> */}
        <List>
          {/* <ListItem noBorder>
            <View style={styles.avatarContainer}>
              {this.state.avatarSource === null ? (
                <Icon
                  name="user-circle-o"
                  type="FontAwesome"
                  style={{
                    fontSize: 120,
                    marginLeft: hp("2.5%"),
                    color: "#007BC1",
                  }}
                />
              ) : (
                <Image style={styles.avatar} source={this.state.avatarSource} />
              )}
            </View>
          </ListItem> */}
          <ListItem style={{ backgroundColor:  'rgba(52, 52, 52, 0.8)', marginLeft: hp('-1%') }}>
            <View style={styles.avatarContainer}>
            {!this.state.uploadUrl ? (
                <Icon
                  name="user-circle-o"
                  type="FontAwesome"
                  style={{
                    fontSize: 120,
                    marginLeft: hp("4.5%"),
                    color: "#ffc108",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 70

                    // width: "150%"
                  }}
                />
              ) : (
                <Image
                  style={styles.avatar}
                  source={{
                    uri: this.state.uploadUrl ? this.state.uploadUrl : this.state.initialValues.image
                  }}
                />
              )}
            </View>
          </ListItem>
                <ListItem
                  noBorder
                  icon
                  onPress={() => {
                    this.props.navigation.navigate("Profile");
                  }}
                  style={{ marginTop: hp("0.5%") }}>
                  <Left>
                    <Icon
                      name="person"
                      style={{
                        color: "#ffc108",
                        fontSize: 26,
                      }}
                    />
                  </Left>
                  <Body>
                    <Text style={{ fontFamily: "Railway", fontSize: 15, color: "#ffc108" }}>My Profile</Text>
                  </Body>
                </ListItem>
              <ListItem
                noBorder
                icon
                onPress={() => {
                  this.props.navigation.navigate("Favorite");
                }}
                style={{ marginTop: hp("0.5%") }}>
                <Left>
                  <Icon
                    name="favorite"
                    type="MaterialIcons"
                    style={{
                      color: "#ffc108",
                      fontSize: 25,
                    }}
                  />
                </Left>
                <Body>
                  <Text style={{ fontFamily: "Railway", fontSize: 15, color: "#ffc108" }}>Favorite</Text>
                </Body>
              </ListItem>
          <ListItem
            noBorder
            icon
            onPress={() => {
              this.props.navigation.navigate("Contact");
            }}
            style={{ marginTop: hp("0.5%") }}>
            <Left>
              <Icon
                name="question-circle-o"
                type="FontAwesome"
                style={{
                  color: "#ffc108",
                  fontSize: 26,
                }}
              />
            </Left>
            <Body>
              <Text style={{ fontFamily: "Railway", fontSize: 15, color: "#ffc108" }}>Contact Us</Text>
            </Body>
          </ListItem>
         

              <ListItem
                noBorder
                icon
                onPress={() => {
                  this.onLogout();
                }}
                style={{ marginTop: hp("0.5%") }}>
                <Left>
                  <Icon
                    name="sign-out"
                    type="FontAwesome"
                    style={{
                      color: "#ffc108",
                      fontSize: 26,
                    }}
                  />
                </Left>
                <Body>
                  <Text style={{ fontFamily: "Railway", fontSize: 15, color: "#ffc108" }}>Logout</Text>
                </Body>
              </ListItem>
                <ListItem
                  noBorder
                  icon
                  onPress={() => { this.props.navigation.navigate("Login"); }}
                  style={{ marginTop: hp("0.5%") }}>
                  <Left>
                    <Icon
                      name="sign-in"
                      type="FontAwesome"
                      style={{
                        color: "#ffc108",
                        fontSize: 26,
                      }}
                    />
                  </Left>
                  <Body>
                    <Text style={{ fontFamily: "Railway", fontSize: 15, color: "#ffc108" }}>Login</Text>
                  </Body>
                </ListItem>
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    // alignItems: "center",
    // borderRadius: 80,
    // borderColor: "#000",
    //borderBottomColor:"#E9E7E8"
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
    marginLeft: hp("4.5%"),
  },
});
