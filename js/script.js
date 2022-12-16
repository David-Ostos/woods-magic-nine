// constante de botones de filtro
const filtroBtn = document.querySelectorAll("#filtro")

var validadores = []

const categoria =[
    "todos",
    "eventos",
    "turismo",
    "surfing",
    "gastronomia",
    "personas",
    "naturaleza"
]
const nombreDecategoria = {
    eventos: "eventos"
}

filtroBtn.forEach((input) => {
    input.addEventListener("click", (input) => {
    valida(input.target)
    });
});

  function valida(input) {
    const tipoDeFiltro = input.dataset.filter;
    if (validadores[tipoDeFiltro]){
        validadores[tipoDeFiltro](input)
    }if(input.classList){
        validadores.slice(input.classList[2]);
        console.log(categoria[0],validadores)
        
        /*
         for(let i = 0; categoria[0] != validadores; i++)
       */
    }
  }











  /*
    function validarFiltro(tipoDeFiltro, input){
        var validadores = []
        categoria.forEach((nombre) =>{ 
            if(input.classList[2]){
               validadores.push(input.classList[2])
               console.log(input.classList[2])
            }
        });return validadores
    }
    
    /*
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeFiltro, input);
  }

  function mostrarImagen()
*
  function mostrarMensajeDeError(tipoDeFiltro, input) {
    let mensaje = "";
    categoria.forEach((filtro) => {
      if (input.validity[filtro]) {
        console.log(tipoDeFiltro, filtro);
        console.log(input.validity[filtro]);
        console.log(mensajesDeError[tipoDeFiltro][filtro]);
        mensaje = mensajesDeError[tipoDeFiltro][filtro];
      }
    });
    return mensaje
    const tipoDeErrores = [
        "valueMissing",
        "typeMismatch",
        "patternMismatch",
        "customError",
      ];*/

