import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB6eXOKPaSWPPfNXJ0_DRSfeApMUCExYLc",
  authDomain: "moments-598ec.firebaseapp.com",
  projectId: "moments-598ec",
  storageBucket: "moments-598ec.appspot.com",
  messagingSenderId: "196498703722",
  appId: "1:196498703722:web:78ac8dd4590b032b5ed113",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore};