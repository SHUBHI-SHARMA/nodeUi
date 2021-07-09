import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    NativeModules,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { Col, Row, Grid } from "react-native-easy-grid";
const LoginSignup = ({navigation}) => {
    return (
      <View style={styles.container}>
      <ImageBackground source={require("./get.png")}
      style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor='#00b3ff' barStyle="light-content"/>
          {/* <View style={styles.header}>
            <Text style={styles.text_header}>Avatar</Text>
        </View> */}
        
        
           
        <Animatable.Image 
                animation="bounceIn"
                
            source={require('./logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
            <Animatable.View 
            animation="fadeInUpBig"
            duraton="10000"
            style={{flex:1}}
        >
            <Grid style={styles.after_space}>
            <Row style={styles.row1}>
            <Col>
                <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate('HomePage')}

                >
                <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Login</Text>
                </LinearGradient>

                </TouchableOpacity> 
                </View>
</Col>
<Col>
                <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate('SignUp')}
                >
                <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity> 
                </View>
</Col>

            </Row>
            </Grid>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
                }
export default LoginSignup;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.14;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#00b3ff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 120,
        paddingTop:40
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        paddingHorizontal: 40,
        paddingVertical: 30,
        marginRight:150,
        marginTop:230,
        marginBottom:400
    },
    row1:{
        top:400,
        alignContent:'center',
        justifyContent:'center',
        paddingLeft:20
         },
         row2:{
            top:130,
            alignContent:'center',
            justifyContent:'center',
            paddingLeft:80
             },
    text_header: {
        color: '#00b3ff',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign:'center',
    },
    text_footer: {
        color: '#00b3ff',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#00b3ff',
        paddingBottom: 5
    },
    logo: {
        top:160,
        width: (height_logo*1.7)*1.2,
        height: height_logo*0.9,
        marginLeft:80
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#00b3ff',
    },
    button: {
        alignItems: 'center',
    },
    signIn: {
        width: 150,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        elevation:40,
        fontFamily:'Orbitron-Medium'

    },
    textSign: {
        fontSize: 18,
        fontFamily:'Orbitron-Medium'

    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    after_space:{
        top:-10
    },
  });
