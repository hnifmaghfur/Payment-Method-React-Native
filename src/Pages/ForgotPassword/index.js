import React from 'react';
import style from './src/style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Signup as Register} from '../../redux/actions/Register';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = React.useState('');
  // const dispatch = useDispatch();
  const onChange = () => {
    if (!email) {
      alert('Email is required');
      return false;
    }
    navigation.navigate('ForgotNewPassword', {email: email});
  };
  return (
    <View style={style.container}>
      <Text style={style.logo}>ZWallet</Text>
      <View style={style.containerMenu} elevation={5}>
        <Text style={style.signup}>Reset Password</Text>
        <Text style={style.message}>
          Enter your Zwallet e-mail so we can send you a password reset link.
        </Text>
        <View style={{paddingHorizontal: 20}}>
          <TextInput
            style={style.inputMenu}
            placeholder="Enter your E-mail"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <TouchableOpacity style={style.button} onPress={onChange}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
