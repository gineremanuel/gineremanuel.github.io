let actualAge = parseInt(prompt("Cual es tu Edad?"));

if(actualAge < 18 ) console.log("No puedes entrar al sistema");
else if(actualAge >= 18 && actualAge < 21) console.log("Necesitas verificacion por tarjeta de credito");
else if(actualAge >= 21) console.log("Puedes ingresar sin problemas");
else console.log("Ingrese una edad valida");