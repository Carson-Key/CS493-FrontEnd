import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB3s_jxcFlGXgpH476T7h2bX7U4VU2Ttno",
  authDomain: "cs-493-hw1.firebaseapp.com",
  projectId: "cs-493-hw1",
  storageBucket: "cs-493-hw1.appspot.com",
  messagingSenderId: "424406902004",
  appId: "1:424406902004:web:a15614c866e65e1c7e2aa1"
};
firebase.initializeApp(config);

export default firebase;
