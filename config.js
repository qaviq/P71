import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAljBwMofH7Hrg_6aIEkFJPy4SoRDEKfzw",
    authDomain: "p-71-d0f04.firebaseapp.com",
    projectId: "p-71-d0f04",
    storageBucket: "p-71-d0f04.appspot.com",
    messagingSenderId: "490943216851",
    appId: "1:490943216851:web:61a36fb0b705991ac9a826"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
