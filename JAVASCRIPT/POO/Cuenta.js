/**
 * Pilares de POO
 * 
 * Abstraccion: Extraemos lo mas relevante para trabajar con la clase
 * Encapsulamiento: Encapsula, cierra el nivel de acceso de los atributos
 * y metodos (public, protected, private) en JS solamente (public, private (#))
 * 
 * public => tenemos acceso dentro de la clase, fuera de la clase, clases hijas
 * Herencia
 * Polimorfismo
 */
class Cuenta{
    //asignacion de atributos
    tipo_cuenta
    tipo_moneda
    nombre
    numero_cuenta 
    #saldo //asignando atributos privados
    #pin
    
    //metodo constructor => inicializamos los atributos del objeto
    constructor(nombre, tipoCuenta, tipoMoneda, numeroCuenta){
        this.nombre = nombre;
        this.tipo_cuenta = tipoCuenta;
        this.tipo_moneda = tipoMoneda;
        this.numero_cuenta = numeroCuenta;
    }

    //creando metodo set y get para el atributo saldo
    //capturamos el saldo
    set capturarSaldo(cantidad){ //20
        //el this hace referencia a los atributos y metodos
        this.#saldo = cantidad;
    }

    //imprimos el atributo privado
    get imprimirSaldo(){
        return "Abristes tu cuenta con $" + this.#saldo;
    }

    set capturarPin(pin){
        this.#pin = pin;
    }

    get imprimirPin(){
        return "Tu PIN es " + this.#pin;
    }

    //metodo para validar deposito
    depositar(cantidad){
        //depositar de 1.00 en adelante, maximo son 3000
        if(cantidad >= 1 && cantidad <= 3000){
            this.#saldo += cantidad;
            return "Depositaste $" + cantidad + ", tu saldo actual es de $" + this.#saldo;
        }else{
            return "Por favor deposita entre $1.00 a $3,000";
        }
    }

    //hacer el metodo retirar
    //$10 en adelante y condicionar que el retiro sea menor al saldo

    //metodo para retornar toda la informacion de la cuenta
    resumen(){
        return "<b>Nombre del propietario</b> " + this.nombre + "<br><b>Numero de Cuenta</b> "+ this.numero_cuenta + "<br><b>Tipo de Cuenta</b> " + this.tipo_cuenta + "<br><b>Tipo de Moneda</b> " + this.tipo_moneda; 
    }
}

//instancia: es el llamado de la clase
let cuenta1 = new Cuenta("Kenia Paiz","Cuenta de Ahorro","Local","250078998943");

document.write(cuenta1.resumen());
document.write("<br>");
//llamando al metodo set de saldo
cuenta1.capturarSaldo = 50;
//imprimiendo en html el metodo get de saldo
document.write(cuenta1.imprimirSaldo);
document.write("<br>");
document.write(cuenta1.depositar(230.50));



