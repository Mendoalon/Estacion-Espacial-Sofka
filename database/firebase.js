import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore,  addDoc, collection, getDocs, doc, updateDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"





var firebaseConfig = {

  apiKey: "AIzaSyDJ-DMemDuyYnykftN2CMJwPqDrhEREGtk",
  authDomain: "estacion-espacial.firebaseapp.com",
  projectId: "estacion-espacial",
  storageBucket: "estacion-espacial.appspot.com",
  messagingSenderId: "1002963692173",
  appId: "1:1002963692173:web:b1e2ff684e79e066c590c4"
};








// Inicializando Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db, getFirestore,  addDoc, collection, getDocs, doc, updateDoc, deleteField };






