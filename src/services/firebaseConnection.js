// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from'firebase/auth';
//db here
import { getFirestore} from 'firebase/firestore';
//db connection
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyCMu96MClZ1L8H8C5KpnP3jNkra1Og2IfE",
    authDomain: "exam-test-7f71d.firebaseapp.com",
    projectId: "exam-test-7f71d",
    storageBucket: "exam-test-7f71d.appspot.com",
    messagingSenderId: "985172525613",
    appId: "1:985172525613:web:20af89e71b86b0c8282ea4",
    measurementId: "G-5VJT12W39W"
  };

 
  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const storage = getStorage(firebaseApp);

export { db, auth, storage };