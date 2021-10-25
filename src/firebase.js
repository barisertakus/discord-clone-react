import firebase from "firebase/compat"

const firebaseConfig = {
  apiKey: "AIzaSyCrOHEIZac7Q_6Q1LfmW_7c7vRxSE-GgmA",
  authDomain: "discord-clone-6639b.firebaseapp.com",
  projectId: "discord-clone-6639b",
  storageBucket: "discord-clone-6639b.appspot.com",
  messagingSenderId: "844318280327",
  appId: "1:844318280327:web:279ec73396add56c620622",
  measurementId: "G-8ZX4VYB51J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;