import {Link} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
// import Mail from '../../assets/icons/mail.svg';
import style from './src/style';

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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
            placeholder="Enter your Password"
            value={password}
            // secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        {/* <Link
          to="/ForgotPassword"
          style={{
            fontSize: 14,
            textAlign: 'right',
            margin: 10,
            marginBottom: 40,
          }}>
          Forgot password?
        </Link> */}
        {/* <Text
          
          onPress={() => navigation.navigate('ForgotPassword')}>
          
        </Text> */}
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
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('Dashboard')}>
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
        {/* <View
          style={{
            margin: 10,
            borderRadius: 10,
            paddingVertical: 10,
            width: '95%',
            backgroundColor: 'blue',
          }}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
            Login
          </Text>
        </View> */}
        {/* <Button
          mode="contained"
          style={{margin: 10}}
          onPress={() => navigation.navigate('Dashboard')}>
          Login
        </Button> */}
      </View>
    </>
  );
}
