import React from 'react'
import { View, Button, Text } from 'react-native';

export default function ContactDetailsScreen({ route, navigation }) {
    const [contact, setContact] = React.useState('')

    React.useEffect(() => {
        if (route.params?.name && route.params?.phone) {
            const contact = { name: route.params.name, phone: route.params.phone };
            setContact(prevState => contact);
        }
    }, [route.params?.contact]);

    return (
        <View>
            <Text>{ contact.name }</Text>
            <Text>{ contact.phone }</Text>
            <Button title="GO TO" onPress={() => navigation.goBack()} />
        </View>
    );
}
