
import {
    Container,
    Content,
    View,
    Icon,
    Item,
    Label,
    Input,
    Left,
    Right,
    Button
} from "native-base";
import { Formik } from "formik";
import React, { Component } from "react";
import imageCart from '../Images/logo.png';
import {
    StyleSheet,
    Image,
    Alert,
    TouchableOpacity,
    ScrollView,
    BackHandler,
    StatusBar,
    Text,
    Dimensions
} from "react-native";
import {
    handleTextInput,
    withNextInputAutoFocusInput,
    withNextInputAutoFocusForm,
} from "react-native-formik";
import { TextField } from "react-native-material-textfield";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { compose } from "recompose";
import * as Yup from "yup";
import LinearGradient from 'react-native-linear-gradient';
//import SpinnerComponent from "../../component/Spinner";
//import { SocialIcon } from 'react-native-elements';
//import backgroundImage from "../../../assets/logo.jpg";
//import HandleBack from "../../component/HandleBack";
// import PopupDialog, {
//   DialogTitle,
//   DialogContent,
//   DialogButton,
//   DialogFooter,
// } from "react-native-popup-dialog";
//import AndroidOpenSettings from "react-native-android-open-settings";
//import HomeScreen from  "../Home/HomeScreen";
const MyInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(TextField);
const Form = withNextInputAutoFocusForm(View);
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .required()
        .min(4, "Seems a bit short We prefer secure system")
        .max(14, "Try a shorter password"),
});
const { width, height } = Dimensions.get("window");
export default class LoginScreen extends Component {
    // static navigationOptions = {
    //   drawerIcon: () => (
    //     <Icon
    //       name="sign-in"
    //       type="FontAwesome"
    //       style={{ fontSize: 24, color: "gray" }}
    //     />
    //   ),
    // };
    state = {
        //isRememberMeChecked: false,
        isAuthorized: false,
        //showSpinner: false,
        //clickedPosition: 1,
        //isNetworkDialogVisible: false,
    };
    constructor(props) {
        super(props);
        this.state = {
            isPassword: false,
            showPassword: true,
        }

    }

