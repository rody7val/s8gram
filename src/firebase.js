import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "your-firebase-config",
  authDomain: "your-firebase-config",
  databaseURL: "your-firebase-config",
  projectId: "your-firebase-config",
  storageBucket: "your-firebase-config",
  messagingSenderId: "your-firebase-config",
  appId: "your-firebase-config",
  measurementId: "your-firebase-config",
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
