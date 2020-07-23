import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCc4zNa6K3HDCNbXpgpzQ68Ttn9boulxrA",
  authDomain: "clone-7c2a9.firebaseapp.com",
  databaseURL: "https://clone-7c2a9.firebaseio.com",
  projectId: "clone-7c2a9",
  storageBucket: "clone-7c2a9.appspot.com",
  messagingSenderId: "862549379645",
  appId: "1:862549379645:web:f4d13327106601195f3854",
  measurementId: "G-HWTGRN5WXR"
});

const auth = firebase.auth();

export { auth };
