import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const ContactPopup = ({ contact, handleDismissPopup }) => {
  return (
    <View style={styles.popup}>
      <Text style={styles.contactName}>{contact.name}</Text>
      <Text style={styles.contactNumber}>{contact.phoneNumbers[0]?.number}</Text>
      <TouchableOpacity style={styles.dismissButton} onPress={handleDismissPopup}>
        <Text style={styles.dismissButtonText}>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactPopup;
