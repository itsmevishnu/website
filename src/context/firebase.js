import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var config = {
    apiKey : "AIzaSyDKB35oiZawkPbVJP10OYRnLEEKsXN3Jac",
    authDomain: "mywebsite-94a7b.firebaseapp.com",
    databaseURL: "https://mywebsite-94a7b-default-rtdb.firebaseio.com",
    projectId: "mywebsite-94a7b",
    storageBucket: "mywebsite-94a7b.appspot.com",
    messagingSenderId: "569921119533",
    appId: "1:569921119533:web:697559246aedf1f5199fa4",
    measurementId: "G-6V7LTENNR8"
};

const firebaseApp = firebase.initializeApp(config);
console.log(firebaseApp)
const path =  firebaseApp.database().ref();
console.log(path);
export default  firebaseApp.database().ref();