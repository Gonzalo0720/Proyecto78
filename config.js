import firebase from "firebase";
require("@firebase/firestore");

//Pega tu configuración de firebase aquí

const firebaseConfig = {
  apiKey: "AIzaSyBkHw4HCLlkbXsmwa89XP_Ftj-m-dGF1lQ",
  authDomain: "proyecto-78.firebaseapp.com",
  projectId: "proyecto-78",
  storageBucket: "proyecto-78.appspot.com",
  messagingSenderId: "128965711356",
  appId: "1:128965711356:web:e3552146a0e34d4e568e79"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


