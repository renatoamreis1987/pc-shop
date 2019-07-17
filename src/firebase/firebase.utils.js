import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyDEYEl6ZQMq-46WkFhzOUPfzla-mGJad7c",
  authDomain: "shop-db-980c1.firebaseapp.com",
  databaseURL: "https://shop-db-980c1.firebaseio.com",
  projectId: "shop-db-980c1",
  storageBucket: "",
  messagingSenderId: "693525439382",
  appId: "1:693525439382:web:7f09aec1da7469c6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;
