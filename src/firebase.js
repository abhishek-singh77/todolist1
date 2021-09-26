import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBAZcMyGP1ryffbzjimy48aD3RWk6icK2Y",

  authDomain: "todolist-95326.firebaseapp.com",

  projectId: "todolist-95326",

  storageBucket: "todolist-95326.appspot.com",

  messagingSenderId: "238701768302",

  appId: "1:238701768302:web:0abad42ca233459007407f",

});


export {firebaseConfig as firebase};
