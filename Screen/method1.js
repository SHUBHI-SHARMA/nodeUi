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
import Feather from 'react-native-vector-icons/Feather';
const Method1 = ({navigation}) => {
    return (
      <View style={styles.container}>
      <ImageBackground source={require("./filter-bg.jpeg")}
      style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor='#00b3ff' barStyle="light-content"/>
        
        <View style={styles.header}>
        <Animatable.View 
            animation="bounceIn"
        >
            <Text style={{top:60,textAlign:'center',fontFamily:'Orbitron-Medium',fontSize:40,color:'white'}}>UPI Details</Text>
            </Animatable.View>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <View style={{top:2}}>
                <Text style={{fontFamily:'Orbitron-Medium',color:'#00b3ff',fontSize:20,textAlign:'left'}}>ENTER UPI DETAILS</Text>
            </View>

            <Text style={styles.text_footer}>UPI ID</Text>
            <View style={styles.action}>
                <Feather 
                    name="user"
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
                    {/* <Feather 
                        name="check-circle"
                        color="#00b3ff"
                        size={20}
                    /> */}
                </Animatable.View>
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>AADHAR NUMBER</Text>
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
                
                    {/* <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                     */}
                    {/* <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    /> */}
                    
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>PAN NUMBER</Text>
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
{/*                 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    /> */}
                    
                   
                    
            </View>




            <View style={{top:50, height:100}}>
            <TouchableOpacity onPress={()=>navigation.navigate('success')}>
                <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Submit</Text>
                    
                </LinearGradient>
            </TouchableOpacity>
            </View>
           
            </ScrollView>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
                }
export default Method1;

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
       top:80,
        
        
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
        fontFamily:'Orbitron-Medium',
        top:20

    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#00b3ff',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#00b3ff',
        top:10,
        fontFamily:'Orbitron-Medium'

    },
    button: {
        alignItems: 'center',
        marginTop:30
       
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation:5
    },
    textSign: {
        fontSize: 18,
fontFamily:'Orbitron-Medium',
color:'white'
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