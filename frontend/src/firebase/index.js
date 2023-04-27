import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyAnyidBBu7VG9ETkFC3EEN0UVPU9mkYNdI",
//   authDomain: "clicktocartsl.firebaseapp.com",
//   projectId: "clicktocartsl",
//   storageBucket: "clicktocartsl.appspot.com",
//   messagingSenderId: "446771990700",
//   appId: "1:446771990700:web:adf3a516e4125375d7cf09",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDO0r6grsVjjDStYLXw4ZarD5coZ1FbHOk",
  authDomain: "green-medicine-e9e35.firebaseapp.com",
  projectId: "green-medicine-e9e35",
  storageBucket: "green-medicine-e9e35.appspot.com",
  messagingSenderId: "723780263914",
  appId: "1:723780263914:web:6c2d6a5852c6a075c51c93",
  measurementId: "G-GQR2E6HBL9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