    componentDidMount() {
        // if (
        //     this.props.navigation.state.params &&
        //     !this.props.navigation.state.params.isConnected
        // ) {
        //     this.setState({ isNetworkDialogVisible: true });
        // }
        // else {
        //     //     firebase.auth().onAuthStateChanged(user => {
        //     //       this.setState({ isAuthorized: user ? true : false });
        //     //     });
        // }

    }
    password = () => {
        this.setState({ isPassword: !this.state.isPassword })
        this.setState({ showPassword: !this.state.showPassword })
    }
    render() {
        // if (this.state.isAuthorized)
        //   return <HomeScreen navigation={this.props.navigation} />;
        // else
        return (
            //<HandleBack onBack={this.onBack}>
            <ScrollView>
                <Container style={styles.containerStyle}>
                    <StatusBar hidden={false} backgroundColor="#ffc108" translucent={false} />

                    <Content style={{ top: "10%" }}>
                        <View>
                            <Image
                                style={styles.banner}
                                source={imageCart} />
                            <View style={{ padding: 20 }}>
                                <Formik
                                    onSubmit={values => this.handleLogin(values)}
                                    validationSchema={validationSchema}
                                    render={props => {
                                        return (
                                            <Form style={{ height: height }}>

                                                <View>
                                                    <View style={{ backgroundColor: "#fff", borderRadius: 10, height: "14%" }}>
                                                        <MyInput
                                                            label="Phone"
                                                            name="email"
                                                            type="email"
                                                            lineWidth={0}
                                                            activeLineWidth={0}
                                                            // containerStyle={{backgroundColor:"#fff", borderRadius:10}}
                                                            // labelTextStyle={{ paddingLeft: 32 }}
                                                            containerStyle={{ paddingLeft: 32 }}
                                                            inputContainerStyle={{ paddingLeft: 20 }}
                                                        />
                                                        <Icon style={styles.searchIcon} name="person" />
                                                    </View>
                                                    <View style={{ backgroundColor: "#fff", borderRadius: 10, top: 10, height: "14%" }}>
                                                        <MyInput
                                                            label="Password"
                                                            name="password"
                                                            type={this.state.showPassword ? 'password' : 'text'}
                                                            lineWidth={0}
                                                            activeLineWidth={0}
                                                            // containerStyle={{backgroundColor:"#fff", borderRadius:10}}
                                                            // labelTextStyle={{ paddingLeft: 32 }}
                                                            containerStyle={{ paddingLeft: 32 }}
                                                            inputContainerStyle={{ paddingLeft: 20 }}
                                                        />
                                                        <Icon style={styles.searchIcon} name="lock" type='FontAwesome' />
                                                    </View>

                                                    <View style={{ position: "absolute", top: "18%", left: "80%" }}>
                                                        {!this.state.isPassword ? (
                                                            <Button transparent onPress={() => { this.password() }} >
                                                                <Icon name="ios-eye-off" type='Ionicons' style={{ color: 'gray', fontSize: 25 }} />
                                                            </Button>) : (
                                                                <Button transparent onPress={() => { this.password() }} >
                                                                    <Icon name="md-eye" type='Ionicons' style={{ color: 'gray', fontSize: 25 }} />
                                                                </Button>
                                                            )
                                                        }

                                                    </View>
                                                    <View
                                                        style={{
                                                            top: "7%",
                                                            alignSelf: "flex-end"
                                                        }}>
                                                        <TouchableOpacity
                                                            transparent
                                                            // style={{ justifyContent: "flex-end" }}
                                                            onPress={() =>
                                                                this.props.navigation.navigate("Home")
                                                            }>
                                                            <Text
                                                                style={{
                                                                    //textDecorationLine: "underline",
                                                                    fontSize: 12,
                                                                    color: "#007BC1",
                                                                }}>
                                                                Forgot Your Password?
                                  </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View
                                                        style={{
                                                            top: "10%",
                                                            //marginLeft: hp("1%"),
                                                        }}>
                                                        <TouchableOpacity
                                                            onPress={() => this.props.navigation.navigate("Home")}
                                                        >
                                                            <LinearGradient
                                                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                                                colors={['#1f1e1d',  '#d1cab2']}
                                                                style={styles.button}
                                                            >
                                                                <Text style={styles.buttonText}>SignIn</Text>
                                                            </LinearGradient>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ top: "15%", flexDirection: "row", justifyContent: "center" }}>
                                                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#e3d232', "#c0b02c"]} style={{ height: 1, width: 100, top: "3.5%" }} />
                                                        <Text style={{ paddingLeft: 10, paddingRight: 10 }}>Or</Text>
                                                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#c0b02c', "#e3d232"]} style={{ height: 1, width: 100, top: "3.5%" }} />
                                                    </View>
                                                    <View style={{ marginTop: "20%", flexDirection: "row", justifyContent: "center" }}>
                                                        <View style={{ paddingRight: 20, paddingLeft: 20 }}>
                                                            <Button style={{ height: 70, width: 70, borderRadius: 70 / 2, backgroundColor: "#1f1e1d" }}>
                                                                <Icon name="facebook" type='FontAwesome' style={{ color: '#fff', fontSize: 30, left: "15%" }} />
                                                            </Button>
                                                        </View>
                                                        <View style={{ paddingRight: 20, paddingLeft: 20 }}>
                                                            <Button style={{ height: 70, width: 70, borderRadius: 70 / 2, backgroundColor: "#1f1e1d" }}>
                                                                <Icon name="google" type='FontAwesome' style={{ color: '#fff', fontSize: 30, left: "15%" }} />
                                                            </Button>
                                                        </View>
                                                    </View>
                                                    <View style={{ alignSelf: "center", top: "100%", position: "absolute", flexDirection:"row"}}>
                                                        <Text>Don,t have an account?</Text>
                                                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Register")}>
                                                        <Text style={{color:"#f7418c"}}> Sign Up</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </Form>
                                        );
                                    }}
                                />
                            </View>

                        </View>
                    </Content>
                </Container>
            </ScrollView>
            //</HandleBack>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: "#ffc108",
        height: height
    },
    buttonText: {
        fontSize: 15,
        color: "white",
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: "Railway",
    },
    button: {
        height: 50,
        width: width / 1.2,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10

    },

    banner: {
        height: "13%",
        width: "30%",
        justifyContent: "center",
        alignSelf: "center"
    },
    searchSection: {
        flexDirection: 'row'
    },
    searchIcon: {
        position: "absolute",
        color: "#A9A9A9",
        top: 25,
        paddingLeft: 10,
        fontSize: 25
    },
});
