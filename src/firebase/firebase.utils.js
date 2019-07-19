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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //userAuth is to get the user data info
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //with the .exists it will check if exists in the db or not
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //userAuth is info from Firefase
    //if the user does not exist in the db, we will add it
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  //if exists we will return only the info
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
