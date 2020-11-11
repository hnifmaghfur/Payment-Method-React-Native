import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';

export default function ForgotNewPassword({navigation, props}) {
  const [newPassword, setNewPassword] = React.useState('');
  const [verifyPassword, setVerifyPassword] = React.useState('');

  const onChangePassword = () => {
    const {email} = props.params;
    if (!newPassword && !verifyPassword) {
      ToastAndroid.show('All field must be filled.', ToastAndroid.SHORT);
      return false;
    }
    if (newPassword.length < 7) {
      ToastAndroid.show(
        'Password must be 8 character or more.',
        ToastAndroid.SHORT,
      );
      return false;
    }
    if (newPassword == verifyPassword) {
      //axios
      setNewPassword('');
      setVerifyPassword('');
      ToastAndroid.show('Change Password Successfully', ToastAndroid.SHORT);
      navigation.navigate('Login');
    } else {
      ToastAndroid.show('New Password must be same.', ToastAndroid.SHORT);
      return false;
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.logo}>ZWallet</Text>
      <View style={style.containerMenu} elevation={5}>
        <Text style={style.signup}>Reset Password</Text>
        <Text style={style.message}>
          Create and confirm your new password so you can login to Zwallet.
        </Text>
        <View style={{paddingHorizontal: 20}}>
          <TextInput
            style={style.inputMenu}
            placeholder="Create new password"
            value={newPassword}
            onChangeText={(e) => setNewPassword(e)}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <TextInput
            style={style.inputMenu}
            placeholder="Confirm new password"
            value={verifyPassword}
            onChangeText={(e) => setVerifyPassword(e)}
          />
        </View>
        <TouchableOpacity
          style={style.button}
          onPress={() => onChangePassword()}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
