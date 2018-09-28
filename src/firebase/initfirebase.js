// import firebase from '@firebase/app'; /** Problema com firebase, olhar em: https://github.com/firebase/firebase-js-sdk/issues/871 */
import firebase from 'firebase';
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID } from './constants';

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
};
const initFirebase = () => {
  firebase.initializeApp(config);
};

export default initFirebase;
