import React, {useEffect, useState} from 'react';
import style from './style';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import SvgUri from 'react-native-svg-uri';
import {useDispatch, useSelector} from 'react-redux';
import {GetSearch} from '../../redux/actions/Search';
import {GetUsers} from '../../redux/actions/Users';
import {IMAGE_URL} from '../../components/utils';
import {io} from 'socket.io-client';
import Bell from '../../assets/icons/bell.svg';
import ArrowUp from '../../assets/icons/arrow-up.svg';
import Plus from '../../assets/icons/plus.svg';
import {GetHistory} from '../../redux/actions/History';
import {GetHistoryAll} from '../../redux/actions/HistoryAll';

export default function Dashboard({navigation}) {
  const socket = io(IMAGE_URL);
  const {data} = useSelector((state) => state.Users);
  const {data: dataHistory} = useSelector((state) => state.History);
  const {token} = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const {fullName, img, phoneNumber, id: idUser, balance} = data;
  const [limit, setLimit] = useState(5);
  // console.log(id, 'ini dashboard');
  const onTransfer = () => {
    console.log('ini saat search');
    dispatch(GetSearch(token, '', 5));
    navigation.navigate('Transfer');
  };

  // socket.emit('initial-data', idUser);
  // socket.on('get-data', (dataBalance) => {
  //   setBalance(dataBalance);
  //   // dispatch(GetHistory(token, 5));
  // });

  useEffect(() => {
    dispatch(GetHistory(token, limit));
    dispatch(GetUsers(token));
    // socket.emit('initial-data', idUser);
    // socket.once('get-data', (dataBalance) => {
    //   setBalance(dataBalance);
    // });
  }, [limit]);

  // useEffect(() => {
  //   // dispatch(GetHistory(token, limit));
  // }, []);

  const ListHistory = ({item, index}) => {
    // console.log(idUser);
    // console.log('idUser dashboard');
    return (
      <>
        <View style={style.contentHistory}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            {/* picture */}
            <View>
              <Image
                style={{
                  width: 52,
                  height: 52,
                }}
                source={{
                  uri: `${IMAGE_URL}/${
                    idUser == item.receiver ? item.imgSender : item.img
                  }`,
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
                {idUser == item.receiver ? item.sender : item.receiveBy}
              </Text>
              <Text>{item.status}</Text>
            </View>
          </View>
          <View style={{flex: 5}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: `#${idUser == item.receiver ? '1EC15F' : 'FF5B37'}`,
                textAlign: 'right',
              }}>
              {idUser == item.receiver ? '+' : '-'} {item.amountTransfer}
            </Text>
          </View>
        </View>
      </>
    );
  };

  const onNotification = () => {
    dispatch(GetHistory(token, 5));
    dispatch(GetHistoryAll(token, 100));
    navigation.navigate('Notification');
  };

  const loadMore = () => {
    setLimit(10);
  };

  const onTransactionHistory = () => {
    dispatch(GetHistoryAll(token, 100));
    navigation.navigate('TransactionHistory');
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
          <View style={{flex: 8, flexDirection: 'column'}}>
            <Text onPress={() => navigation.navigate('Profile')}>Hallo</Text>
            <Text
              style={style.name}
              onPress={() => navigation.navigate('Profile')}>
              {fullName}
            </Text>
          </View>
          <TouchableOpacity
            style={{paddingRight: 27, marginVertical: 20}}
            onPress={onNotification}>
            <Bell width={23} height={23} />
          </TouchableOpacity>
        </View>
        {/* end Navbar */}

        {/* balance menu */}
        <View style={style.boxBalance}>
          <Text style={{fontSize: 14, color: 'white'}}>Balance</Text>
          <Text style={style.balanceNumber}>Rp. {balance}</Text>
          <Text style={{color: 'white', fontSize: 14}}>+{phoneNumber}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View
            style={{
              flex: 5,
              backgroundColor: '#E5E8ED',
              padding: 10,
              borderRadius: 5,
              marginHorizontal: 20,
              marginLeft: 15,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={(style.button, {flexDirection: 'row'})}
              onPress={onTransfer}>
              <ArrowUp width={20} height={20} />
              <Text> Transfer</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 5,
              backgroundColor: '#E5E8ED',
              padding: 10,
              borderRadius: 5,
              marginHorizontal: 20,
              marginLeft: 15,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={(style.button, {flexDirection: 'row'})}
              onPress={() => navigation.navigate('Topup')}>
              <Plus width={20} height={20} />
              <Text> Top Up</Text>
            </TouchableOpacity>
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
            <Text
              style={{textAlign: 'right', fontSize: 14, color: '#6379F4'}}
              onPress={onTransactionHistory}>
              See All
            </Text>
          </View>
        </View>
        <FlatList
          data={dataHistory}
          renderItem={ListHistory}
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
          <Text style={{textAlign: 'center', marginBottom: 10}}>
            This Is Last Page...
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
