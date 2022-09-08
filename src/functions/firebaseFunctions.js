// import { getDatabase, ref, onValue, set } from 'firebase/database';

// function storeHighScore(userId, score) {
//   const db = getDatabase();
//   const reference = ref(db, 'users/' + userId);
//   set(reference, {
//     highscore: score,
//   });
// }

// setupHighscoreListener(userId) {
//   const db = getDatabase();
//   const reference = ref(db, 'users/' + userId);
//   onValue(reference, (snapshot) => {
//     const highscore = snapshot.val().highscore;
//     console.log("New high score: " + highscore);
//   });
// }

// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   onAuthStateChanged,
//   FacebookAuthProvider,
//   signInWithCredential,
// } from 'firebase/auth';
// import * as Facebook from 'expo-facebook';

// let myApp = initializeApp(config);

// const auth = getAuth(myApp);

// // Listen for authentication state to change.
// onAuthStateChanged(auth, user => {
//   if (user != null) {
//     console.log('We are authenticated now!');
//   }

//   // Do other things
// });

// async function loginWithFacebook() {
//   await Facebook.initializeAsync('<FACEBOOK_APP_ID>');

//   const { type, token } = await Facebook.logInWithReadPermissionsAsync({
//     permissions: ['public_profile'],
//   });

//   if (type === 'success') {
//     // Build Firebase credential with the Facebook access token.
//     const facebookAuthProvider = new FacebookAuthProvider();
//     const credential = facebookAuthProvider.credential(token);

//     // Sign in with credential from the Facebook user.
//     signInWithCredential(auth, credential).catch(error => {
//       // Handle Errors here.
//     });
//   }
// }

// import { getDatabase, ref, set } from 'firebase/database';

// function storeHighScore(user, score) {
//   if (user != null) {
//     const database = getDatabase();
//     set(ref(db, 'users/' + user.uid), {
//       highscore: score,
//     });
//   }
// }

// // Here's is an example of storing a document named "mario" inside of a collection named "characters" in Firestore:
// import { initializeApp } from 'firebase/app';
// import { getFirestore, setDoc, doc } from 'firebase/firestore';

// const firebaseConfig = { ... }  // apiKey, authDomain, etc. (see above)

// let myApp = initializeApp(firebaseConfig);

// const firestore = getFirestore(myApp);

// await setDoc(doc(firestore, "characters", "mario"), {
//   employment: "plumber",
//   outfitColor: "red",
//   specialAttack: "fireball"
// });

// // var messageRef = firebase.collection('rooms').doc('roomA')
// //                 .collection('messages').doc('message1');