import { db, getFirestore, addDoc, collection, getDocs, doc, updateDoc, deleteField } from '../database/firebase.js';

const cards = document.getElementById('card-teplate');


//Funcion para obtener todos las naves
async function ListarNaves() {
  const querySnapshot = await getDocs(collection(db, "naves"));
  querySnapshot.forEach((item) => {
    cards.innerHTML += `
      <div class="row-sm-12 col-md-4 row-lg-4 py-3">
        <div class="card shadow">
          <div class="card-body">
            <h2>${item.data().nombre}</h2><hr>
            <p class="text-center">constructor: ${item.data().nombre}</p>
            <p class="text-center">Tipo: ${item.data().tipo}</p>
            <p class="text-center">Primer Lanzamiento: ${item.data().planzamiento}</p>
            <p class="text-center">Ultimo Lanzamiento: ${item.data().ultilanzamiento}</p>
            <p class="text-center">Version: ${item.data().version}</p>
            <a href="ver-naves.html" class="btn btn-sm btn-dark ">Ver Naves</a>
            <a href="crear-nave.html" class="btn btn-sm btn-dark ">Crear Nave</a>
          </div>
        </div>
      </div>
    `;
  })
}

ListarNaves();


//Funcion para crear las naves
const formCrear = document.querySelector("#form-crear");
formCrear.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#cnombre").value;
  const version = document.querySelector("#cversion").value;
  const planzamiento = document.querySelector("#cplanzamiento").value;
  const ultilanzamiento = document.querySelector("#cultilanzamiento").value;
  const constructor = document.querySelector("#cconstructor").value;
  const tipo = document.querySelector("#inputGroupSelect01").value;

  const docRef = await addDoc(collection(db, "naves"),
    {
      nombre,
      version,
      planzamiento,
      ultilanzamiento,
      constructor,
      tipo
    });
  console.log("Document written with ID: ", docRef.id);
  formCrear.reset();
});



