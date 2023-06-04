import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
