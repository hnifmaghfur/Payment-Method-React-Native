import React, {useState, Fragment} from 'react';
import {
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {Button, Text} from 'react-native-paper';
import MobileNav from '../../components/mobileNav';
import {useSelector} from 'react-redux';
import ArrowUpRed from '../../assets/icons/arrow-up-red.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import {IMAGE_URL} from '../../components/utils';
import SvgUri from 'react-native-svg-uri';

export default function TransactionHistory({navigation}) {
  const {data: dataUser} = useSelector((state) => state.Users);
  const {data} = useSelector((state) => state.HistoryAll);
  const {data: dataHistory} = useSelector((state) => state.History);
  console.log(dataHistory);
  console.log('dataHistory from transaction History');
  const {inWeek, inMonth, outWeek, outMonth} = data;
  const {idUser} = dataUser;
  const [onSwitch, setOnSwitch] = useState(true);

  const toDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const ListHistoryInWeek = ({item, index}) => {
    console.log(idUser);
    console.log('idUser listWeek');
    return (
      <>
        <View style={styles.dashboardPanelist}>
          <View style={styles.spaceBetween}>
            <View style={styles.profileStatus}>
              <Image
                style={{
                  width: 52,
                  height: 52,
                }}
                source={{
                  uri: `${IMAGE_URL}/${item.imgSender}`,
                }}
              />
              <View style={styles.profileNameNavbarSection}>
                <Text style={styles.profileName}>{item.sender}</Text>
                <Text style={styles.transactionStatus}>{item.status}</Text>
              </View>
            </View>

            <View>
              <Text style={styles.moneyPlus}>+ Rp.{item.amountTransfer}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };
  const ListHistoryOutWeek = ({item, index}) => {
    console.log(idUser);
    console.log('idUser listWeek');
    return (
      <>
        <View style={styles.dashboardPanelist}>
          <View style={styles.spaceBetween}>
            <View style={styles.profileStatus}>
              <Image
                style={{
                  width: 52,
                  height: 52,
                }}
                source={{
                  uri: `${IMAGE_URL}/${item.img}`,
                }}
              />
              <View style={styles.profileNameNavbarSection}>
                <Text style={styles.profileName}>{item.receiveBy}</Text>
                <Text style={styles.transactionStatus}>{item.status}</Text>
              </View>
            </View>

            <View>
              <Text style={styles.moneyMinus}>- Rp.{item.amountTransfer}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  const ListHistoryInMonth = ({item, index}) => {
    return (
      <>
        <View style={styles.dashboardPanelist}>
          <View style={styles.spaceBetween}>
            <View style={styles.profileStatus}>
              <Image
                style={{
                  width: 52,
                  height: 52,
                }}
                source={{
                  uri: `${IMAGE_URL}/${item.imgSender}`,
                }}
              />
              <View style={styles.profileNameNavbarSection}>
                <Text style={styles.profileName}>{item.sender}</Text>
                <Text style={styles.transactionStatus}>{item.status}</Text>
              </View>
            </View>

            <View>
              <Text style={styles.moneyPlus}>+ Rp.{item.amountTransfer}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };
  const ListHistoryOutMonth = ({item, index}) => {
    return (
      <>
        <View style={styles.dashboardPanelist}>
          <View style={styles.spaceBetween}>
            <View style={styles.profileStatus}>
              <Image
                style={{
                  width: 52,
                  height: 52,
                }}
                source={{
                  uri: `${IMAGE_URL}/${item.img}`,
                }}
              />
              <View style={styles.profileNameNavbarSection}>
                <Text style={styles.profileName}>{item.receiveBy}</Text>
                <Text style={styles.transactionStatus}>{item.status}</Text>
              </View>
            </View>

            <View>
              <Text style={styles.moneyMinus}>- Rp.{item.amountTransfer}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <View style={styles.bodyBackground}>
        <MobileNav thisnavigate={() => toDashboard()} pageTitle="History" />
        <ScrollView styles={styles.flexColumn}>
          <View style={styles.container}>
            <View style={styles.likeRowTwo}>
              <Text style={styles.paginationBorder}>This week</Text>
            </View>
          </View>
          <FlatList
            data={onSwitch ? inWeek : outWeek}
            renderItem={onSwitch ? ListHistoryInWeek : ListHistoryOutWeek}
          />
          <View style={styles.container}>
            <View style={styles.likeRowTwo}>
              <Text style={styles.paginationBorder}>This Month</Text>
            </View>
          </View>
          <FlatList
            data={onSwitch ? inMonth : outMonth}
            renderItem={onSwitch ? ListHistoryInMonth : ListHistoryOutMonth}
          />

          {/* button */}
          <View style={{marginBottom: 20}}>
            <View style={styles.likeRowTwo}>
              <View style={styles.likeRowSorting}>
                <TouchableOpacity
                  style={styles.sortingMoney}
                  onPress={() => setOnSwitch(false)}>
                  <ArrowUpRed width={40} height={40} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sortingMoney}
                  onPress={() => setOnSwitch(true)}>
                  <ArrowDown width={40} height={40} />
                </TouchableOpacity>
              </View>
              <View>
                <Button style={styles.filterByDateButton}>
                  <Text style={styles.FilterByDateText}>Filter By Date</Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
