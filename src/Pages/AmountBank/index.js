import React, {useState, Fragment} from 'react';
import {View, ScrollView, Image, TextInput} from 'react-native';

import styles from './style.js';
import {Button, Text} from 'react-native-paper';
import MobileNav from '../../components/mobileNav';

const AmountBank = ({navigation}) => {
  const [notes, setNotes] = useState('');

  const toSearchTransfer = () => {
    navigation.navigate('Transfer');
  };

  const toConfirmation = () => {
    navigation.navigate('ConfirmTransfer');
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
                    <Text style={styles.profileName}>Samuel Suhi</Text>
                    <Text style={styles.transactionStatus}>
                      +62 813-8492-9994
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.positionCenter}>
            <View>
              <Text style={styles.moneyAvailable}>Rp120.000 Available</Text>
            </View>

            <View>
              <TextInput style={styles.AmounInput} placeholder="0.00" />
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
