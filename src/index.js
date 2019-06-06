const resultado = document.getElementById("conclusion");
const limpiar = document.getElementById("btn4");
const iniciar = document.getElementById("btn5");

const primeraPantalla = document.getElementById("pantallaUno");
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
       alert('usuario denegado');
}
}); 

const segundaPantalla = document.getElementById("pantallaDos");
const cifrar = document.getElementById("btn2");
cifrar.addEventListener('click',()=>{
const texto = document.getElementById("texto").value;
const numer = document.getElementById("numero").value;
console.log("texto", texto);
console.log("numero", numer);
});

const decifrado = document.getElementById("btn3");
decifrado.addEventListener('click',()=>{ 
const texto = document.getElementById("texto").value;
const numer = document.getElementById("numero").value;
console.log(texto);
console.log(numer);
});


