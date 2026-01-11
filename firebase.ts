/// <reference types="vite/client" />

// This file assumes the environment has process.env.API_KEY or similar
// For this demo context, we'll implement a Mock Firestore wrapper 
// if real config isn't provided, to ensure functionality.

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Standard Firebase Config template
const firebaseConfig = {
  apiKey: "DEMO_KEY",
  authDomain: "softvex-demo.firebaseapp.com",
  projectId: "softvex-demo",
  storageBucket: "softvex-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Helper for contacting
export const submitContactForm = async (data: any) => {
  // Google Sheets Integration
  const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL;
  if (scriptUrl) {
    try {
      // We use no-cors to avoid CORS issues with Google Apps Script
      // This means we won't see the response text, but the request will go through.
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, createdAt: new Date().toISOString() }),
      });
      // Since we can't check response in no-cors, we assume success if no network error
      console.log("Submitted to Google Sheets");
    } catch (e) {
      console.error("Error submitting to Google Sheets:", e);
    }
  }

  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: Date.now()
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    // Fallback for demo purposes if Firebase is not connected
    const submissions = JSON.parse(localStorage.getItem('softvex_contacts') || '[]');
    submissions.push({ ...data, id: Date.now().toString(), createdAt: Date.now() });
    localStorage.setItem('softvex_contacts', JSON.stringify(submissions));
    return "demo-id";
  }
};

export const getContactSubmissions = async () => {
  try {
    const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    // Fallback
    const submissions = JSON.parse(localStorage.getItem('softvex_contacts') || '[]');
    return submissions.reverse();
  }
};
