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
import { LinearTextGradient } from 'react-native-text-gradient';
import Confetti from 'react-native-magic-confetti';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SuccessMsg = ({navigation}) => {
    const [animating, setAnimating] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setAnimating(false);
        //Check if user_id is set or not
        //If not then send for Authentication
        //else send to Home Screen
        AsyncStorage.getItem('user_id').then((value) =>
          navigation.replace(
            value === null ? 'after' : 'AfterPay'
          ),
        );
      }, 2000);
    }, []);
    return (
      <View style={{flex:1,backgroundColor:'#00b3ff'}}>
      <ImageBackground source={require("./s001.jpeg")}
      style={{width: '100%', height: '100%'}}>
     <StatusBar backgroundColor='#00b3ff' barStyle="light-content" translucent={true}/>
     <Confetti
  count={100} // custom number of confettis
  size={30}
  colors={['#FFD700', '#FFD700','#FFD700']} // require FastImage // custom image component
  confettiImages={[
    require('./i2.png'),
    require('./i4.png'),
    require('./i5.png')
  ]} // all confetti images to be chosen randomly
  yspeed={1} // fall speed
/>
     <View style={{top:200,alignItems:'center',textAlign:'center'}}>
     
    <Animatable.View
    animation="bounceIn"
    duration={1000}>

<LinearTextGradient
  style={{ fontFamily:'Orbitron-Bold', fontSize:40 }}
  locations={[0, 1]}
  colors={["#FFD700", "#FFD700"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
<Text style={{textAlign:'center'}}>
 THANK YOU!
 </Text>
</LinearTextGradient>
</Animatable.View>
      </View>
      <View style={{top:400,paddingLeft:30,paddingRight:30,alignContent:'center',textAlign:'center'}}>
    <Animatable.View
    animation="fadeInUpBig"
    duration={3000}
    delay={1000}
    >

<LinearTextGradient
  style={{ fontFamily:'Orbitron-Bold', fontSize:22, alignContent:'center' }}
  locations={[0, 1]}
  colors={["#FFD700", "#FFD700"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
<Text style={{textAlign:'center'}}>
Your Recurring Revenue has been Started
 </Text>
</LinearTextGradient>
</Animatable.View>
      </View>
      </ImageBackground>
      </View>
    
    );
};

export default SuccessMsg;

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
      height:790,
      width:410,
      bottom:-400
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
