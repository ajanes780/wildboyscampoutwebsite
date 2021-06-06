import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDnYS6xzj1BsDeOO8Bb7qD3pb__njQXotc',
  authDomain: 'twbco-3c924.firebaseapp.com',
  projectId: 'twbco-3c924',
  storageBucket: 'twbco-3c924.appspot.com',
  messagingSenderId: '422418325472',
  appId: '1:422418325472:web:a0c8a1979a01690679d585',
  measurementId: 'G-CYJCT589T9',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
// const tracking = firebase.analytics();

export const db = firebase.firestore();

export const ContestResults = db.collection('Contest');
// console.log('here', ContestResults);

export const getMarker = async () => {
  const myArray = [];

  const snapshot = await firebase.firestore().collection('Contest').get();
  snapshot.docs.map((doc) => myArray.push(doc.data()));
  return myArray;
};
