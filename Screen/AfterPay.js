import React,{useState, useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AfterPay = ({navigation}) => {

    return (
      <View style={{flex:1,backgroundColor:'white'}}>
     <StatusBar backgroundColor='#00b3ff' barStyle="light-content" translucent={true}/>

       <View style={styles.header}>

       <Image
         source={require('./afterP.gif')}
         style={{top:20,height:Dimensions.get("screen").height/1.8,width:Dimensions.get("screen").width+40}}/>     
           
           <Animatable.View
    animation="bounceIn">
    <View style={styles.footer}>
           
           <View>
           <Animatable.View
    animation="bounceIn">
<Text style={{ fontFamily:'Orbitron-Bold', fontSize:28,top:70,paddingLeft:20,color:'yellow' }}>

Wallet Balance:
 </Text>
 </Animatable.View>
 </View>
 <View>
 <Animatable.View
 animation="fadeInUpBig"
    >
<Text style={{ top:140,fontFamily:'Orbitron-Black', fontSize:20,paddingLeft:32, textAlign:'left',color:'white' }}>
File Transferred:
 </Text>
 </Animatable.View>
 </View>
           </View>
           </Animatable.View>

        </View>       
      </View>
    
    );
};

export default AfterPay;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.14;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#00b3ff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      backgroundColor: '#00b3ff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height:290,
      width:410,
      top:30
  },
  logo: {
      top:-20,
      width: (height_logo*1.7)*1.3,
     // left:-120,
      height: height_logo*1.0
  },
  title: {
      color: 'white',
      fontSize: 20,
      top:-100,
      fontFamily:"Orbitron-SemiBold",
      textAlign:'center',
  },
  text: {
      color: 'white',
      textAlign:'center',
      fontSize:15,
      fontFamily: 'sans-serif-thin',
      top:-135
      },
  button: {
      alignItems: 'center',
      height:100,
      top:70
      
  },
  signFooter: {
    width: 350,
    height: 180,
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    marginTop:-180
},
signFooterSub: {
    width: 350,
    height: 180,
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    marginTop:-120
},
  signIn: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
      flexDirection: 'row',
      marginTop:-30,
      elevation:80
  },
  textSign: {
      color: 'white',
fontFamily:'Orbitron-Medium'
    }
});
