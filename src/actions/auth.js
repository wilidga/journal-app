import { auth } from 'firebase';
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig'
import { types } from "../types/types";


export const startGoogleLogin = () =>{
  return (dispatch) => {

    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(userCred =>{
      console.log(userCred)
    })

  }
}


export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
