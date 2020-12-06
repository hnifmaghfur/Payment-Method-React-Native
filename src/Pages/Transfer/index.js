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
import MobileNav from '../../components/mobileNav';
import SearchIcon from '../../assets/icons/search.svg';
import {IMAGE_URL} from '../../components/utils';

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
                uri: `${IMAGE_URL}/${item.img}`,
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
      <MobileNav
        thisnavigate={() => navigation.navigate('Dashboard')}
        pageTitle="Find Receiver"
      />
      <View style={style.searchInput}>
        <SearchIcon width={20} height={20} style={{left: 10}} />
        <TextInput
          placeholder="Search receiver here"
          style={{paddingLeft: 15}}
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
            <Image
              style={{
                width: 52,
                height: 52,
              }}
              source={{
                uri: `https://images.unsplash.com/photo-1531804055935-76f44d7c3621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8M3x8fHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080`,
              }}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Arung</Text>
            <Text style={{fontSize: 13}}>-2232</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.quickAccess}
          onPress={() => navigation.navigate('AmountBank')}>
          <View style={{borderRadius: 5, elevation: 1, padding: 5}}>
            <Image
              style={{
                width: 52,
                height: 52,
              }}
              source={{
                uri: `https://i.ibb.co/Zm51bxF/img1.png`,
              }}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Ucup</Text>
            <Text style={{fontSize: 13}}>-4818</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.quickAccess}
          onPress={() => navigation.navigate('AmountBank')}>
          <View style={{borderRadius: 5, elevation: 1, padding: 5}}>
            <Image
              style={{
                width: 52,
                height: 52,
              }}
              source={{
                uri: `https://www.microsoft.com/en-us/research/uploads/prod/2018/08/Bewerbungsfoto_sebastian.jpg`,
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
          <Text style={{textAlign: 'center'}}>This Is Last Page...</Text>
        )}
      </ScrollView>
    </View>
  );
}
