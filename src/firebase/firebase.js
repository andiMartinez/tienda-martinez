import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUVF7j_fFXXeb0TEV9Lk9Idm_KWrGIknY",
  authDomain: "react-tienda-martinez-1.firebaseapp.com",
  projectId: "react-tienda-martinez-1",
  storageBucket: "react-tienda-martinez-1.appspot.com",
  messagingSenderId: "173635377752",
  appId: "1:173635377752:web:d8b7a014f18c3cd8c6082d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
