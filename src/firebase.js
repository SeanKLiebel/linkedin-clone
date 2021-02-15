import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAJugil3o-QIWPoIp-azXifVmQEKKOE3ks",
    authDomain: "linkedin-clone-2c74f.firebaseapp.com",
    projectId: "linkedin-clone-2c74f",
    storageBucket: "linkedin-clone-2c74f.appspot.com",
    messagingSenderId: "926314861052",
    appId: "1:926314861052:web:addda0dc286d05eb79a279"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  
