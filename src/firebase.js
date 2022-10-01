import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDwL_kfxlE22tCuE74KT7q2tl27R-XU_Oc",
    authDomain: "todo-app-cp-91e49.firebaseapp.com",
    projectId: "todo-app-cp-91e49",
    storageBucket: "todo-app-cp-91e49.appspot.com",
    messagingSenderId: "1073853054869",
    appId: "1:1073853054869:web:9c18bb01b280c39d2b409c",
    measurementId: "G-BQTRV5ET2Y"

  });

  const db = firebaseApp.firestore();

  export default db;