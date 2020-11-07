import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';

import styles from './mobilenavbar.style.js';
import {Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

const MobileNav = (props) => {
  const {thisnavigate, pageTitle} = props;

  return (
    <View style={styles.navbarBackground}>
      <View style={styles.spaceBetween}>
        <View style={styles.profileSection}>
          <TouchableNativeFeedback onPress={thisnavigate}>
            <Icon name="arrow-left" size={30} color={'#4D4B57'} />
          </TouchableNativeFeedback>
          <View style={styles.profileNameNavbarSection}>
            <Text style={styles.profileNameNavbar}>{pageTitle}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MobileNav;
