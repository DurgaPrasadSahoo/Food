import firebase, { initializeApp } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQbUenOTYAEMYmWC4PS5CUH7vNkUtiHp4",
    authDomain: "foodfindo-4e450.firebaseapp.com",
    databaseURL: "https://foodfindo-4e450.firebaseapp.com",
    projectId: "foodfindo-4e450",
    storageBucket: "foodfindo-4e450.appspot.com",
    messagingSenderId: "857819573170",
    appId: "1:857819573170:android:ad1cd79aa21001e83252ab",
   // measurementId: "G-QZ6758T9NE"
  };

  const App = firebase.initializeApp(firebaseConfig)
  export default App;