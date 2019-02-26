import Firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "#",
    authDomain: "#",
    databaseURL: "#",
    projectId: "userdetails-5d417",
    storageBucket: "#",
    messagingSenderId: "#
  };
  let app = Firebase.initializeApp(config);
  let db = app.database();
  let storage = app.storage();
  export {db, storage, app, Firebase, config};
