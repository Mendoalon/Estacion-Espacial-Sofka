import { db, addDoc, collection, getDocs  } from '../database/firebase.js';


//Funcion burcar nave.
const cards2 = document.getElementById('card-teplate-dos');

const formBuscar = document.querySelector("#form-buscar");
 formBuscar.addEventListener("submit", async (e) => {
 e.preventDefault();
 const querySnapshot = await getDocs(collection(db, "naves"));
 querySnapshot.forEach((item) => {
if (item.data().nombre == document.querySelector("#bnombre").value) {
  cards2.innerHTML += `
   <div class="card">
     <div class="card-header">
       <h4>${item.data().nombre}</h4>
     </div>
     <div class="card-body">
       <p class="text-center">Tipo: ${item.data().tipo}</p>
       <p class="text-center">Primer Lanzamiento: ${item.data().planzamiento}</p>
       <p class="text-center">Ultimo Lanzamiento: ${item.data().ultilanzamiento}</p>
       <p class="text-center">Version: ${item.data().version}</p>
       </div>
       <div class="card-footer">
       <a href="#" class="btn btn-sm btn-dark ">Eliminar</a>
       <a href="#" class="btn btn-sm btn-dark ">Actualizar</a>
       </div>
     </div>
     `;
   

} else {
  
} 

 })
})