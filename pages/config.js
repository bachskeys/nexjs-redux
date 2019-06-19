import firebase from "firebase";



var firebaseConfig = {
  apiKey: "AIzaSyDDjAEh_JHCeQWDFo-jP-l7ZeeKK6hoEcI",
  authDomain: "lavendimia-2814a.firebaseapp.com",
  databaseURL: "https://lavendimia-2814a.firebaseio.com",
  projectId: "lavendimia-2814a",
  storageBucket: "lavendimia-2814a.appspot.com",
  messagingSenderId: "659115647720",
  appId: "1:659115647720:web:f909d90222bc22e1"
  
  };
  export let provider = new firebase.auth.GoogleAuthProvider();

  try {
     firebase.initializeApp(firebaseConfig)
     console.log('initializing')
     
     
    } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
    }
    }

   let fb=firebase;
  
  // Initialize Firebase
  export default fb;