import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    
    apiKey: "AIzaSyCMHALya_vIjqSKZE0AkWAVhyh42swfQe8",
    authDomain: "messenger-clone-69db6.firebaseapp.com",
    projectId: "messenger-clone-69db6",
    storageBucket: "messenger-clone-69db6.appspot.com",
    messagingSenderId: "65869234540",
    appId: "1:65869234540:web:69db86000d249a05a93349",
    measurementId: "G-B2ZG0CR04J"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
  