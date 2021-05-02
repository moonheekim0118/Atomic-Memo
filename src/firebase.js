import firebase from 'firebase/app';
import 'firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: 'atomic-memo',
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSEGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MESUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
