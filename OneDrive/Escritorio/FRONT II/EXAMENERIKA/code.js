/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  datosPersona.nombre = prompt("Ingrese su nombre: ");
  datosPersona.ciudad = prompt("Ingrese ciudad de nacimiento :");
  datosPersona.edad = 2022 - parseInt(prompt("Ingrese año de nacimiento :"));
  datosPersona.interesPorJs = confirm(
    "¿Se encuentra interesado en JavaScript?"
  );
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const ciudad = document.getElementById("ciudad");
  const interesPorJs = document.getElementById("javascript");

  let resultadoJavaScript = "";
  datosPersona.interesPorJs
    ? (resultadoJavaScript = "Si")
    : (resultadoJavaScript = "No");

  nombre.innerText = datosPersona.nombre;
  edad.innerText = datosPersona.edad;
  ciudad.innerText = datosPersona.ciudad;
  interesPorJs.innerText = resultadoJavaScript;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.getElementById("fila");
  fila.innerHTML = "";
  listado.forEach((materia) => {
    fila.innerHTML += `
  <div class="caja">
  <img src="${materia.imgUrl}" alt= "${materia.lenguajes}"> </img>
  <p class="lenguajes">lenguajes:${materia.lenguajes}</p>
  <p class="bimestre">bimestre: ${materia.bimestre}</p>
  </div> `;
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let div = document.getElementById("sitio");
  div.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", (event) => {
  if (event.key === "f") {
    const p = document.getElementById("sobre-mi");
    p.classList.remove("oculto");
  }
});
