
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZPkpUvUlr0gcVXCQ7tOwCPSXUzTKHeqk",
  authDomain: "waapi-backend.firebaseapp.com",
  projectId: "waapi-backend",
  storageBucket: "waapi-backend.appspot.com",
  messagingSenderId: "386423542635",
  appId: "1:386423542635:web:55a629eafd24312b3bf22e"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };