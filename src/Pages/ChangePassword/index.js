import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Button} from 'react-native-paper';
import MobileNav from '../../components/mobileNav';
import style from '../../components/style';
import {OnChangePassword} from '../../redux/actions/Users';

import Lock from '../../assets/icons/lock.svg';
import Eye from '../../assets/icons/eye-crossed-close.svg';
import EyeFalse from '../../assets/icons/eye-crossed.svg';
import {useDispatch, useSelector} from 'react-redux';

const ChangePassword = ({navigation}) => {
  const {token} = useSelector((state) => state.Auth);
  // const {data} = useSelector((state) => state.Users);
  // const {password} = data;
  const dispatch = useDispatch();
  const [eye, setEye] = useState(true);
  const [secure, setSecure] = useState(true);
  const [eye1, setEye1] = useState(true);
  const [secure1, setSecure1] = useState(true);
  const [eye2, setEye2] = useState(true);
  const [secure2, setSecure2] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [RepeatPassword, setRepeatPassword] = useState('');
  const toProfile = () => {
    navigation.navigate('Profile');
  };

  // React.useEffect(() => {
  //   // if (passwordDB) {
  //   ToastAndroid.show('Success Change Password', 1000);
  //   // } else {
  //   //   ToastAndroid.show('Old Password is Wrong'), 1000;
  //   // }
  // }, [password]);

  const security = () => {
    if (secure) {
      setSecure(false);
      setEye(false);
    } else {
      setSecure(true);
      setEye(true);
    }
  };
  const security1 = () => {
    if (secure1) {
      setSecure1(false);
      setEye1(false);
    } else {
      setSecure1(true);
      setEye1(true);
    }
  };
  const security2 = () => {
    if (secure2) {
      setSecure2(false);
      setEye2(false);
    } else {
      setSecure2(true);
      setEye2(true);
    }
  };

  const PasswordAction = () => {
    if (!currentPassword && !newPassword && !RepeatPassword) {
      return ToastAndroid.show('All filled must be filled', 1000);
    } else {
      if (newPassword != RepeatPassword) {
        return ToastAndroid.show('New Password must be match', 1000);
      } else {
        if (newPassword.length < 7) {
          return ToastAndroid.show(
            'New Password must be more then 8 Character',
            1000,
          );
        } else {
          const data = {
            password: currentPassword,
            newPassword: newPassword,
          };
          dispatch(OnChangePassword(token, data));
          setCurrentPassword('');
          setNewPassword('');
          setRepeatPassword('');
        }
      }
    }
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
          <View style={{position: 'absolute', zIndex: 2, top: 35, left: 15}}>
            <Lock width={20} height={20} />
          </View>
          <TouchableOpacity
            style={{position: 'absolute', zIndex: 2, top: 35, left: 345}}
            onPress={security}>
            {eye ? (
              <Eye width={20} height={20} />
            ) : (
              <EyeFalse width={20} height={20} />
            )}
          </TouchableOpacity>
          <TextInput
            style={{
              paddingLeft: 40,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(169, 169, 169, 0.6)',
            }}
            label="Username"
            placeholder="Current password"
            returnKeyType="next"
            secureTextEntry={secure}
            onChangeText={(e) => setCurrentPassword(e)}
          />
        </View>
        <View style={{padding: 20}}>
          <View style={{position: 'absolute', zIndex: 2, top: 35, left: 15}}>
            <Lock width={20} height={20} />
          </View>
          <TouchableOpacity
            style={{position: 'absolute', zIndex: 2, top: 35, left: 345}}
            onPress={security1}>
            {eye1 ? (
              <Eye width={20} height={20} />
            ) : (
              <EyeFalse width={20} height={20} />
            )}
          </TouchableOpacity>
          <TextInput
            style={{
              paddingLeft: 40,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(169, 169, 169, 0.6)',
            }}
            label="Password"
            placeholder="New password"
            autoCapitalize={'none'}
            returnKeyType="next"
            secureTextEntry={secure1}
            onChangeText={(e) => setNewPassword(e)}
          />
        </View>
        <View style={{padding: 20}}>
          <View style={{position: 'absolute', zIndex: 2, top: 35, left: 15}}>
            <Lock width={20} height={20} />
          </View>
          <TouchableOpacity
            style={{position: 'absolute', zIndex: 2, top: 35, left: 345}}
            onPress={security2}>
            {eye2 ? (
              <Eye width={20} height={20} />
            ) : (
              <EyeFalse width={20} height={20} />
            )}
          </TouchableOpacity>
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
            secureTextEntry={secure2}
            onChangeText={(e) => setRepeatPassword(e)}
          />
          <Button
            style={{
              marginTop: 130,
              padding: 10,
              backgroundColor: '#6379F4',
              borderRadius: 15,
            }}
            mode="contained"
            onPress={PasswordAction}>
            Submit
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default ChangePassword;
