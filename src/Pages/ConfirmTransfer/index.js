import React, {Fragment} from 'react';
import {View, ScrollView, Image} from 'react-native';

import styles from './style.js';
import {Button, Text} from 'react-native-paper';
import MobileNav from '../../components/mobileNav';
import {useSelector} from 'react-redux';

const ConfirmTransfer = ({navigation}) => {
  const {data: dataTrans} = useSelector((state) => state.Transfer);
  const {data: dataReceiver} = useSelector((state) => state.Receiver);
  const {balanceLeft, note, amountTransfer} = dataTrans;
  const {fullName, phoneNumber, img} = dataReceiver;
  const toAmountBank = () => {
    navigation.navigate('AmountBank');
  };

  const toPinTransfer = () => {
    navigation.navigate('PinTransfer');
  };

  return (
    <Fragment>
      <ScrollView style={styles.bodyBackground}>
        <MobileNav
          thisnavigate={() => toAmountBank()}
          pageTitle="Confirmation"
        />

        <View style={styles.container}>
          <View style={styles.likeRowTwo}>
            <Text style={styles.contact}>Transfer to</Text>
          </View>

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

          <View style={styles.likeRowTwo}>
            <Text style={styles.contact}>Details</Text>
          </View>

          <View styles={styles.flexColumn}>
            <View style={styles.dashboardPanelist}>
              <View style={styles.spaceBetween}>
                <View style={styles.profileStatus}>
                  <View style={styles.profileNameNavbarSection}>
                    <Text style={styles.transactionStatus}>Amount</Text>
                    <Text style={styles.textPanelConfirm}>
                      Rp. {amountTransfer}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.dashboardPanelist}>
              <View style={styles.spaceBetween}>
                <View style={styles.profileStatus}>
                  <View style={styles.profileNameNavbarSection}>
                    <Text style={styles.transactionStatus}>Balance Left</Text>
                    <Text style={styles.textPanelConfirm}>
                      Rp. {balanceLeft}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.dashboardPanelist}>
              <View style={styles.spaceBetween}>
                <View style={styles.profileStatus}>
                  <View style={styles.profileNameNavbarSection}>
                    <Text style={styles.transactionStatus}>Date & Time</Text>
                    <Text style={styles.textPanelConfirm}>
                      May 11, 2020 - 12.20
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.dashboardPanelist}>
              <View style={styles.spaceBetween}>
                <View style={styles.profileStatus}>
                  <View style={styles.profileNameNavbarSection}>
                    <Text style={styles.transactionStatus}>Notes</Text>
                    <Text style={styles.textPanelConfirm}>{note}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.positionCenter}>
              <Button
                style={styles.buttonSubmitFilled}
                onPress={() => toPinTransfer()}>
                <Text style={styles.textButtonLoginFilled}> Continue</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default ConfirmTransfer;
