import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRgqRHXNoVFVUMrl_D_7csFhIlkhO0S4Q",
    authDomain: "hack4bengal-3a338.firebaseapp.com",
    projectId: "hack4bengal-3a338",
    storageBucket: "hack4bengal-3a338.appspot.com",
    messagingSenderId: "1086568771204",
    appId: "1:1086568771204:web:31e2082b4bce3f7b26dcd1"
  };

initializeApp(firebaseConfig);

export default firebaseConfig;
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };