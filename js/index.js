import { db, getFirestore, addDoc, collection, getDocs, doc, updateDoc, deleteField } from '../database/firebase.js';



//Funcion para obtener todos las naves
export async function ListarNaves() {
  const querySnapshot = await getDocs(collection(db, "naves"));
  querySnapshot.forEach((item) => {
    console.log(`${item.id} => ${item.data().born}`);
   
  })
}



//Funcion para crear las naves
const formCrear = document.querySelector("#form-crear");
formCrear.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#cnombre").value;
  const tipo = document.querySelector("#ctipo").value;
  const combustible = document.querySelector("#ccombustible").value;
  const capacidad = document.querySelector("#ccapacidad").value;
  const pais = document.querySelector("#cpais").value;
  const docRef = await addDoc(collection(db, "naves"), {
    nombre,
    tipo,
    combustible,
    capacidad,
    pais
  });
  console.log("Document written with ID: ", docRef.id);
  formCrear.reset();
});