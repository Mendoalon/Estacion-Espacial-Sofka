import { db, getFirestore, addDoc, collection, getDocs, doc, updateDoc, deleteField } from '../database/firebase.js';


async function CrearNave() {
  try {
    const docRef = await addDoc(collection(db, "Naves"), {
      first: 'Ada',
      middle: "Mathison",
      last: "Turing",
      born: 1912
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

 //CrearNave()




//Funcion para obtener todos las naves
export async function ListarNaves() {
  const querySnapshot = await getDocs(collection(db, "naves"));
  querySnapshot.forEach((item) => {
    console.log(`${item.id} => ${item.data().born}`);
   
  })
}




const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', e => {
  e.preventDefault();

  
  
  hola = document.getElementById('task-title.value');

});





