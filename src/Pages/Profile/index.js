import React from 'react';
import style from './style';
import {View, Text, Image, ToastAndroid} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SvgUri from 'react-native-svg-uri';
import {useDispatch, useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Button, TextInput} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import {IMAGE_URL} from '../../components/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthLogout} from '../../redux/actions/Auth';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import {GetUsers, PatchAll, PatchPhoto} from '../../redux/actions/Users';

export default function Profile({navigation}) {
  const {token} = useSelector((state) => state.Auth);
  const {data} = useSelector((state) => state.Users);
  const {token: device_token} = useSelector((state) => state.Device);
  // console.log(data);
  // console.log('data from profile');
  // const [rename, setRename] = React.useState('oke');
  // const [nameData, setNameData] = React.useState('');
  // const [relog, setRelog] = React.useState(false);
  const {fullName, phoneNumber, img} = data;
  console.log(img);
  console.log('img for profile');
  const dispatch = useDispatch();
  const sheetRef = React.useRef(null);
  const down = new Animated.Value(1);

  React.useEffect(() => {
    if (img) {
      console.log(img);
      console.log('img for profile effect');
      dispatch(GetUsers(token));
      sheetRef.current.snapTo(1);
    }
  }, [img]);

  const renderHeader = () => (
    <View style={style.header}>
      <View style={style.panelHeader}>
        <View style={style.panelHandle} />
      </View>
    </View>
  );

  const renderContent = () => (
    <View style={style.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={style.panelTitle}>Upload Photo</Text>
        <Text style={style.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <TouchableOpacity
          style={style.panelButton}
          onPress={takePhotoFromCamera}>
          <Text style={style.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.panelButton}
          onPress={choosePhotoFromLibrary}>
          <Text style={style.panelButtonTitle}>Choose From Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.panelButton}
          onPress={() => sheetRef.current.snapTo(1)}>
          <Text style={style.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const takePhotoFromCamera = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
      },
      (res) => {
        const img = new FormData();
        img.append('images', {
          uri: res.uri,
          name: res.fileName,
          type: res.type,
        });
        dispatch(PatchPhoto(token, img));
        ToastAndroid.show('Success Change Photo', 1000);
      },
    );
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (res) => {
        const img = new FormData();
        img.append('images', {
          uri: res.uri,
          name: res.fileName,
          type: res.type,
        });
        dispatch(PatchPhoto(token, img));
        ToastAndroid.show('Success Change Photo', 1000);
      },
    );
  };

  const onLogout = () => {
    AsyncStorage.setItem('device_token', device_token);
    dispatch(AuthLogout(token, {device_token: 'nothing'}));
  };

  return (
    <>
      <View style={style.container}>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            marginTop: 25,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Dashboard');
            }}>
            <ArrowLeft width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              elevation: 1,
              padding: 5,
              // backgroundColor: '#E5E5E5',
            }}
            onPress={() => sheetRef.current.snapTo(0)}>
            <Image
              style={{
                width: 80,
                height: 80,
              }}
              source={{
                uri: `${IMAGE_URL}/${img}`,
              }}
            />
          </TouchableOpacity>
          {/* <Text style={{marginVertical: 10}}>edit</Text> */}
          {/* {rename != 'oke' ? ( */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              marginVertical: 20,
              marginBottom: 10,
            }}>
            {fullName}
          </Text>
          {/* ) : ( */}
          {/* <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  marginVertical: 20,
                  marginBottom: 10,
                }}
                onChangeText={(e) => setNameData(e)}
              />
              <Button onPress={editName}>edit</Button>
            </View>
          )} */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              marginVertical: 20,
              marginTop: 0,
            }}>
            +{phoneNumber}
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
          onPress={() => navigation.navigate('ChangePassword')}>
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
          onPress={() => navigation.navigate('ChangePIN')}>
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
      {/* ini upload photo */}
      <BottomSheet
        ref={sheetRef}
        snapPoints={[360, 0]}
        initialSnap={1}
        callbackNode={down}
        enabledGestureInteraction
        enabledContentGestureInteraction={false}
        enabledContentTapInteraction
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
      {/* end upload photo */}
    </>
  );
}
