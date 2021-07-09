import React, {Component} from 'react';
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
    ImageBackground,

} from 'react-native';
import * as Animatable from 'react-native-animatable'
import RNFS from 'react-native-fs'
import { LinearTextGradient } from 'react-native-text-gradient';
import LinearGradient from 'react-native-linear-gradient';
import { Col, Row, Grid } from "react-native-easy-grid";
import BigSlider from 'react-native-big-slider';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { valA: 64, valB: 23,free:100 }
      }
      componentDidMount(){
          setTimeout(async()=>{
            const info = await RNFS.getFSInfo();
            this.setState({free:(info.freeSpace/(1000*1000*1000).toFixed(1))})
          },4000)
      }
      render () {
    return (
      <View style={styles.container}>
<ImageBackground source={require("./node0.png")}
      style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor='#00b3ff' barStyle="light-content"/>
 <View style={{top:140, left:30}}>
    <Animatable.View
    animation="bounceIn"
    duration={1000}>

<LinearTextGradient
  style={{ fontFamily:'Orbitron-Black', fontSize:30 }}
  locations={[0, 1]}
  colors={["#00b3ff", "#05e395"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
<Text>
 Fill the Bucket Up!
 </Text>
</LinearTextGradient>
</Animatable.View> 
<Animatable.Text style={{ fontFamily:'Orbitron-Black',fontSize:30,top:80,left:100}} animation="pulse" iterationCount={'infinite'} direction="alternate">{(this.state.free*this.state.valA/100).toFixed(2)} GB</Animatable.Text>

 </View>
      <View style={{height:200,top:400,paddingLeft:130,alignContent:'center'}}>
      
      <BigSlider 
      ref={el => {this.slider = el}}
      minimumValue={0}
      style={{top:-140,width:160}}
        trackStyle={{backgroundColor:'#00b3ff'}}
        label={`${this.state.valA | 0}%`}
        value={this.state.valA} onValueChange={valA => {
    
          this.setState({ valA })
        }}
        onSlidingComplete={()=>{
          if((this.state.free*this.state.valA/100).toFixed(2) > 20) {
            alert("You can allot only 20 GB in this version. This issue will be resolved in the upcoming versions.")
            console.log(2000/this.state.free)
            this.slider.slideTo(2000/this.state.free);
            this.setState({valA:2000/this.state.free})
          }
        }} />
  </View>
  <View style={{top:340, left:30}}>
    <Animatable.View
    animation="fadeInUp"
    duration={1000}>

<Text style={{ fontFamily:'Orbitron-Bold',fontSize:12,textAlign:'center',right:28,color:'#00b3ff'}}>Select the Percentage of Free Storage that you want to Allocate Us.</Text>
</Animatable.View>
<View style={styles.button}>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Pay',{storage:(this.state.free*this.state.valA/100).toFixed(2)})}}>               
 <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Continue</Text>
                    
                </LinearGradient>
            </TouchableOpacity>
</View>
</View>
  </ImageBackground>
      </View>
    );
                }
            }
const {height} = Dimensions.get("screen");
const height_logo = height * 0.14;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
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
        top:260,
        width: (height_logo*1.7)*1.2,
        height: height_logo*0.9,
        marginLeft:70
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#00b3ff',
    },
    button: {
        alignItems: 'center',
        top:45,
        left:-25
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
        fontSize: 15,
        fontFamily:'Orbitron-Medium',
        color:'white'

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



