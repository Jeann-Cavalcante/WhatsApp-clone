import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

import fireBaseConfig from "./fireBaseConfig";

const fireBaseConfig = firebase.initializeApp(fireBaseConfig);
const db = firebaseApp.firestore();

export default {
  fbPoup: async () => {
    const provider = new firebase.auth.FacebookProvider();
    let result = await firebaseApp.auth().signInWithPopup(provider);
    return result;
  },
};
