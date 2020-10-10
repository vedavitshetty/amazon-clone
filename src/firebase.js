import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAnHWmp24FRFld44mGehynYawsuGFXATIs",
  authDomain: "clone-e9841.firebaseapp.com",
  databaseURL: "https://clone-e9841.firebaseio.com",
  projectId: "clone-e9841",
  storageBucket: "clone-e9841.appspot.com",
  messagingSenderId: "321645357944",
  appId: "1:321645357944:web:e81211da266ae3a42ab68d",
  measurementId: "G-N04VBF5G1Z"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };