import React from 'react';
import style from './style';
import {View, Text} from 'react-native';

export default function PersonalInformation({navigation}) {
  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          marginTop: 25,
          alignItems: 'center',
        }}>
        <View style={{marginRight: 10}}>
          <Text
            style={{fontWeight: 'bold', fontSize: 17}}
            onPress={() => navigation.navigate('Dashboard')}>
            +
          </Text>
        </View>
        <Text style={style.titleHeader}>Personal Information</Text>
      </View>
      <Text style={{fontSize: 16, margin: 14, marginVertical: 20}}>
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </Text>
    </View>
  );
}
