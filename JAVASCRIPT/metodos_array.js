//foreach
//saber cuantas personas tuvieron mas o igual de 7
//saber cuantas personas tuvieron entre 5 y 6.9 (posibilidad)
//saber cuantas personas tuvieron menos de 5
function verificarNota(){
    let notas = [7,8,6.5,5,4,9,8.2];
    let cont_aprobaron = 0;
    let cont_posibles = 0;
    let cont_reprobaron = 0;
    
    notas.forEach(nota => {
        if(nota >= 7){
            cont_aprobaron++;
        }else if(nota >= 5 && nota < 7){
            cont_posibles++;
        }else{
            cont_reprobaron++;
        }
    })

    document.write("Total de estudiantes que aprobaron: " + cont_aprobaron + "<br>");
    document.write("Total de estudiantes que estan en recuperacion: " + cont_posibles + "<br>");
    document.write("Total de estudiantes que reprobaron: " + cont_reprobaron + "<br>");
}
verificarNota();