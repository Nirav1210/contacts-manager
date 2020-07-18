import React from 'react'
import {Button, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { connect } from 'react-redux'

// import contactsList, {compareNames} from '../contacts'
import SectionListContacts from '../SectionListContacts'

function ContactListScreen({route, navigation}) {
    const [contacts, setContacts] = React.useState([])

    React.useEffect(() => {
        if (route.params?.contact) {
            const { contact } = route.params;
            setContacts(prevState => {
                if (Object.keys(prevState).length === 0) return [contact];
                return [...prevState, contact]
            });
        }
    }, [route.params?.contact]);

    return (
        <View style={styles.container}>
        <SectionListContacts
            contacts={contacts} 
            onSelectContact={(contact) => navigation.push('ContactDetails', contact)}
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

const mapStateToProps = state => ({
    contacts: state.contacts,
})
  
export default connect(mapStateToProps)(ContactListScreen)