import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCospVVUgQYE6h8_4kPxDYZrQZba_NQVxo',
  authDomain: 'lab-6-25842.firebaseapp.com',
  projectId: 'lab-6-25842',
  storageBucket: 'lab-6-25842.appspot.com',
  messagingSenderId: '556882876479',
  appId: '1:556882876479:web:63bb289dda4341551bc08a',
  measurementId: 'G-MSHCW025D6'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }
