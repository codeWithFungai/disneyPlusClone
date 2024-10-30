// Import necessary Firebase modules in a modular fashion
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlbdTMSnREy2B3iSunrT-wK5UDmh66mv0",
  authDomain: "disneyplus-clone-a791c.firebaseapp.com",
  projectId: "disneyplus-clone-a791c",
  storageBucket: "disneyplus-clone-a791c.appspot.com",
  messagingSenderId: "17407301304",
  appId: "1:17407301304:web:5942cb9720552d44d8864d",
  measurementId: "G-TTKSCN65LR"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services using the modular syntax
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

// Exporting initialized services
export { auth, provider, storage };
export default db;
