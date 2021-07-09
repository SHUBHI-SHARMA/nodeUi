import React,{Component,useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

//const userId = '8987';
const getUserId = async () => {
    try {
      userId = await AsyncStorage.getItem('userId') || 'none';
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
    return userId;
  }
export default class SplashScreen extends Component {  

    // useEffect(() => {
    //   setTimeout(() => {
    //     setAnimating(false);
    //     //Check if user_id is set or not
    //     //If not then send for Authentication
    //     //else send to Home Screen
    //     AsyncStorage.getItem('user_id').then((value) =>
    //       navigation.replace(
    //         value === null ? 'Auth' : 'DrawerNavigationRoutes'
    //       ),
    //     );
    //   }, 6000);
    // }, []);
    navigationByCondition(){
        const {navigation} = this.props;
    
        if (getUserId())
        {
        navigation.navigate('LoginSignup')
        }
        else {
          navigation.navigate('after');
        }
      };
    render()
    {return (
      <View style={{flex:1,backgroundColor:'#00b3ff'}}>
     <StatusBar backgroundColor='#00b3ff' barStyle="light-content" translucent={true}/>

       <View style={styles.header}>

       <Image
         source={require('./screen3.gif')}
         style={{top:-52,height:Dimensions.get("screen").height/1.8,width:Dimensions.get("screen").width+40}}/>           
            <Animatable.Image 
                animation="fadeInUpBig"
                delay={2000}
            source={require('./logo.png')}
            style={styles.logo}
            resizeMode="contain"
            />
            <View style={styles.button}>
            <Animatable.View 
                animation="bounceIn"
                delay={3000}
                >
                <TouchableOpacity onPress={()=>this.navigationByCondition()}>
                <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    
                </LinearGradient>
            </TouchableOpacity>
            </Animatable.View>
            </View>
            {/* <Text style={{fontFamily:"Orbitron-Black", color:"white",fontSize:35,top:-240,left:60}}>SARVVID</Text> */}
            
        </View>


{/* <Image source={require('./screen2.gif')} 
    style={{top:-820,left:-20,right:20,height:Dimensions.get("screen").height/1.7,width:Dimensions.get("screen").width+40}}/>           
    <StatusBar backgroundColor='#00b3ff' barStyle="light-content" translucent={true}/> */}
       
       
           
       
      </View>
    
    );}
};


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
