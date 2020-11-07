import React from 'react';
import style from './style';
import {View, Text, TextInput} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Transfer({navigation}) {
  const [search, setSearch] = React.useState('');
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
        <Text style={style.titleHeader}>Find Receiver</Text>
      </View>
      <View style={style.searchInput}>
        <Text style={{paddingHorizontal: 10}}>icon</Text>
        <TextInput
          placeholder="Search receiver here "
          value={search}
          onChangeText={(e) => setSearch(e)}
        />
      </View>
      <Text style={{fontSize: 18, margin: 14, marginBottom: 0}}>
        Quick Access
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {/* ini isi quick access */}
        <TouchableOpacity
          style={style.quickAccess}
          onPress={() => navigation.navigate('AmountBank')}>
          <View style={{borderRadius: 5, elevation: 1, padding: 5}}>
            <SvgUri
              width="52"
              height="52"
              source={{
                uri:
                  'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg',
              }}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Michi</Text>
            <Text style={{fontSize: 13}}>-9994</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 18, marginHorizontal: 14, marginTop: 25}}>
        All Contacts
      </Text>
      <Text style={{fontSize: 14, marginHorizontal: 14, marginVertical: 5}}>
        <Text>17</Text> Contact Founds
      </Text>
      <View style={style.contentSearch}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate('AmountBank')}>
          {/* picture */}
          <View style={{borderRadius: 5, elevation: 1, padding: 5}}>
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
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Samuel Suhi</Text>
            <Text>+62 813-8492-9994</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
