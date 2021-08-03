import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCo1hUreOG36u_P5I2dPs0Wo5d-xgkAzBU",
  authDomain: "slack-clone-d5ee9.firebaseapp.com",
  projectId: "slack-clone-d5ee9",
  storageBucket: "slack-clone-d5ee9.appspot.com",
  messagingSenderId: "736772425417",
  appId: "1:736772425417:web:71c68c00e8ee02cee22f18",
  measurementId: "G-53PGY3ZG7K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db