import React, {useState, Fragment, useEffect} from 'react';
import {View, ScrollView, Image, TextInput, ToastAndroid} from 'react-native';

import styles from './style.js';
import {Button, Text} from 'react-native-paper';
import MobileNav from '../../components/mobileNav';
import {useDispatch, useSelector} from 'react-redux';
import {PreCreateTransfer} from '../../redux/actions/Transfer';

const AmountBank = ({navigation}) => {
  // const {token} = useSelector((state) => state.Auth);
  const [notes, setNotes] = useState('');
  const [amount, setAmount] = useState(0);
  const {data} = useSelector((state) => state.Receiver);
  const {data: dataUser} = useSelector((state) => state.Users);
  const {fullName, img, phoneNumber, id, pin} = data;
  const {balance} = dataUser;
  const dispatch = useDispatch();
  console.log(data);
  console.log('receiver amount');

  // useEffect(() => {
  //   dispatch(GetReceiver(token, {id: receiverId}));
  // }, []);

  const toSearchTransfer = () => {
    navigation.navigate('Transfer');
  };

  const toConfirmation = () => {
    const balanceLeft = balance - amount;
    if (amount <= 0) {
      return ToastAndroid.show('Please fill Amount.', 1000);
    } else if (parseInt(balance) - amount <= 0) {
      return ToastAndroid.show("You don't have enough money to transfer", 1000);
    } else {
      // alert(
      //   `total balanceLeft = ${balanceLeft}, tipe data balance = ${typeof balance}, total balance = ${balance}, total amount = ${amount}`,
      // );
      dispatch(
        PreCreateTransfer({
          balanceLeft: balanceLeft,
          note: notes,
          amountTransfer: amount,
          receiver: id,
          status: 'Transfer',
          pin: pin,
        }),
      );
      navigation.navigate('ConfirmTransfer');
    }
  };

  return (
    <Fragment>
      <ScrollView style={styles.bodyBackground}>
        <MobileNav
          thisnavigate={() => toSearchTransfer()}
          pageTitle="Transfer"
        />
        <View style={styles.container}>
          <View styles={styles.flexColumn}>
            <View style={styles.dashboardPanelist}>
              <View style={styles.spaceBetween}>
                <View style={styles.profileStatus}>
                  <Image
                    source={{
                      uri:
                        'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
                    }}
                    style={{width: 65, height: 65, borderRadius: 12}}
                  />
                  <View style={styles.profileNameNavbarSection}>
                    <Text style={styles.profileName}>{fullName}</Text>
                    <Text style={styles.transactionStatus}>+{phoneNumber}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.positionCenter}>
            <View>
              <Text style={styles.moneyAvailable}>
                Rp.{' '}
                {parseInt(balance) - amount <= 0
                  ? 0
                  : parseInt(balance) - parseInt(amount)}{' '}
                Available
              </Text>
            </View>

            <View>
              <TextInput
                style={styles.AmountInput}
                placeholder="0.00"
                value={amount}
                onChangeText={(e) => (e == '' ? setAmount(0) : setAmount(e))}
                keyboardType="numeric"
              />
            </View>

            <View>
              <View>
                <TextInput
                  style={
                    notes != ''
                      ? styles.formInputEmailFilled
                      : styles.formInputEmail
                  }
                  placeholder="Add some notes"
                  autoCapitalize={'none'}
                  value={notes}
                  onChangeText={(text) => setNotes(text)}
                  onSubmitEditing={() => toConfirmation()}
                  returnKeyType="next"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default AmountBank;
