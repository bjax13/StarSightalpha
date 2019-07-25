import firebase from 'firebase'
import keys from './keys'


var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: keys.firebase,
    authDomain: "bjaxproj.firebaseapp.com",
    databaseURL: "https://bjaxproj.firebaseio.com",
    projectId: "bjaxproj",
    storageBucket: "",
    messagingSenderId: "60859259588",
    appId: "1:60859259588:web:5ae2951b2ec8d294",
};
var fire = firebase.initializeApp(config);
export default fire;