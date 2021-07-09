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
import SQLite from 'react-native-sqlite-storage';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const Payment = (props) => {
    React.useEffect(()=>{
        fetch("POST",`http://103.155.73.35:9000/api2/setstorage?ALLOTED=${props.route.params.storage}`,{
            'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
            'Content-Type': 'application/json'
        }).then(res=>console.log(res))
    })
   
      
    return (
      <View style={styles.container}>
      <ImageBackground source={require("./filter-bg.jpeg")}
      style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor='#00b3ff' barStyle="light-content"/>
        
        <View style={styles.header}>
        <Animatable.View 
            animation="bounceIn"
        >
            <Text style={styles.text_header}>Get Paid !</Text>
            <Text style={{top:120,textAlign:'center',fontFamily:'Orbitron-Medium',fontSize:30,color:'white'}}>₹{props.route.params.storage} / month</Text>
            </Animatable.View>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <View style={{top:2}}>
                <Text style={{fontFamily:'Orbitron-Medium',color:'#00b3ff',fontSize:20,textAlign:'center'}}>Click Your Method Of Payment</Text>
            </View>
            <View style={{top:50, height:100}}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('mode1')}>
                <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>By UPI</Text>
                    
                </LinearGradient>
            </TouchableOpacity>
            </View>
            <View style={{top:20,height:100}}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('mode2')}>
                <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>By Bank Transfer</Text>
                    
                </LinearGradient>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
                }
export default Payment;

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
       top:250,
        
        
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