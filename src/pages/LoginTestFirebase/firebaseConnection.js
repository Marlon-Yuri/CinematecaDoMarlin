import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCPfBrbwg7u25635DAv7TaWMK4SLLcUQQo",
    authDomain: "cinemateca-login.firebaseapp.com",
    projectId: "cinemateca-login",
    storageBucket: "cinemateca-login.appspot.com",
    messagingSenderId: "363356210158",
    appId: "1:363356210158:web:f74d385ad76bdc38dd44ff",
    measurementId: "G-5C9J4VMXTF"
  };


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

  // Initialize Firebase
export default firebase