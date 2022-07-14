import { db, addDoc, collection, getDocs  } from '../database/firebase.js';

const cards = document.getElementById('card-teplate');

//Funcion para obtener todos las naves
async function ListarNaves() {
  const querySnapshot = await getDocs(collection(db, "naves"));
  querySnapshot.forEach((item) => {
    cards.innerHTML += `
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



