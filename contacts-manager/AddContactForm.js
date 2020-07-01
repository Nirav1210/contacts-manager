import React from 'react'
import {Button, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native'
import Constants from 'expo-constants'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    firstName: '',
    lastName: '',
    phone: '',
    isFormValid: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
      this.validateForm()
    }
  }

  onNameChange = key => val => {
    this.setState({[key]: val});
    this.setState((state) => ({
      name: state.firstName + ' ' + state.lastName
    }))
  }

  handlePhoneChange = phone => {
    if(+phone >= 0 && phone.length <= 10) {
      this.setState({phone})
    }
  }

  validateForm = () => {
    const validPhone = +this.state.phone >= 0 && this.state.phone.length === 10
    const validName = this.state.firstName.length > 0 && this.state.lastName.length > 0
    if (validPhone && validName) {
      this.setState({isFormValid: true})
    } else {
      this.setState({isFormValid: false})
    }
  }

  handleOnSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.firstName}
          onChangeText={this.onNameChange('firstName')}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          value={this.state.lastName}
          onChangeText={this.onNameChange('lastName')}
          placeholder="Last Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <Button title="Submit" onPress={this.handleOnSubmit} disabled={!this.state.isFormValid} />
      </KeyboardAvoidingView>
    )
  }
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func
}
