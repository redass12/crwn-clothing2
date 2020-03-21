import firebase from 'firebase/app';


import 'firebase/firestore';

import 'firebase/auth';


const config = {
  apiKey: "AIzaSyC1k8YZfofzX_dlcVOdUiM97Ul3cX5-J9M",
  authDomain: "crwn-db-58d34.firebaseapp.com",
  databaseURL: "https://crwn-db-58d34.firebaseio.com",
  projectId: "crwn-db-58d34",
  storageBucket: "crwn-db-58d34.appspot.com",
  messagingSenderId: "273652177283",
  appId: "1:273652177283:web:87881c301f2e9be882beb6",
  measurementId: "G-ZXNWB9R7E3"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});

  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;