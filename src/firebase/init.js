import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDKY6l4uzqqsAPaFB-lMO5yVlJxgistrMU",
  authDomain: "versa-chat.firebaseapp.com",
  databaseURL: "https://versa-chat.firebaseio.com",
  projectId: "versa-chat",
  storageBucket: "versa-chat.appspot.com",
  messagingSenderId: "943284659617",
  appId: "1:943284659617:web:ff6464d6c786323c"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore()
