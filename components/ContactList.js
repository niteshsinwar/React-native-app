import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ContactList = ({ contacts, handleContactPress }) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <TouchableOpacity key={index} onPress={() => handleContactPress(contact)}>
          <Text>{contact.name}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default ContactList;
