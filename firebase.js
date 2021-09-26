// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPTD7DAwQ6ghIUb-bDFdrmyCg1mL9OIak",
  authDomain: "fir-auth-30745.firebaseapp.com",
  projectId: "fir-auth-30745",
  storageBucket: "fir-auth-30745.appspot.com",
  messagingSenderId: "208917918633",
  appId: "1:208917918633:web:b327856223f4097abccab8"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };