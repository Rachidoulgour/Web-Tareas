const muestrafecha = () =>{
//arreglo de los meses
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];

//arreglo de los dias
let dias_de_la_semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

let today = new Date();
let day   = today.getDate();
let month = today.getMonth();
let year  = today.getYear();
let dia = today.getDay();
if (year < 1000) {year += 1900; }

// mostrar la fecha 
return( "Hoy es " + dias_de_la_semana[dia] + ", " + day + " de " + meses[month] + " del " + year);
}
