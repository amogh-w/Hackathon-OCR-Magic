import * as firebase from "firebase/app";
import "firebase/auth";

const fire_app = firebase.initializeApp({
  apiKey: "AIzaSyCCkRrHPosyM5VAJJyPDmIsMaT-YaAMuTc",
  authDomain: "digital-wellbeing-ccb79.firebaseapp.com",
  databaseURL: "https://digital-wellbeing-ccb79.firebaseio.com",
  projectId: "digital-wellbeing-ccb79",
  storageBucket: "digital-wellbeing-ccb79.appspot.com",
  messagingSenderId: "108958354834",
  appId: "1:108958354834:web:ee6faeeebf56ce38"
});

export default fire_app;
