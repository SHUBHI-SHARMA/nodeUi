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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

const Method2 = (props) => {

    const d = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
        [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
        [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
        [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
        [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
        [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
        [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
        [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    ];
    const p = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
        [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
        [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
        [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
        [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
        [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
        [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
    ];
    const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];
    const storn = (num) => {
        const newar = [];
        for(i=0;i<num.length;i++){
            newar.push(num.substring(i,i+1))
        }
        newar.reverse()
        return newar
    }
    const validateVerhoeff = (num) =>{
        var c = 0
        var myArray = storn(num);
        let i= 0;
        for(i=0;i<myArray.length;i++){
            c = d[c][p[(i%8)][myArray[i]]];
        }
        return (c == 0);
    }
    
     
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        phone : '',
        AADHAR : false,
        PAN : false,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    
    
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }




    return (
      <View style={styles.container}>
      <ImageBackground source={require("./filter-bg.jpeg")}
      style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor='#00b3ff' barStyle="light-content"/>
        
        <View style={styles.header}>
        <Animatable.View 
            animation="bounceIn"
        >
            <Text style={{top:40,textAlign:'center',fontFamily:'Orbitron-Medium',fontSize:40,color:'white'}}>Bank Details</Text>
            </Animatable.View>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView style={{top:0,left:0,height:Dimensions.get("screen").height}}>
            <View style={{top:-5}}>
                <Text style={{fontFamily:'Orbitron-Medium',color:'#00b3ff',fontSize:18,textAlign:'left'}}>ENTER BANK DETAILS</Text>
            </View>

            <Text style={styles.text_footer}>Account Number</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#00b3ff"
                    size={28}
                />
                <TextInput 
                    placeholder="You Account Number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 10
            }]}>IFSC Code</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#00b3ff"
                    size={28}
                />
                <TextInput 
                    placeholder="IFSC CODE"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 10
            }]}>AADHAR CARD</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#00b3ff"
                    size={28}
                />
                <TextInput 
                    placeholder="AADHAR CARD"
                    style={styles.textInput}
                    autoCapitalize="none"
                    keyboardType='numeric'
                    maxLength={12}
                    onChangeText={(val) => {
                        if(validateVerhoeff(`${val}`)){
                            setData({
                                ...data,
                                AADHAR : true
                            })
                        }
                        else{
                            setData({
                                ...data,
                                AADHAR : false
                            })
                        }
                    }}
                />
               {data.AADHAR ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : <Animatable.View
                animation="bounceIn"
            >
                <Feather 
                    name="x-circle"
                    color="red"
                    size={20}
                />
            </Animatable.View>}
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 10
            }]}>PAN CARD</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#00b3ff"
                    size={28}
                />
                <TextInput 
                    placeholder="PAN CARD"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => {
                        if(regex.test(val)){
                            setData({
                                ...data,
                                PAN : true
                            })
                        }
                        else{
                            setData({
                                ...data,
                                PAN : false
                            })
                        }
                    }}
                />
                {data.PAN ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : <Animatable.View
                animation="bounceIn"
            >
                <Feather 
                    name="x-circle"
                    color="red"
                    size={20}
                />
            </Animatable.View>}
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={{fontFamily:'Orbitron-Bold',color:'black'}}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={{fontFamily:'Orbitron-Bold',color:'black'}}>{" "}Privacy policy</Text>
            </View>
            {/* <View style={{top : 20}}> */}
            
            <TouchableOpacity onPress={()=>props.navigation.navigate('success')}>
                <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>SUBMIT
                    
                    </Text>
                    
                </LinearGradient>
    </TouchableOpacity>
    </ScrollView>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
                }
export default Method2;

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
       top:2,
        
        
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
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#00b3ff',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#00b3ff',
        top:1,
        fontFamily:'Orbitron-Medium'

    },
    button: {
        alignItems: 'center',
        marginTop:30,
        alignContent:'center'
       
    },
    signIn: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation:5,
        alignContent:'center',
        marginLeft:30,
        top:5
    },
    textSign: {
        fontSize: 15,
fontFamily:'Orbitron-Medium',
color:'white',
top:-4
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        fontFamily:'Orbitron-Medium',
        textAlign:'center'

    },
    color_textPrivate: {
        color: 'grey',
        fontFamily:'Orbitron-Medium',
        alignContent:'center'
    }
  });