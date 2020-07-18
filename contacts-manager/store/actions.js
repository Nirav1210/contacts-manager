export const ADD_CONTACT = "ADD_CONTACT";
export const UPDATE_CONTACT = "LOGIN_USER";

export const addContact = contact => ({
    type: ADD_CONTACT, 
    payload: contact
});
  
export const updateContact = contact => ({
    type: UPDATE_CONTACT,
    payload: contact
});
