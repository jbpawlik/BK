// import firebase from '@react-native-firebase/app'
// import '@react-native-firebase/firestore';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_DATABASE_URL,
} from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

// const firebaseDB = firebase.initializeApp(firebaseConfig);
const firebaseInstance = initializeApp(firebaseConfig);
// firebaseDB.firestore().settings({ experimentalForceLongPolling: true, useFetchStreams: false });
// firebaseDB.firestore().settings({ experimentalForceLongPolling: true });
// firebaseDB.firestore();
// firebaseDB.firestore().enablePersistence().settings({ experimentalForceLongPolling: true, useFetchStreams: false, merge: true });

const firebaseDB = getDatabase(firebaseInstance)

export default firebaseDB;