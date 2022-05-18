/* javascript es Multiparadigma y tambien su tipado es debil y dinamico, se puede pasar de un string a numero al cambiar una misma variable ejemplo 
variable='nombre' 
variable=3 */

/* tipo dinamico entiende que si la variable contiene un tipo string, o un numero, o un booleano */

/* tipos primitivos en javascript son inmutables */

let numero = 2
"string"
true false //booleano
undefined
null

/* objetos mutables arrays, objetos etc*/

const persona ={
    nombres: ['diego', 'nicolas'],
    apellidos: ['alvarez','cabezas'],
    edad: '29',
    sexo:'masculino',
}
//para acceder al valor de las Propiedades del objeto
/* se puede ir concatenando ejemplo en "nombres" y "apellidos" dentro de un array */

    console.log (persona.nombres [1])
    console.log (persona.apellidos [0])
//al momento de llamar a la propiedad del objeto podemos acceder a la concatenacion usando el posicionamiento del array dentro del objeto persona y el valor de nombres y apellidos
//seria con el nombre del objeto '.' y nombre de la propiedad

/* los ARRAYS se hacen cn cochetes [] y los objetos con llaves {} ambas se usan con ',' para separar los 'componentes' */

/* al estar concatenando un arrays cn otro no se puede lograr ya que es una constante, hay que hacer una copia de esta variable en este caso 'list' a 'anotherList' dando a entender que es otra lista */

const list = []
const anotherList = list.concat(157)
list.push(157)



/* declarar una variable let y const */

let firstName ='Diego'
const anioNaciomiento = 1992
var estoNoSeUsa = true

console.log (firstName)
let firstName='nicolas'
console.log(firstName)

/* scope se crean con {let variable=true}se declara y solo se puede llamar de dentro del scope */


/* FUNCIONES */
//AQUI declaramos la funcion 'op1,op2' son los parametros de esta funcion.
//se abre cn {} y la funcion esta dentro de estos
const sumar=(op1,op2) =>{
    console.log(op1)
    console.log(op2)
    return op+op2
}
//ahora para utilizar la funcion hay que usar la variable declarada anterior mente en la funcion

//ejecuta la funcion y lo que devuelve se puede guardar en una variable, o hacer un console log para ver

const resultado = sumar(2, 2)
console.log (resultado)

// ALGO LOGICO**** para poder ver el resultado hay que crear una variable cn esta operacion, en este caso "const resultado = sumar(2, 2)"

/*  HAY UNA GRAN DIFERENCIA ENTRE PARAMETRO Y ARGUMENTO AL MOMENTO DE UTILZIAR UNA FUNCION */

//tambien podemos declarar en una variante los argumentos y llamarlos desde el () como ve aqui abajo

const sumar= (a,b) =>{
    console.log (a)
    console.log (b)
    return a + b
}

let op1 = 10
let op2 = 12

console.log(sumar(op1, op2))

