// import firebase from "firebase/app";
// import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// firebase.initializeApp(firebaseConfig);
// export const firebaseApp = initializeApp(firebaseConfig);
// const storage = firebase.storage();
// export const storage = getStorage(firebaseApp);
// export { firebase as default, storage };
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase as default, storage };
