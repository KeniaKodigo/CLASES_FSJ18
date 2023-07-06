function AumentoSalario(){
    let Trabajador = prompt ("Ingrese nombre del trabajador: ");
    let Salario = parseFloat( prompt ("Ingrese el salario actual del trabajador: "));
    let Categoria = prompt ("Ingrese la categoria del trabajador en MAYUSCULAS: ");
    let NuevoSalario = 0;
    switch(Categoria){
        case "A":
            NuevoSalario = Salario + (Salario*0.15); //buscar limitarlo a 2 decimales
            document.write("El nuevo salario del trabajador :" + Trabajador + " con categoria A es: "+ NuevoSalario.toFixed(2));
            break;
        case "B":
            NuevoSalario = Salario + (Salario*0.30);
            document.write("El nuevo salario del trabajador :" + Trabajador + " con categoria B es: "+ NuevoSalario);
            break;
        case "C":
            NuevoSalario = Salario + (Salario*0.10);
            document.write("El nuevo salario del trabajador :" + Trabajador + " con categoria C es: "+ NuevoSalario);
            break;
        case "D":
            NuevoSalario = Salario + (Salario*0.20);
            document.write("El nuevo salario del trabajador :" + Trabajador + " con categoria D es: "+ NuevoSalario);
            break;
        default:
            document.write("Por favor ingrese una categoria correcta para el calculo de salario");
    }
}
AumentoSalario();