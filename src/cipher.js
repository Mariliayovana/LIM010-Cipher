window.cipher = { 
  encode: (offset, string) => {

    let cifra ="";

    for (let i=0; i<string.length; i++){
    let asciNum = string[i].charCodeAt();
    let ejecutar = ((asciNum-65) + offset) % 26 + 65
    let letra = String.fromCharCode(ejecutar)
    cifra += letra;
  }
    return cifra; 
  },
  decode: (offset, string) => {
    let cifra ="";
    for (let i=0; i<string.length; i++){
      let asciNum =string[i].charCodeAt();
      let ejecutar = ((asciNum-90) - offset) % 26 + 90
    let letra = String.fromCharCode(ejecutar)
  cifra +=letra;
    }
    return cifra;
  }
};
