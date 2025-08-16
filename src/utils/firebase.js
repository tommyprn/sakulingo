import {
  getApps,
  initializeApp,
} from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔒 Replace with your Firebase web config from the console
const firebaseConfig = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  projectId: "<PROJECT_ID>",
  storageBucket: "<PROJECT_ID>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
  appId: "<APP_ID>",
};

export const app = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig);
export const auth = getAuth(app);
