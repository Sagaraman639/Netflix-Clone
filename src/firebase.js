import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAVNKrdgHCn7JjBuNt0u1Qw2R-XuzcaX4I",
  authDomain: "netflix-clone-c8e7f.firebaseapp.com",
  projectId: "netflix-clone-c8e7f",
  storageBucket: "netflix-clone-c8e7f.appspot.com",
  messagingSenderId: "349644131722",
  appId: "1:349644131722:web:a5d663dd2206583c3fcc73",
  measurementId: "G-MRN34V0BFC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
