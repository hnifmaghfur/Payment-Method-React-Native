import React from 'react';
import style from './style';
import {View, Text, TextInput, Image} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {GetSearch} from '../../redux/actions/Search';
import {GetReceiver} from '../../redux/actions/Receiver';

export default function Transfer({navigation}) {
  const {token} = useSelector((state) => state.Auth);
  const {dataSearch: data} = useSelector((state) => state.Search);
  const [search, setSearch] = React.useState('');
  const [limit, setLimit] = React.useState(5);
  console.log(data);
  console.log('ini search');
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetSearch(token, search, limit));
  }, [search, limit]);

  const loadMore = () => {
    setLimit(100);
  };

  // const OnDataAmount = (id) => {
  //   // dispatch(GetReceiver(token, id));
  //   console.log(id);
  //   // console.log('id receiver amount');
  //   // navigation.navigate('AmountBank');
  // };

  const ListSearch = ({item, index}) => {
    return (
      <View style={style.contentSearch}>
        <TouchableOpacity
          style={{flexDirection: 'row', padding: 1}}
          onPress={() => {
            dispatch(GetReceiver(token, item.id));
            navigation.navigate('AmountBank');
          }}>
          {/* picture */}
          <View style={{borderRadius: 5, elevation: 1, padding: 5}}>
            <Image
              style={{
                width: 47,
                height: 47,
              }}
              source={{
                uri: item.img,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 15,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {item.fullName}
            </Text>
            <Text>{item.phoneNumber}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
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
        <Text>{data.length}</Text> Contact Founds
      </Text>
      <ScrollView style={{marginTop: 5, marginBottom: 5}}>
        <FlatList
          data={data}
          renderItem={ListSearch}
          style={{marginBottom: 10}}
        />
        {limit == 5 ? (
          <TouchableOpacity style={style.button}>
            <Text
              style={{color: '#6379F4', fontSize: 16, fontWeight: 'bold'}}
              onPress={loadMore}>
              Load More
            </Text>
          </TouchableOpacity>
        ) : (
          <Text>This Is Last Page...</Text>
        )}
      </ScrollView>
    </View>
  );
}
