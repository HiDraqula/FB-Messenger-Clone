import * as firebase from 'firebase/app'

import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    // your Firebase credentials go here
    apiKey: "AIzaSyBKCesRU7L-GVsdA2Hxk9cPeKSN-KwgL-o",
    authDomain: "fb-m-clone.firebaseapp.com",
    databaseURL: "https://fb-m-clone.firebaseio.com",
    projectId: "fb-m-clone",
    storageBucket: "fb-m-clone.appspot.com",
    messagingSenderId: "40260128286",
    appId: "1:40260128286:web:333d7064891df2d006a80f",
    measurementId: "G-ML1JPZ6QJR"
})

const db = firebaseApp.firestore()

export default db