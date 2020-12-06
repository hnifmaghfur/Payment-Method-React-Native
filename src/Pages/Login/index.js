import React from 'react';
import {View, Text, ToastAndroid, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {AuthLogin} from '../../redux/actions/Auth';
import style from './src/style';
import Mail from '../../assets/icons/mail.svg';
import Lock from '../../assets/icons/lock.svg';
import Eye from '../../assets/icons/eye-crossed-close.svg';
import EyeFalse from '../../assets/icons/eye-crossed.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export default function Login({navigation}) {
  const inputPassword = React.useRef();
  const {isLogin, error} = useSelector((state) => state.Auth);
  const {token: device_token} = useSelector((state) => state.Device);
  const [eye, setEye] = React.useState(true);
  const [secure, setSecure] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const security = () => {
    if (secure) {
      setSecure(false);
      setEye(false);
    } else {
      setSecure(true);
      setEye(true);
    }
  };

  function onLogin() {
    let data = {};
    if (email.length < 1 && password.length < 1) {
      return ToastAndroid.show('Please enter email and password', 2000);
    }
    if (device_token.length > 0) {
      data = {
        email,
        password,
        device_token: device_token,
      };
      console.log(data);
      console.log('data from login');
      dispatch(AuthLogin(device_token, data));
    } else {
      AsyncStorage.getItem('device_token').then((res) => {
        if (!res) {
          return ToastAndroid.show(
            'Device not detect! Please reopen app',
            2000,
          );
        }
        data = {
          email,
          password,
          device_token: res,
        };
        console.log(res, 'from async storage');
        dispatch(AuthLogin(res, data));
      });
      AsyncStorage.removeItem('device_token');
    }

    // console.log(data);
    // console.log('data from login');
  }

  return (
    <>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAFCFF',
        }}>
        <Text style={{color: '#6379F4', fontSize: 26, fontWeight: 'bold'}}>
          ZWallet
        </Text>
      </View>
      <View
        style={{
          flex: 8,
          backgroundColor: 'white',
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
          Login
        </Text>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            marginHorizontal: 50,
            marginTop: 20,
          }}>
          Login to your existing account to access all the features in Zwallet.
        </Text>
        <View style={{paddingHorizontal: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{position: 'absolute', top: 38, left: 0}}>
              <Mail width={20} height={20} />
              {/* <IconButton color="#444" icon="email-outline" /> */}
            </View>
            <TextInput
              style={{
                backgroundColor: 'transparent',
                marginVertical: 15,
                paddingHorizontal: 30,
                flex: 9,
              }}
              placeholder="Enter your E-mail"
              value={email}
              onChangeText={(mail) => setEmail(mail)}
              onSubmitEditing={() => inputPassword.current.focus()}
              returnKeyType={'next'}
            />
          </View>
          <View style={{position: 'absolute', top: 128, left: 12}}>
            <Lock width={23} height={23} />
          </View>

          <TextInput
            ref={inputPassword}
            style={{
              backgroundColor: 'transparent',
              marginVertical: 15,
              paddingHorizontal: 30,
            }}
            // secureTextEntry
            placeholder="Enter your Password"
            value={password}
            secureTextEntry={secure}
            onChangeText={(password) => setPassword(password)}
            returnKeyType={'send'}
          />
          <TouchableOpacity
            style={{position: 'absolute', top: 135, left: 350}}
            onPress={security}>
            {eye ? (
              <Eye width={20} height={20} />
            ) : (
              <EyeFalse width={20} height={20} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            fontSize: 14,
            textAlign: 'right',
            marginRight: 10,
            marginBottom: 40,
          }}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'right',
            }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => onLogin()}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            marginHorizontal: 50,
            marginTop: 20,
          }}>
          Don’t have an account? Let’s
          <Text
            style={{color: '#6379F4'}}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </>
  );
}
