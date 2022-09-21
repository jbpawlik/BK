import React, {useEffect, createRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import firebaseDB from './src/db/firebase';
import {auth} from "firebase/compat/auth";

export default function App() {

  useEffect(() => {
    // firebaseDB.auth().signInAnonymously()
    //   .then(() => {
    //       console.log('anonymously signed in')
    //     })
    //   .catch((error) => {
    //     let errorCode = error.code;
    //     let errorMessage = error.message;
    //     console.log(errorMessage)
    // });

    // firebaseDB.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     let uid = user.uid;
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });
  }, []);

  useEffect(() => {
    // handleSeedFirebase()
  }, []);

  // async function handleSeedFirebase() {
  //   const storageRef = firebaseDB.firestore().collection('things')
  //   // console.log(storageRef.doc('0').get().then((doc)=>{console.log(doc.data())}))
  //   faker.locale='en_US'
  //   const seedData = faker.helpers.uniqueArray(faker. word.noun, 3)
  //   seedData.forEach((noun, index) => {
  //     storageRef.doc(`${index}`).set({thing: noun, bouba: 0, both: 0, neither: 0, kiki: 0, rank: 0})
  //     // .then(storageRef.doc(`${index}`).get().then((doc)=>{console.log(doc.data())}))
  //     .catch((error) => {console.log(error)})
  //     console.log(noun)
  //   })
  // }

  return (
    <SafeAreaProvider>
      <StatusBar
        hidden={true}
      />
      <HomeScreen/>
    </SafeAreaProvider>
  );
}