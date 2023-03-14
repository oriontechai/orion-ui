import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig: FirebaseOptions = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "orion-ui.firebaseapp.com",
    projectId: "orion-ui",
    storageBucket: "orion-ui.appspot.com",
    messagingSenderId: "473487535427",
    appId: "1:473487535427:web:f0b9d09df8fbcef28393f6",
    databaseURL: import.meta.env.VITE_REALTIME_DDBB_FIREBASE
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getDatabase(app);