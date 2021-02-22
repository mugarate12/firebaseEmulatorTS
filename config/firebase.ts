import firebase from 'firebase'

const ISTEST = process.env.ISTEST
let firebaseConfig = {
  apiKey: "AIzaSyA34pVcwYd_TcL7dl-QTUhMcePJl_UyR48",
  authDomain: "fir-emulator-21d59.firebaseapp.com",
  projectId: "fir-emulator-21d59",
  storageBucket: "fir-emulator-21d59.appspot.com",
  messagingSenderId: "527721235426",
  appId: "1:527721235426:web:57a1a1991b502053152fbb",
  measurementId: "G-87LHHMW4BX"
}
let firebaseInstance: firebase.app.App
let database: firebase.firestore.Firestore

if (!firebase.apps.length) {
  firebaseInstance = firebase.initializeApp(firebaseConfig)
  database = firebase.firestore()
  
  const isTestAmbient = ISTEST === 'true'
  if (isTestAmbient) {
    database.useEmulator('localhost', 8080)
  }
} else {
  firebaseInstance = firebase.app()
  database = firebase.firestore()
  // database.useEmulator('localhost', 8080)
}

export {
  firebaseInstance,
  database
}