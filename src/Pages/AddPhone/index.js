import React from 'react';
import {View, Text, TextInput, ToastAndroid} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import MobileNav from '../../components/mobileNav';
import style from '../../components/style';
import {PatchPhone} from '../../redux/actions/Users';

const AddPhone = ({navigation}) => {
  const {token} = useSelector((state) => state.Auth);
  const [phone, setPhone] = React.useState(0);
  const dispatch = useDispatch();
  const toPersonalInformation = () => {
    navigation.navigate('PersonalInformation');
  };

  const confirmPhone = () => {
    dispatch(PatchPhone(token, phone));
    ToastAndroid.show('Success Change Phone Number.', ToastAndroid.LONG);
    toPersonalInformation();
  };

  // React.useEffect(()=>{

  // })

  return (
    <ScrollView style={style.container}>
      <MobileNav
        thisnavigate={() => toPersonalInformation()}
        pageTitle="Add Phone"
      />
      <View style={{padding: 20}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16',
            color: '#7A7886',
          }}>
          <Text>Add at least one phone number for the transfer</Text>
          <Text> ID so you can start transfering your money to</Text>
          <Text>another user.</Text>
        </View>
        <View>
          <TextInput
            style={{
              paddingLeft: 40,
              marginTop: 70,
              height: 40,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(169, 169, 169, 0.6)',
              fontSize: 16,
            }}
            placeholder="Enter your phone number"
            onChangeText={(e) => setPhone(parseInt(e))}
          />
          <Button
            style={{
              marginTop: 330,
              padding: 10,
              backgroundColor: '#6379F4',
              borderRadius: 15,
            }}
            mode="contained"
            onPress={confirmPhone}>
            Submit
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddPhone;
