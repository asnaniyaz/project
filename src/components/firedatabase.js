import Firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyANq0tvszwP8qHeJCHqUOPDobMmwcweCnA",
    authDomain: "userdetails-5d417.firebaseapp.com",
    databaseURL: "https://userdetails-5d417.firebaseio.com",
    projectId: "userdetails-5d417",
    storageBucket: "userdetails-5d417.appspot.com",
    messagingSenderId: "914963999803"
  };
  let app = Firebase.initializeApp(config);
  let db = app.database();
  let storage = app.storage();
  export {db, storage, app, Firebase, config};
