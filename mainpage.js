import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBBu5GoFaooAnpXbJv_JB5DkpECJEt_5rw",
  authDomain: "auth-based-login-form-fa215.firebaseapp.com",
  projectId: "auth-based-login-form-fa215",
  storageBucket: "auth-based-login-form-fa215.appspot.com",
  messagingSenderId: "205348139902",
  appId: "1:205348139902:web:6035a8e54f1f3fa73d392f",
  measurementId: "G-QCLG9H37GN"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


let signoutbtn =document.querySelector('.signoutbtn')
signoutbtn.addEventListener('click',()=>{
  signOut(auth).then(() => {
    window.open('./index.html','_self')
  }).catch((error) => {
    console.log(error);
  });
})