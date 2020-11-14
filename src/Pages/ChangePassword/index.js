import React from 'react';
import {ScrollView, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import MobileNav from '../../components/mobileNav';
import style from '../../components/style';

const ChangePassword = ({navigation}) => {
  const toProfile = () => {
    navigation.navigate('Profile');
  };
  return (
    <>
      <ScrollView style={style.container}>
        <MobileNav
          thisnavigate={() => toProfile()}
          pageTitle="Change Password"
        />
        <View style={{padding: 20}}>
          <View style={{marginBottom: 30, marginTop: 20}}>
            <Text style={{fontSize: 16, color: '#7A7886'}}>
              You must enter your current password and then
            </Text>
            <Text style={{fontSize: 16, color: '#7A7886'}}>
              type your new password twice
            </Text>
          </View>
        </View>
        <View style={{padding: 20}}>
          <View style={{position: 'absolute', zIndex: 2, top: 20, left: 10}}>
            {/* icon */}
          </View>
          <TextInput
            style={{
              paddingLeft: 40,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(169, 169, 169, 0.6)',
            }}
            label="Username"
            placeholder="Current password"
            autoCapitalize={'none'}
            returnKeyType="next"
            secureTextEntry={true}
          />
        </View>
        <View style={{padding: 20}}>
          <View style={{position: 'absolute', zIndex: 2, top: 20, left: 10}}>
            {/* icon */}
          </View>
          <TextInput
            style={{
              paddingLeft: 40,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(169, 169, 169, 0.6)',
            }}
            label="Email"
            placeholder="New password"
            autoCapitalize={'none'}
            returnKeyType="next"
            secureTextEntry={true}
          />
        </View>
        <View style={{padding: 20}}>
          <View style={{position: 'absolute', zIndex: 2, top: 20, left: 10}}>
            {/* icon */}
          </View>
          <TextInput
            style={{
              paddingLeft: 40,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(169, 169, 169, 0.6)',
            }}
            label="Password"
            placeholder="Repeat password"
            autoCapitalize={'none'}
            returnKeyType="send"
            secureTextEntry={true}
          />
          <Button
            style={{
              marginTop: 130,
              padding: 10,
              backgroundColor: '#6379F4',
              borderRadius: 15,
            }}
            mode="contained"
            onPress={() => navigation.navigate('Profile')}>
            Submit
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default ChangePassword;
