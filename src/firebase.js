import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9cwkyXleOoN0Nh3gKXkQx-zwmiTEK8YE",
  authDomain: "discord-yt-5e65f.firebaseapp.com",
  projectId: "discord-yt-5e65f",
  storageBucket: "discord-yt-5e65f.appspot.com",
  messagingSenderId: "815600298476",
  appId: "1:815600298476:web:dc7b89aaae1f0c4dd4f8c9",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
