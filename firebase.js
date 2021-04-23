import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCXNdv1bT1Pbxvss6i5JpapM2ry98M2Z6U',
  authDomain: 'parkingapp-5c15d.firebaseapp.com',
  projectId: 'parkingapp-5c15d',
  storageBucket: 'parkingapp-5c15d.appspot.com',
  messagingSenderId: '859107865871',
  appId: '1:859107865871:web:682060ff18608676c23a7a',
};
const FirebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
