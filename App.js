import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [contactsData, setContactsData] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        setContactsData(data);
      }
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleContactPress = (contact) => {
    setSelectedContact(contact);
  };

  const handleDismissPopup = () => {
    setSelectedContact(null);
  };

  const filteredContacts = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={handleSearch}
      />

      <ScrollView style={styles.contactsList}>
        {filteredContacts.map((contact, index) => (
          <TouchableOpacity key={index} onPress={() => handleContactPress(contact)}>
            <Text>{contact.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedContact && (
        <Modal animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.popup}>
              <Text style={styles.contactName}>{selectedContact.name}</Text>
              <Text style={styles.contactNumber}>{selectedContact.phoneNumbers[0]?.number}</Text>
              <TouchableOpacity style={styles.dismissButton} onPress={handleDismissPopup}>
                <Text style={styles.dismissButtonText}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  contactsList: {
    flex: 1,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactNumber: {
    fontSize: 16,
    marginBottom: 20,
  },
  dismissButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  dismissButtonText: {
    fontSize: 16,
    color: 'white',
  },
});
