import React from 'react'
import AddContactForm from '../AddContactForm'

export default function AddContactScreen({ route, navigation }) {
    const [contact, setContact] = React.useState('')
    return (
        <AddContactForm 
            onSubmit={(ct) => {
                navigation.navigate('ContactList', { contact: ct });
            }}
        />
    );
}
