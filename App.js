import React, {useEffect, createRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import firebaseDB from './src/db/firebase';
import {auth} from "firebase/auth";
import {storage} from "firebase/storage"
import { faker } from '@faker-js/faker';

const firebaseStorage = firebaseDB.storage()
const storageRef = firebaseStorage.ref();

export default function App() {

  useEffect(() => {
    firebaseDB.auth().signInAnonymously()
      .then(() => {
          console.log('anonymously signed in')
        })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
    });

    firebaseDB.auth().onAuthStateChanged((user) => {
      if (user) {
        let uid = user.uid;
        console.log(user.uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  useEffect(() => {
    handleSeedFirebase()
  }, []);

  function handleSeedFirebase(){
    faker.locale='en_US'
    const seedData = faker.helpers.uniqueArray(faker.word.noun, 10)
    console.log(seedData.length)
    for(let i = 0; i >= seedData.length; i++) {
      console.log(i)
    storageRef.collection('things').doc(`${i}`).set({thing: seedData[i], bouba: 0, both: 0, neither: 0, kiki: 0, rank: 0})
    .then(()=> {
      console.log('Written successfully')})
    .catch((error) => { console.error('Error writing document: ', error)})
   }
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        hidden={true}
      />
      <HomeScreen/>
    </SafeAreaProvider>
  );
}