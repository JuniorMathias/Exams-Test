// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from'firebase/auth';
//db here
import { getFirestore} from 'firebase/firestore';
//db connection
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
    
  };

 
  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const storage = getStorage(firebaseApp);

export { db, auth, storage };