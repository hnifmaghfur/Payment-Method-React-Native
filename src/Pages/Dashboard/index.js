import React from 'react';
import style from './style';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import SvgUri from 'react-native-svg-uri';
import {useDispatch, useSelector} from 'react-redux';
import {GetSearch} from '../../redux/actions/Search';
import {IMAGE_URL} from '../../components/utils';

export default function Dashboard({navigation}) {
  const {data} = useSelector((state) => state.Users);
  const {token} = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const {fullName, balance, img, phoneNumber} = data;
  // console.log(img);
  const onTransfer = () => {
    dispatch(GetSearch(token, ''));
    navigation.navigate('Transfer');
  };
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        {/* Navbar */}
        <View style={style.navbar}>
          {/* photo here */}
          <View style={{flex: 2, marginLeft: 15}}>
            <Image
              style={{
                width: 52,
                height: 52,
              }}
              source={{
                uri: `${IMAGE_URL}/${img}`,
              }}
            />
          </View>
          <View style={{flex: 10, flexDirection: 'column'}}>
            <Text onPress={() => navigation.navigate('Profile')}>Hallo</Text>
            <Text
              style={style.name}
              onPress={() => navigation.navigate('Profile')}>
              {fullName}
            </Text>
          </View>
        </View>
        {/* icons bell */}
        <View style={style.navbar}></View>
        {/* end Navbar */}

        {/* balance menu */}
        <View style={style.boxBalance}>
          <Text style={{fontSize: 14, color: 'white'}}>Balance</Text>
          <Text style={style.balanceNumber}>Rp. {balance}</Text>
          <Text style={{color: 'white', fontSize: 14}}>+{phoneNumber}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{flex: 5, marginHorizontal: 10, marginLeft: 15}}>
            <Button mode="contained" style={style.button} onPress={onTransfer}>
              Transfer
            </Button>
          </View>
          <View style={{flex: 5, marginHorizontal: 10, marginRight: 15}}>
            <Button
              mode="contained"
              style={style.button}
              onPress={() => navigation.navigate('Topup')}>
              Top Up
            </Button>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'flex-end'}}>
          <View style={{flex: 5, marginLeft: 17}}>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 18,
                fontWeight: '700',
                color: 'black',
                textAlign: 'left',
              }}>
              Transaction History
            </Text>
          </View>
          <View style={{flex: 5, marginRight: 17}}>
            <Text style={{textAlign: 'right', fontSize: 14, color: '#6379F4'}}>
              See All
            </Text>
          </View>
        </View>
        <View style={style.contentHistory}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            {/* picture */}
            <View>
              <SvgUri
                width="52"
                height="52"
                source={{
                  uri:
                    'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Samuel Suhi
              </Text>
              <Text>Transfer</Text>
            </View>
          </View>
          <View style={{flex: 5}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#1EC15F',
                textAlign: 'right',
              }}>
              +50.000
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
