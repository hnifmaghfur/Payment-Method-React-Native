import React, {useState, Fragment} from 'react';
import {View, ScrollView, ToastAndroid} from 'react-native';

import styles from './style.js';
import {Button, Text} from 'react-native-paper';
import MobileNav from '../../components/mobileNav';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useDispatch, useSelector} from 'react-redux';
import {CreateTransfer} from '../../redux/actions/Transfer.js';

const PinTransfer = ({navigation}) => {
  const [pincode, setPincode] = useState('');
  const {token} = useSelector((state) => state.Auth);
  const {data} = useSelector((state) => state.Transfer);
  const {balanceLeft, note, amountTransfer, pin, receiver, status} = data;
  // console.log(balanceLeft);
  // console.log('balance left');
  const dispatch = useDispatch();

  const toAmountBank = () => {
    navigation.navigate('AmountBank');
  };

  const onTransferStatus = () => {
    if (pincode == pin) {
      dispatch(
        CreateTransfer(token, {
          balanceLeft: balanceLeft,
          note: note,
          pin: pin,
          status: status,
          receiver: receiver,
          pin: pincode,
          amountTransfer: amountTransfer,
        }),
      );
      navigation.navigate('TransferStatus');
    } else {
      ToastAndroid.show('PIN is Wrong', 1000);
    }
  };

  return (
    <Fragment>
      <ScrollView style={styles.bodyBackground}>
        <MobileNav
          thisnavigate={() => toAmountBank()}
          pageTitle="Enter Your PIN"
        />

        <View style={styles.container}>
          <View styles={styles.flexColumn}>
            <View style={styles.positionCenter}>
              <Text style={styles.formDesc}>
                Enter your 6 digits PIN for confirmation to continue
                transferring money.
              </Text>

              <SmoothPinCodeInput
                codeLength={6}
                cellStyle={{
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: 'rgba(169, 169, 169, 0.6)',
                }}
                cellStyleFocused={{
                  borderColor: '#6379F4',
                }}
                value={pincode}
                onTextChange={(code) => setPincode(code)}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonPos}>
          <View style={styles.positionCenter}>
            <Button
              style={styles.buttonSubmitFilled}
              onPress={onTransferStatus}>
              <Text style={styles.textButtonLoginFilled}> Transfer Now</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default PinTransfer;
