import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyArFoX_mOUadcHAsLBPq2kGn47B923Osds",
  authDomain: "placesca.firebaseapp.com",
  databaseURL: "https://placesca.firebaseio.com",
  projectId: "placesca",
  storageBucket: "placesca.appspot.com",
  messagingSenderId: "398695723417",
  appId: "1:398695723417:web:183e5256605d49a162a308",
  measurementId: "G-9VPNSESSZ5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}
