import React from 'react'
import AddContactForm from '../AddContactForm'
import { connect } from 'react-redux'

import { addContact } from '../store/actions'

function AddContactScreen({ route, navigation }) {
    const [contact, setContact] = React.useState('')
    return (
        <AddContactForm 
            onSubmit={(ct) => {
                addContact({name: ct.name, phone: ct.phone})
                navigation.navigate('ContactList', { contact: ct });
            }}
        />
    );
}

export default connect(null, {addContact: addContact})(AddContactScreen)