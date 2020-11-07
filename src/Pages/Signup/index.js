import React from 'react';
import style from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function Signup({navigation}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={style.container}>
      <Text style={style.logo}>ZWallet</Text>
      <View style={style.containerMenu} elevation={5}>
        <Text style={style.signup}>Sign Up</Text>
        <Text style={style.message}>
          Create your account to access Zwallet.
        </Text>
        <View style={{paddingHorizontal: 20}}>
          <TextInput
            style={style.inputMenu}
            placeholder="Enter your username"
            value={name}
            onChangeText={(e) => setName(e)}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <TextInput
            style={style.inputMenu}
            placeholder="Enter your E-mail"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <TextInput
            style={style.inputMenu}
            placeholder="Enter your Password"
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
        </View>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={style.messageButton}>
          Already have an account? Let’s
          <Text
            style={{color: '#6379F4'}}
            onPress={() => navigation.navigate('Login')}>
            {' '}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

//         <View>
//
//         </View>
//         <View>
//         </View>
//         <View>

//         </View>
