// Variables
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
const listaCursos = document.querySelector("#lista-carrito tbody");

// Listener
cargaEventListener();

function cargaEventListener() {
  // Dispara cuando se presiona "Agregar Carrito"
  cursos.addEventListener("click", comprarCurso);

  //Cuando se elimina un curso de carrito
  carrito.addEventListener("click", eliminarCurso);
}

// Funciones
// Funcion que añade el curso al carrito
function comprarCurso(e) {
  e.preventDefault();
  //Delegation para agregar carrito
  if (e.target.classList.contains("agregar-carrito")) {
    const curso = e.target.parentElement.parentElement;
    // Enviamos el curso seleccionado para tomar sus datos
    leerDatosCurso(curso);
  }
}

// Leer datos curso
function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
  };

  insertarCarrito(infoCurso);
}

function insertarCarrito(curso) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>
            <img src="${curso.imagen}"width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
      `;
  listaCursos.appendChild(row);
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
  e.preventDefault();

  let curso; //para sabe que curso eliminar
  if (e.target.classList.contains("borrar-curso")) {
    e.target.parentElement.parentElement.remove();
  }
}
