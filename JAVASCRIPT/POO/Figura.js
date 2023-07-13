//clase Padre

class Figura{

    calcularArea(){
        return "Calculando el area de las figuras geometricas";
    }
}

//clases hijas => palabra reservada extends
class Cuadrado extends Figura{
    //atributo
    lado

    //constructor => inicializando el objeto
    capturandoLado(lado){
        this.lado = lado;
    }

    //sobreescribir el metodo
    calcularArea(){
        //this.lado = this.lado * this.lado
        this.lado *= this.lado;
        return "El area del cuadrado es " + this.lado;
    }
}

class Circulo extends Figura{

}

class Triangulo extends Figura{
    base
    altura

    capturarValores(base, altura){
        this.base = base;
        this.altura = altura;
    }

    //sobreescribiendo al metodo
    calcularArea(){
        let area = (this.base * this.altura) / 2;
        return "El area del triangulo es " + area;
    }
}

//instanciando una clase hija
document.write("<h1>Comportamiento del padre</h1>");
let circulo = new Circulo();
document.write(circulo.calcularArea());
document.write("<h1>Cambiando el comportamiento del padre</h1>");
let cuadro = new Cuadrado();
cuadro.capturandoLado(6);
document.write(cuadro.calcularArea());
document.write("<h1>Cambiando el comportamiento del padre</h1>");
let triangulo = new Triangulo();
triangulo.capturarValores(8,23);
document.write(triangulo.calcularArea());