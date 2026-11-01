// src/firebase/initFirebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../providers/firebaseConfig.json";

let app;
export let auth, db;

// Se till att Firebase bara initieras en gång
function initializeFirebase() {
  if (!app) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  }
}

// Initiera omedelbar
initializeFirebase();

export function getFirebase() {
  return { app, auth, db };
}

