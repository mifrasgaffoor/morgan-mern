import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e5cba.firebaseapp.com",
  projectId: "mern-estate-e5cba",
  storageBucket: "mern-estate-e5cba.appspot.com",
  messagingSenderId: "784616722831",
  appId: "1:784616722831:web:f1013cd9054714b39c7bfa",
};

let app;

try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Error initializing Firebase: ", error);
}

export { app };
