import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { store } from "@/store/store";

const firebaseConfig = {
  apiKey: "AIzaSyAssDtKfEhl0YIOnhZeGQ4Nlgu5WadoefU",
  authDomain: "freeshop-6c9e1.firebaseapp.com",
  projectId: "freeshop-6c9e1",
  storageBucket: "freeshop-6c9e1.appspot.com",
  messagingSenderId: "260074984131",
  appId: "1:260074984131:web:4b4757adcf1541157c4876",
  measurementId: "G-WGKK6HERJN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

auth.onAuthStateChanged((user) => {
    store.commit('SET_USER', user);
});
