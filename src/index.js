const primeraPantalla = document.getElementById("pantallaUno");
const segundaPantalla = document.getElementById("pantallaDos");
const resultado = document.getElementById("conclusion");
const limpiar = document.getElementById("btn4");
const iniciar = document.getElementById("btn5");

//primera pantalla//
const boton1 = document.getElementById("btn1");
let contador = 0;
boton1.addEventListener('click',() => {
    contador++;
    const name = document.getElementById("usuario").value;
    document.getElementById("usuario").value = "";
    console.log("nombre", name)

    const password = document.getElementById("contraseña").value;
    document.getElementById("contraseña").value = "";
    if(password === "LABORATORIA"){
    primeraPantalla.style.display = "none";
  
    return  segundaPantalla.style.display = "block";   
    }else if(contador === 3){
    primeraPantalla.style.display = "block";
    const error = document.getElementById("error");
    error.innerHTML = "tus intentos llegaron al limite";
}
}); 

//segunda pantalla//

const cifrar = document.getElementById("btn2");
cifrar.addEventListener('click',()=>{
const texto = document.getElementById("texto").value;
const texCifrar = texto.toUpperCase();
const numer = document.getElementById("numero");
const offset = parseInt(numer.value);
 let cifrar = cipher.encode(offset,texCifrar);


console.log( cifrar);

});

const decifrado = document.getElementById("btn3");
decifrado.addEventListener('click',()=>{ 
const texto = document.getElementById("texto").value;
const texCifrar = texto.toUpperCase();
const numer = document.getElementById("numero");
const offset = parseInt(numer.value);
let cifrar = cipher.decode(offset,texCifrar);

console.log(cifrar);
});


