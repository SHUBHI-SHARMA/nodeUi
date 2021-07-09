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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const SignUpScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
      <ImageBackground source={require("./filter-bg.jpeg")}
      style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor='#00b3ff' barStyle="light-content"/>
        
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Yourself !</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#00b3ff"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="#00b3ff"
                        size={20}
                    />
                </Animatable.View>
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#00b3ff"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    
                    {/* <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    /> */}
                    
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Confirm Password</Text>
 <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#00b3ff"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    
                    {/* <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    /> */}
                    
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Phone Number</Text>
            <View style={styles.action}>
            <Feather 
                    name="lock"
                    color="#00b3ff"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Phone Number"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="#00b3ff"
                        size={20}
                    />
                </Animatable.View>
            </View>


                        <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontFamily:'Orbitron-Bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontFamily:'Orbitron-Bold'}]}>{" "}Privacy policy</Text>
            </View>
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
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity> 
                

            </View>
            </ScrollView>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
                }
export default SignUpScreen;

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
        marginLeft:20,
        marginRight:20,
        marginTop:-15,
        marginBottom:50,
    },
    text_header: {
        color: '#fff',
fontFamily:'Orbitron-Medium',
        fontSize: 30,
        textAlign:'center',
        top:45
    },
    text_footer: {
        color: '#00b3ff',
        fontSize: 18,
        fontFamily:'Orbitron-Medium'

    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#00b3ff',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#00b3ff',
        fontFamily:'Orbitron-Medium'

    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation:60
    },
    textSign: {
        fontSize: 18,
fontFamily:'Orbitron-Medium'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        fontFamily:'Orbitron-Medium'

    },
    color_textPrivate: {
        color: 'grey',
        fontFamily:'Orbitron-Medium'
    }
  });