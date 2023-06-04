import React, { useState, useEffect } from 'react';
import { StatusBar, View, TextInput, ScrollView, Modal } from 'react-native';
import * as Contacts from 'expo-contacts';
import ContactList from './components/ContactList';
import ContactPopup from './components/ContactPopup';
import { styles } from './components/style';

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
        <ContactList
          contacts={filteredContacts}
          handleContactPress={handleContactPress}
        />
      </ScrollView>

      {selectedContact && (
        <Modal animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <ContactPopup
              contact={selectedContact}
              handleDismissPopup={handleDismissPopup}
            />
          </View>
        </Modal>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
