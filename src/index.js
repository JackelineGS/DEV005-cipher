/*eslint-disable no-unused-vars*/
/*eslint-disable eqeqeq*/ 
/*eslint-disable no-undef*/ 
/*eslint-disable no-console*/
/*eslint-disable indent*/

import cipher from './cipher.js';

const cifrarMensaje = document.getElementById('boton-Cifrar');
const descifrarMensaje = document.getElementById('boton-Descifrar');

//codificar mensaje

cifrarMensaje.addEventListener("click", function() {
  const mensajeEntrada = document.getElementById('message').value
  const offset = document.getElementById('offset').value
  const mensajeCodificado = document.getElementById('resultado');
  mensajeCodificado.value = cipher.encode(parseInt(offset), mensajeEntrada);
  }
) 

//Decodificar Mensaje

descifrarMensaje.addEventListener("click", function() {
  const offset = document.getElementById('offset').value
  const mensajeEntrada = document.getElementById('message').value
  const mensajeCodificado = document.getElementById('resultado');
  mensajeCodificado.value = cipher.decode(parseInt(offset),mensajeEntrada);
  
  }
) 

//funcion reiniciar
const reiniciar = document.getElementById('reiniciar');
reiniciar.addEventListener('click', function() {
  document.getElementById('formulario').reset();
}
)

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", function(event){
  console.log(event);
  event.preventDefault();
}) 






