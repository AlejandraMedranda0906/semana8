//Crear la función denominada "validarTaxi" que reciba un objeto literal con varios atributos, 
//incluido el año de fabricación.
// Luego, calcular la vida útil del taxi y, si es menor a 10 años, devolver true; de lo contrario, devolver false.



`use stric`

let vehiculo={
    make: "CHEVROLET",
    model: "ONIX TURBO RS",
    color: "gris",
    licensePlate: "AMM-0906",
    years: 2023,

  
}

function validarTaxi(vehiculo){
    let currentYear=2023;
    let isUsable=currentYear-vehiculo.years;
    if(isUsable<=10){
        alert("Es util:"  +true);
    } 
    else{
        alert("No es util:"  +false);
    }
}

let result = validarTaxi(vehiculo)