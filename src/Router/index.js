// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Dashboard from '../Pages/Dashboard';
import ForgotPassword from '../Pages/ForgotPassword';
import Transfer from '../Pages/Transfer';
import AmountBank from '../Pages/AmountBank';
import ConfirmTransfer from '../Pages/ConfirmTransfer';
import PinTransfer from '../Pages/PinTransfer';
import TransferStatus from '../Pages/TransferStatus';
import Topup from '../Pages/Topup';
import Profile from '../Pages/Profile';
import PersonalInformation from '../Pages/PersonalInformation';

const Stack = createStackNavigator();

export default function Route() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AmountBank"
          component={AmountBank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmTransfer"
          component={ConfirmTransfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PinTransfer"
          component={PinTransfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransferStatus"
          component={TransferStatus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Topup"
          component={Topup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
