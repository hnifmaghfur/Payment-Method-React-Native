import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

import {GetUsers} from '../redux/actions/Users';

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
import ForgotNewPassword from '../Pages/ForgotNewPassword';
import AddPhone from '../Pages/AddPhone';
import ChangePassword from '../Pages/ChangePassword';
import ChangePIN from '../Pages/ChangePIN';
import {Device} from '../redux/actions/Device';

const Stack = createStackNavigator();

export default function Route() {
  const [initialRoute, setInitialRoute] = React.useState('Login');
  const {isLogin, token} = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  // console.log(token);
  // console.log('ini dari router');

  dispatch(GetUsers(token));

  React.useEffect(() => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      navigation.navigate(remoteMessage.data.type);
    });
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        setLoading(false);
      });

    messaging()
      .getToken()
      .then((device_token) => dispatch(Device(device_token)));
  }, []);

  return (
    <>
      <NavigationContainer>
        {isLogin && token ? (
          <Stack.Navigator initialRouteName="Dashboard">
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
            <Stack.Screen
              name="AddPhone"
              component={AddPhone}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChangePIN"
              component={ChangePIN}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName={initialRoute}>
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
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}
