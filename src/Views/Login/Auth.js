import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

import {getFirestore, getDocs, doc,collection, setDoc} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmlRy1z17PgceLWktvGPoLTjWCEoj2qZ4",
  authDomain: "olx-react-firebase-20ca8.firebaseapp.com",
  projectId: "olx-react-firebase-20ca8",
  storageBucket: "olx-react-firebase-20ca8.appspot.com",
  messagingSenderId: "360883715311",
  appId: "1:360883715311:web:027ebe6cadd9c2735c6f1a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
 
export async function register(userInfo) {
      const {fullname , email , password} = userInfo
      const {user:{uid}} = await createUserWithEmailAndPassword(auth, email, password)
      const usrRef = doc(db, 'users' , uid);
      await setDoc(usrRef, {
            fullname,
            email,
            password
      });
      alert("register Successfully!")
}

export async function login(){
  const email = document.querySelector('#register-email-input').value
  const password = document.querySelector('#register-password-input').value
  const user = await signInWithEmailAndPassword(auth, email, password)
  alert("Logged In Successfully!")
}

async function getUser(uid) {
  console.log('uid', uid)
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
  if (doc.id === uid) {
      const firstName = doc.data().firstname
      const lastName = doc.data().lastname
      const fullname = `${firstName} ${lastName}`
      console.log(fullname);
      const username = document.getElementById('username-info')
      username.innerHTML = fullname
  }
  });
}

export {
  auth,
  onAuthStateChanged,
  getUser,
  getDocs,
  doc,
  collection,
  createUserWithEmailAndPassword,
  setDoc,
  db
}