import React from 'react';
import style from './style';
import {View, Text} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

export default function Topup({navigation}) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
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
          <Text style={style.titleHeader}>Top Up</Text>
        </View>
        <View style={style.midTrans}>
          <View
            style={{
              borderRadius: 5,
              elevation: 1,
              padding: 5,
              backgroundColor: '#E5E5E5',
            }}>
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
              marginLeft: 15,
            }}>
            <Text style={{fontSize: 14}}>Virtual Account Number</Text>
            <Text style={{fontSize: 16, fontWeight: '700'}}>
              2389 081393877946
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Text style={{fontSize: 16}}>
            We provide your virtual account number for top
          </Text>
          <Text style={{fontSize: 16}}>up via nearest ATM.</Text>
        </View>
        <Text
          style={{margin: 18, marginTop: 20, fontSize: 18, fontWeight: '700'}}>
          How to Top-Up
        </Text>
        <View style={style.contentTopup}>
          <View style={{flex: 5, flexDirection: 'row', alignItems: 'center'}}>
            {/* picture */}
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#6379F4'}}>
              1
            </Text>
            <Text style={{fontSize: 14, marginHorizontal: 15}}>
              Go to the nearest ATM or you can use E-Banking.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
