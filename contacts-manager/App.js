import 'react-native-gesture-handler';
import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants'
import { Provider } from 'react-redux'
import store from './store/store'

import contacts, {compareNames} from './contacts'

import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'
import ContactDetailsScreen from './screens/ContactDetailsScreen'

const Stack = createStackNavigator();

export default class App extends React.Component {
  // state = {
  //   contacts: contacts,
  // }

  // saveContact = newContact => {
  //   this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}))
  // }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="ContactList" 
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen 
              name="AddContact"
              component={AddContactScreen}
              options={{ title: 'Add Contact' }}
            />
            {/* <Stack.Screen 
              name="EditContact"
              component={EditContactScreen}
              options={{ title: 'Edit Contact' }}
            /> */}
            <Stack.Screen 
              name="ContactList"
              component={ContactListScreen}
              options={({ navigation, route }) => ({
                title: 'Contacts',
                headerRight: () => (
                  <Button title="Add" onPress={() => navigation.navigate('AddContact')} />
                ),
              })}
            />
            <Stack.Screen
              name="ContactDetails"
              component={ContactDetailsScreen}
              options={({ navigation, route }) => ({
                title: 'Contact Details',
                headerRight: () => (
                  <Button title="Edit" onPress={() => navigation.navigate('EditContact')} />
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
