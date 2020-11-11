import React from 'react';
import style from './style';
import {View, Text} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {AuthLogout} from '../../redux/actions/Auth';

export default function Profile({navigation}) {
  const {data} = useSelector((state) => state.Users);
  const {fullName, phoneNumber} = data;
  console.log(fullName);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(AuthLogout());
  };
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
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            borderRadius: 5,
            elevation: 1,
            padding: 5,
            // backgroundColor: '#E5E5E5',
          }}>
          <SvgUri
            width="80"
            height="80"
            source={{
              uri:
                'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg',
            }}
          />
        </View>
        <Text style={{marginVertical: 10}}>edit</Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            marginVertical: 20,
            marginBottom: 10,
          }}>
          {fullName}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            marginVertical: 20,
            marginTop: 0,
          }}>
          +62 {phoneNumber}
        </Text>
      </View>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('PersonalInformation')}>
        <Text
          style={{
            flex: 8,
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Personal Information
        </Text>
        <View style={{flex: 4}}>{/* icon is here */}</View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Dashboard')}>
        <Text
          style={{
            flex: 8,
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Change Password
        </Text>
        <View style={{flex: 4}}>{/* icon is here */}</View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Dashboard')}>
        <Text
          style={{
            flex: 8,
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Change PIN
        </Text>
        <View style={{flex: 4}}>{/* icon is here */}</View>
      </TouchableOpacity>
      <View style={[style.button, {flexDirection: 'row'}]}>
        <Text
          style={{
            flex: 8,
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Notification
        </Text>
        <View style={{flex: 4}}>{/* icon is here */}</View>
      </View>
      <TouchableOpacity style={[style.button, {}]} onPress={onLogout}>
        <Text
          style={{
            flex: 1,
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FF5B37',
            textAlign: 'center',
            marginVertical: 5,
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
