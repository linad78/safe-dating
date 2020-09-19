import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWbZXDA-NC5dwaaalduxmVOFG1j-PDYdo",
    authDomain: "safe-dating-7da1a.firebaseapp.com",
    databaseURL: "https://safe-dating-7da1a.firebaseio.com",
    projectId: "safe-dating-7da1a",
    storageBucket: "safe-dating-7da1a.appspot.com",
    messagingSenderId: "507194061245",
    appId: "1:507194061245:web:5cb0e8ff12b154af4be2d4",
    measurementId: "G-RB6E0CH7GW"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;