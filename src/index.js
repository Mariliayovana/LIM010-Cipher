const primeraPantalla = document.getElementById("pantallaUno");
const enviar = document.getElementById("enviar");
const name = document.getElementById("usuario");
const password = document.getElementById("contraseña");
const segundaPantalla = document.getElementById("pantallaDos");
const texto = document.getElementById("texto");
const numer = document.getElementById("numero");
const cifrar = document.getElementById("cifrar");
const decifrado = document.getElementById("decifrar"); //boton cifrar//
const error = document.getElementById("error");
const resultado = document.getElementById("conclusion");
const limpiar = document.getElementById("limpiar");
const iniciar = document.getElementById("iniciar");

let contador = 0;
enviar.addEventListener('click',() => {
    contador++;
    const nameUsuario = name.value;
    const passwordControl = password.value;  

    if(passwordControl === "LABORATORIA"){
        primeraPantalla.classList.toggle("ocultar");
        segundaPantalla.classList.toggle("ocultar"); 
    }
                 
    else if(contador === 3){
       error.innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar";
    }
}); 

//segunda pantalla// 
cifrar.addEventListener('click',()=>{
   const texCifrar = texto.value.toUpperCase();
   const offset = parseInt(numer.value);
   let cifrar = cipher.encode(offset,texCifrar);
   resultado.value = cifrar;
});
decifrado.addEventListener('click',()=>{ 
    const textoDecifrar = texto.value;
    const texCifrar = textoDecifrar.toUpperCase();
    const offset = parseInt(numer.value);
    let cifrar = cipher.decode(offset,texCifrar);
    resultado.value =cifrar;
});
limpiar.addEventListener('click', () => {
    texto.value ="";
    numer.value ="";
    resultado.value ="";
    cifrar.value ="";
    decifrado.value ="";

});

iniciar.addEventListener('click',() =>{
    primeraPantalla.classList.toggle("ocultar");
    segundaPantalla.classList.toggle("ocultar"); 
             
             
});
 




