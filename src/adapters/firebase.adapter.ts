import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyD9gqulYxjCJDrAfE7Je1Y-vG7TqLKqTOo",
    authDomain: "orion-ui.firebaseapp.com",
    projectId: "orion-ui",
    storageBucket: "orion-ui.appspot.com",
    messagingSenderId: "473487535427",
    appId: "1:473487535427:web:f0b9d09df8fbcef28393f6"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);