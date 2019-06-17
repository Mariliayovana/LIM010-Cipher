window.cipher = { 
  encode: (offset, string) => {

    let cifra ="";
    let cifraDe = 0;
    
    for (let i=0; i<string.length; i++){

      if(string.charCodeAt(i) >= 65 && string.charCodeAt(i)<= 90){ //para mayusculas//
        cifraDe = (string.charCodeAt(i)- 65 + offset) % 26 + 65;
      }
      else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i)<= 122){ // para minusculas//
        cifraDe = (string.charCodeAt(i)- 97 + offset) % 26 + 97;
      }
      else if(string.charCodeAt(i) >= 32 && string.charCodeAt(i) <= 64){ //para numeros y signos//
        cifraDe = (string.charCodeAt(i)- 32 + offset) % 33 + 32;
      } 
      else if(string.charCodeAt(i) >= 205 && string.charCodeAt(i) <= 218){  //para la letra Ñ//
        cifraDe = (string.charCodeAt(i)-205 + offset) % 14 + 205;
      }
      else if(string.charCodeAt(i) >= 232 && string.charCodeAt(i) <= 246){
        cifraDe = (string.charCodeAt(i)-232 + offset) % 15 + 232;
      }
      else{
        cifraDe =string.charCodeAt(i);
      } 
      cifra += String.fromCharCode(cifraDe);
  }
    
    return cifra;  
  },
  decode: (offset, string) => {
    let cifra ="";
    let cifraDe = 0;

    for (let i=0; i<string.length; i++){
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 ){  // para mayuscula//
        cifraDe = 90 - (90 - string.charCodeAt(i) + offset) % 26;
      }
      else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122 ){ // para minuscula//

        cifraDe = 122 - (122 - string.charCodeAt(i) + offset) % 26
      }
      else if( string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 64 ){ // para numeros y signos//
        cifraDe= 64 - (64 - string.charCodeAt(i) + offset) % 32;
      }
      else if(string.charCodeAt(i) >= 205 && string.charCodeAt(i) <= 218){
        cifraDe= 218 - (218 - string.charCodeAt(i) + offset) % 14;
      } 
      else if(string.charCodeAt(i) >= 232 && string.charCodeAt(i) <= 246){
        cifraDe= 246 - (246 - string.charCodeAt(i) + offset) % 14;
      }
      else{
        cifraDe = string.charCodeAt(i);
      }
        cifra +=  String.fromCharCode(cifraDe);
    }
  return cifra;
}
};
