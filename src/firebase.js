import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQwi4n--NJ8gTFOvxLwDPrivA0Pfiyu6c",
    authDomain: "netflix-clone-ee376.firebaseapp.com",
    databaseURL: "https://netflix-clone-ee376.firebaseio.com",
    projectId: "netflix-clone-ee376",
    storageBucket: "netflix-clone-ee376.appspot.com",
    messagingSenderId: "205904922695",
    appId: "1:205904922695:web:45a8658197c069dd53c962",
    measurementId: "G-0JQZBHG72N"
  };

  const firebaseApp = firebase.initializeApp(firebase);

  const db = firebaseApp.firestore();

  export default db;