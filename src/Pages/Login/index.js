import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {AuthLogin} from '../../redux/actions/Auth';
import style from './src/style';

export default function Login({navigation}) {
  const {isLogin, error} = useSelector((state) => state.Auth);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const onLogin = () => {
    const data = {
      email,
      password,
    };
    // console.log(data);
    dispatch(AuthLogin(data));
    if (isLogin) {
      ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
    }
    if (error && !isLogin) {
      ToastAndroid.show('Wrong email or password', ToastAndroid.SHORT);
    }
  };

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
          <View>
            {/* <Mail width={10} height={10} /> */}
            <TextInput
              style={{
                backgroundColor: 'transparent',
                marginVertical: 15,
                paddingHorizontal: 20,
              }}
              placeholder="Enter your E-mail"
              value={email}
              onChangeText={(mail) => setEmail(mail)}
            />
          </View>
          <TextInput
            style={{backgroundColor: 'transparent', marginVertical: 15}}
            secureTextEntry
            placeholder="Enter your Password"
            value={password}
            // secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
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