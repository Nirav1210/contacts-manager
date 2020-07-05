import React from 'react'
import {Button, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import SectionListContacts from '../SectionListContacts'

export default function ContactListScreen({route, navigation}) {
    const { contacts } = route.params;
    return (
        <View style={styles.container}>
        <SectionListContacts
            contacts={contacts} 
            // onSelectContact={() => {}}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Constants.statusBarHeight,
    },
});