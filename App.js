// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import LoginScreen from "react-native-login-screen";
// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginSignup from './Screen/LoginSignup';
import SignUpScreen from './Screen/SignUpScreen';
import HomeScreen from './Screen/HomeScreen';
import Payment from './Screen/Payment';
import Method1 from './Screen/method1';
import Method2 from './Screen/method2';
import SuccessScreen from './Screen/SuccessScreen';
import SuccessMsg from './Screen/SuccessMsg';
import AfterPay from './Screen/AfterPay';
const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator headerMode="none">
    
    {/* <Stack.Screen
        name="getStarted"
        component={getStarted}
      /> */}
      <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
      <Stack.Screen
  name="LoginSignup"
  component={LoginSignup}
/>
<Stack.Screen
  name="SignUp"
  component={SignUpScreen}
/>
<Stack.Screen
  name="HomePage"
  component={HomeScreen}
/>
<Stack.Screen
  name="Pay"
  component={Payment}
/>
<Stack.Screen
  name="mode1"
  component={Method1}
/>
<Stack.Screen
  name="mode2"
  component={Method2}
/>
<Stack.Screen
  name="success"
  component={SuccessScreen}
/>
<Stack.Screen
  name="msg"
  component={SuccessMsg}
/>
<Stack.Screen
  name="after"
  component={AfterPay}
/>
{/* 

<Stack.Screen
  name="Login"
  component={LoginScreen}
/>


<Stack.Screen
  name="Navbar"
  component={NavigationBar}
/> */}

      {/* <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      /> */}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* SplashScreen which will come once for 5 Seconds */}
        
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        {/* <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;