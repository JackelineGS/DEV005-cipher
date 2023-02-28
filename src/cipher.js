/*eslint-disable eqeqeq*/

const cipher = {
  encode: function(offset, mensaje) {
    if (!offset || !mensaje) {
      throw new TypeError("Whoops!");
    }
    let resultado1 = "";
    for (let i = 0; i < mensaje.length; i++) {
      resultado1 = resultado1 + String.fromCharCode((mensaje.charCodeAt(i) + offset - 65)%26 + 65); 
    }
    return resultado1;
  },
  decode: function(offset, mensaje) {
    if (!offset || !mensaje) {
      throw new TypeError("Whoops!");
    }
    let resultado2 = "";
    for (let i = 0; i < mensaje.length; i++) {
      resultado2 = resultado2 + String.fromCharCode((mensaje.charCodeAt(i) - offset + 65)%26 + 65);   
      
    }
    return resultado2;
  } 

}

export default cipher;







