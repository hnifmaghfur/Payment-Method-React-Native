import React, {useState} from 'react';
import {View, ScrollView, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import MobileNav from '../../components/mobileNav';
import ArrowUpRed from '../../assets/icons/arrow-up-red.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import {useDispatch, useSelector} from 'react-redux';
import {GetHistory} from '../../redux/actions/History';

const Notification = ({navigation}) => {
  const {data} = useSelector((state) => state.History);
  const {data: dataUser} = useSelector((state) => state.Users);
  const {token} = useSelector((state) => state.Auth);
  const {id: idUser} = dataUser;
  const dispatch = useDispatch();
  // const {inWeek} = data;
  console.log(data);
  console.log('inWeek notif');
  const [limit, setLimit] = useState(5);
  const toDashboard = () => {
    dispatch(GetHistory(token, 5));
    navigation.navigate('Dashboard');
  };

  React.useEffect(() => {
    dispatch(GetHistory(token, limit));

    // socket.emit('initial-data', idUser);
    // socket.once('get-data', (dataBalance) => {
    //   setBalance(dataBalance);
    // });
  }, [limit]);

  const ListNotification = ({item, index}) => {
    return (
      <View style={styles.dashboardPanelist}>
        <View style={styles.spaceBetween}>
          <View style={styles.profileStatus}>
            <View>
              {idUser == item.receiver ? (
                <ArrowDown width={40} height={40} />
              ) : (
                <ArrowUpRed width={40} height={40} />
              )}

              {/* <Icon name="arrow-down" size={30} color={'#4CEDB3'} /> */}
            </View>

            <View style={styles.profileNameNavbarSection}>
              <Text style={styles.vcAccount}>
                Transfered {idUser == item.receiver ? 'from' : 'to'}{' '}
                {idUser == item.receiver ? item.sender : item.receiveBy}
              </Text>
              <Text style={styles.vcNumber}>Rp. {item.amountTransfer}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const loadMore = () => {
    setLimit(100);
  };

  return (
    <ScrollView style={styles.container}>
      <MobileNav thisnavigate={() => toDashboard()} pageTitle="Notification" />
      <View style={styles.containers}>
        <FlatList data={data} renderItem={ListNotification} />
      </View>
      {limit == 5 ? (
        <TouchableOpacity style={styles.button}>
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
  );
};

export default Notification;
