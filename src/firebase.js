import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAe0SSTmOFFSI5b3lDvXXFGyMA2aNuOrWQ",
  authDomain: "clone-44e6d.firebaseapp.com",
  projectId: "clone-44e6d",
  storageBucket: "clone-44e6d.appspot.com",
  messagingSenderId: "104534119811",
  appId: "1:104534119811:web:5d2097a5dae6a8b8aa12b6",
  measurementId: "G-T50K59ZNBG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
