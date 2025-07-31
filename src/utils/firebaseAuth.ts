// Firebase authentication utilities
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './firebaseConfig';

const auth = getAuth(app);

export async function registerWithFirebase({ email, password, username, phone, role }: any) {
  // You can extend this to save username, phone, and role in Firestore
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function loginWithFirebase({ email, password }: any) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}
