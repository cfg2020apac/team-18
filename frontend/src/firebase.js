import * as firebase from "firebase";
import "firebase/firestore";

let config = {
  apiKey: "",
  authDomain: "handson-e01fd.firebaseapp.com",
  databaseURL: "https://handson-e01fd.firebaseio.com",
  projectId: "handson-e01fd",
  storageBucket: "handson-e01fd.appspot.com",
  messagingSenderId: "160260095861",
  appId: "1:160260095861:web:1ead83148279c974f99d3c",
  measurementId: "G-TV92GLKN3R"
};

firebase.initializeApp(config);

export default firebase.firestore();