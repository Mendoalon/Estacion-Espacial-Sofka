import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore,  addDoc, collection, getDocs, doc, updateDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"





var firebaseConfig = {

  apiKey: "AIzaSyDJ-DMemDuyYnykftN2CMJwPqDrhEREGtk",
  authDomain: "estacion-espacial.firebaseapp.com",
  projectId: "estacion-espacial",
  storageBucket: "estacion-espacial.appspot.com",
  messagingSenderId: "1002963692173",
  appId: "1:1002963692173:web:b1e2ff684e79e066c590c4"

  // apiKey: APP_FIREBASE_APIKEY,
  //   authDomain: APP_FIREBASE_AUTHDOMAIN,
  //   projectId: APP_FIREBASE_PROJECTID,
  //   storageBucket: APP_FIREBASE_STORAGEBUCKET,
  //   messagingSenderId: APP_FIREBASE_MESSAGINGSENDERID,
  //   appId: APP_FIREBASE_APPID
};








// Inicializando Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);





// async function insertar(){
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Alan",
//       middle: "Mathison",
//       last: "Turing",
//       born: 1912
//     });
  
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

// insertar()


// async function optenertDatos(){
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// })
// }
// optenertDatos()

async function UpdateFieldsInAdocument(){

  const ref = collection(db, 'users', 'Maye'));
  
  await updateDoc(
    ref,
    {
      born: '1234',
      first: 'luis',
      last: 'meendoza',
      middle:'mate'
      }
  )
  .then(()=>{
    alert("Document actualizado");
    
  })  
  .catch((error)=>{
      alert("Document con error al actualizar: " + error);
    
  })

}

UpdateFieldsInAdocument();
