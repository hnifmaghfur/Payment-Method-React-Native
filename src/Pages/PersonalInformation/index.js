import React from 'react';
import style from './style';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MobileNav from '../../components/mobileNav';
import {useSelector} from 'react-redux';

export default function PersonalInformation({navigation}) {
  const {data} = useSelector((state) => state.Users);
  const {fullName, phoneNumber, email} = data;
  const toProfile = () => {
    navigation.navigate('Profile');
  };
  return (
    <ScrollView style={style.container}>
      <MobileNav
        thisnavigate={() => toProfile()}
        pageTitle="Personal Information"
      />
      <View style={{padding: 20}}>
        <View
          style={{
            justifyContent: 'center',
            fontSize: 16,
            color: '##7A7886',
            marginBottom: 30,
          }}>
          <Text>We got your personal information from the sign</Text>
          <Text>up process. if you want to make changes on</Text>
          <Text>your information. contact our support</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
            elevation: 3,
          }}>
          <View
            style={{
              flexDirection: 'column',
              flex: 9,
              height: 96,
            }}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 14,
              }}>
              First Name
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 18,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              {fullName.split(' ')[0]}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
            elevation: 3,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 14,
              }}>
              Last Name
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 18,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              {fullName.split(' ').length > 1 ? fullName.split(' ')[1] : '-'}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
            elevation: 3,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 14,
              }}>
              Verified E-mail
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 18,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              {email}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
            elevation: 3,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 14,
              }}>
              Phone Number
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 18,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              +{phoneNumber}
            </Text>
          </View>
          <Text
            style={{
              marginLeft: 'auto',
              color: '#6379F4',
              fontWeight: 'bold',
              paddingTop: 40,
              paddingRight: 20,
            }}
            onPress={() => navigation.navigate('AddPhone')}>
            Manage
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
