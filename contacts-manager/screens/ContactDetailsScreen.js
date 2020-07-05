import React from 'react'
import { View, Button, Text } from 'react-native';

export default class ContactDetailsScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Add Contact',
    }

    render() {
        return (
            <View>
                <Text>Phone #</Text>
                <Button title="GO TO" onPress={() => navigation.goBack()} />
            </View>
        );
    }
}
