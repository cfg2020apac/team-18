import * as firebase from "firebase";
import "firebase/firestore";

// Replace config with keys
let config = {};

firebase.initializeApp(config);

export default firebase.firestore();