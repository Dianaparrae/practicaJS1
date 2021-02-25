//|| es o y && es y
// Ejercicio día de la semana
//Creamos variable para almacenar el dia a la semana
let dia = prompt("Ingresa un dia a la semana");
// Convertir lo que el usuario en minusculas
dia = dia.toLowerCase();
//Validamos el dia si es entre semana o fin de semana
if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "miércoles" || dia == "jueves" || dia == "viernes") {
    alert("Es un día entre semana");
} else {
    if (dia == "sabado" || dia == "sábado" || dia == "domingo") {
        alert("Es un día de fin de semana");
    } else {
      alert("Por favor ingresar un dia de la semana")  
    }
    
}

/**
 * 1 - Que pasa si no escriben nada
 * 2 - Que pasa si usan mayusculas
 * 3 - Que pasa si escribe otra cosa que no es
 * 4 - Tildes
 */