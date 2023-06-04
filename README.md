# Contacts Mobile App
- This is a  "Contacts" mobile app developed using React Native. The app allows users to view contacts from their phone, search for contacts by name, and view contact details in a popup.

## Features
- Display contacts from the user's phone, including their name and phone number.
- Implement a search functionality to filter contacts based on the entered name.
- Show contact details in a dismissable popup when a contact is clicked.

## Installation
- Clone the repository from GitHub:
- ` git clone https://github.com/niteshsinwar/React-native-app.git `
- Install the required dependencies by running the following command in the project directory:
- `npm install`
- Install the Expo CLI globally:
- `npm install -g expo-cli`
- Run the app locally by running the following command in the project directory:
- `npm start`
- This will start the Metro bundler and display a QR code in the terminal.
- Use the Expo Go app on your mobile device to scan the QR code and launch the app.
## Libraries and Plugins Used
- React Native: A JavaScript framework for building mobile apps.
- expo-contacts: A package for accessing and retrieving contacts from the user's phone.
## Building APK
#### To generate an APK file for Android, follow these steps:

- Install the EAS CLI globally by running the following command:
- `npm install -g eas-cli`
- Configure and log in to EAS by running:
``` eas login
eas build:configure
```
Make changes to the eas.json file to configure the build settings.
``
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  }
}

``
- Run the following command to build the APK file:
- `eas build -p android --profile preview`
- Monitor the build progress and wait for it to complete. Once done, you will receive an email with a link to download the APK file.
## Repository Contents
- src/App.js: The main component of the app that implements the contacts functionality.
- src/components/ContactList.js: A component that renders the list of contacts.
- src/components/ContactPopup.js: A component that displays the details of a selected contact in a popup.
- src/components/style.js: The stylesheet for styling the app components.


