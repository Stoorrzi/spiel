// Import the functions you need from the SDKs you need

import Firebase from "firebase/app";

import "firebase/firestore";


const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const firebase = Firebase.initializeApp(config);

console.log("init Firebase sucessfull");
console.log(firebase);

export { firebase };
