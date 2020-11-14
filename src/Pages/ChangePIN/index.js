import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import MobileNav from '../../components/mobileNav';
import style from '../../components/style';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const ChangePIN = ({navigation}) => {
  const [pincode, setPincode] = React.useState('');
  const toProfile = () => {
    navigation.navigate('Profile');
  };
  return (
    <ScrollView style={style.container}>
      <MobileNav thisnavigate={() => toProfile()} pageTitle="Change PIN" />
      <View style={{padding: 20}}>
        <Text style={{fontSize: 16, color: '#7A7886'}}>
          Enter your 6 digits Zwallet PIN below to
        </Text>
        <Text style={{fontSize: 16, color: '#7A7886'}}>
          continue to the next steps.
        </Text>
        <View style={{marginTop: 100, alignItems: 'center'}}>
          <SmoothPinCodeInput
            codeLength={6}
            cellStyle={{
              borderWidth: 2,
              borderRadius: 10,
              borderColor: 'rgba(169, 169, 169, 0.6)',
            }}
            cellStyleFocused={{
              borderColor: '#6379F4',
            }}
            value={pincode}
            onTextChange={(code) => setPincode(code)}
            onSubmitEditing={() => toPinChange()}
          />
        </View>
        <Button
          style={{
            marginTop: 300,
            padding: 10,
            backgroundColor: '#6379F4',
            borderRadius: 15,
          }}
          mode="contained"
          onPress={() => navigation.navigate('Profile')}>
          Continue
        </Button>
      </View>
    </ScrollView>
  );
};

export default ChangePIN;
