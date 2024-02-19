// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBiVTWtD9BpHLBTGm1_dXJJOM7FGSrg4Pk",
  authDomain: "ejer4-login.firebaseapp.com",
  projectId: "ejer4-login",
  storageBucket: "ejer4-login.appspot.com",
  messagingSenderId: "556197514126",
  appId: "1:556197514126:web:998e922cfc4ef9ccffb2df"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, storage };
