import {initializeApp} from 'firebase/app'
import {getFirestore}  from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBeJWkfmdZpgs_EzM6jwEt4rDPkgNHCEbY",
    authDomain: "myblog-4f8f4.firebaseapp.com",
    projectId: "myblog-4f8f4",
    storageBucket: "myblog-4f8f4.appspot.com",
    messagingSenderId: "1067990326357",
    appId: "1:1067990326357:web:e13759a477c41160a2c8dc"
  };

 export default initializeApp(firebaseConfig);
 
  