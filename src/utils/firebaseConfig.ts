// Firebase config and initialization
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCsz1Q4O_fmqtlKyQlq74RU-w-cUTTJMRs",
  authDomain: "globalsponsorjobhub.firebaseapp.com",
  projectId: "globalsponsorjobhub",
  storageBucket: "globalsponsorjobhub.firebasestorage.app",
  messagingSenderId: "782797038995",
  appId: "1:782797038995:web:b7ee1fb7afca8151647466",
  measurementId: "G-MC9V7E5BCY"
};

export const app = initializeApp(firebaseConfig);
