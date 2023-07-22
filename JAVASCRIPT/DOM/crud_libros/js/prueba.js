
let arreglo_libro = [
    {
        codigo: "001",
        titulo:"Clean Code"
    },
    {
        codigo: "002",
        titulo:"Harry Potter"
    },
    {
        codigo: "003",
        titulo:"Algoritmos"
    }
]

arreglo_libro = [
    {
        codigo: "001",
        titulo:"Clean Code"
    },
    {
        codigo: "003",
        titulo:"Algoritmos"
    }
]

arreglo_libro = arreglo_libro.filter(libro => libro.codigo != "002");

edad.find(value => value >= 18); //20
arreglo_libro.find(item => item.codigo == "001"); 


//001

//metodo array = map(), filter(), some(), find()

edad = [2,7,17,20,24,36];

edad.filter(value => value >= 18); //[20, 24, 36]

