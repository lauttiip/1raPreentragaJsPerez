alert(" Bienvenido a Lauti´s Quiezzes")

let nombreUser = String(prompt("Antes de empezar vamos a necesitar tu nombre"))
let validacionDeNombre = false

do {
    nombreUser = nombreUser.trim()
    if (nombreUser !== "") {
        alert("Buen nombre, ahora si arranquemos " + nombreUser)
        validacionDeNombre = true
        break
    } else {
        alert("nombre incorrecto")
    }
    nombreUser = String(prompt("Introduce de vuelta un nombre"))
} while (true)


let respuesta1
let respuesta2
let respuesta3
function questions() {
    alert("¿Cual es la capital de Argentina?")
    for (let i = 0; i < 4; i++) {

        respuesta1 = prompt(" A: Mendoza\n B: Cordoba\n C: Buenos Aires\n D: Ninguna de las anteriores")
        if (respuesta1 == "c" || respuesta1 == "C") {
            alert("Felicidades respondiste correctamente")
            respuesta1 = true
            break
        } else if (i === 0) {
            alert("Incorrecto, te quedan 2 intentos")
            
        } else if (i === 1) {
            alert("Incorrecto, te quedan 1 intento")
            
        } else if (i === 2) {
            alert("Has perdido en la 1ra pregunta, hay tabla pero a montones. Se te reiniciara solo, tocar enter")
            respuesta1 = false
            break
        }
    }

    if (respuesta1) {
        alert("¿Cual fue el ECMAScript mas importante hasta la fecha?")

        for (let i = 0; i < 4; i++) {
            respuesta2 = prompt(" A: ES8\n B: ES6\n C: ES12\n D: ES5")
            if (respuesta2 == "b" || respuesta2 == "B") {
                alert("Felicidades respondiste correctamente")
                respuesta2 = true
                break
            } else if (i === 0) {
                alert("Incorrecto, te quedan 2 intentos")
            } else if (i === 1) {
                alert("Incorrecto, te quedan 1 intento")
            } else if (i === 2) {
                alert("Has perdido en la 2da pregunta, suerte en la proxima. se te reiniciar todo de vuelta, tocar enter")
                respuesta2 = false
                break
            }
        }
    }
    if (respuesta2) {
        alert("¿Quien se dice que es el PIONERO de la programacion?")

        for (let i = 0; i < 3; i++) {
            respuesta3 = prompt(" A: Ada Lovelace\n B: Grace Hopper\n C: Bill Gates\n D: Alan Turing")
            if (respuesta3 == "a" || respuesta3 == "A") {
                alert("Felicidades respondiste correctamente")
                respuesta3 = true
                break
            } else if (i === 0) {
                alert("Incorrecto, te quedan 2 intentos")
            } else if (i === 1) {
                alert("Incorrecto, te quedan 1 intento")
            } else if (i === 2) {
                alert("Has llegado lejos, pero no lo suficente, volveras a hacer todo de vuelta. Suerte y toca enter")
                respuesta3 = false 
                break
            }
        }
    }
}

let respuestaMath1
let respuestaMath2 
function questionsMath() {
    
    alert("Juan tiene 5 pelotas. Su amigo Nacho le da 3 pelotas más. Luego, Juan le da 2 pelotas a su amiga Ana. ¿Cuántas pelotas tiene Juan ahora?")

    for (let i = 0; i < 3; i++) {
        respuestaMath1 = prompt(" A: 2\n B: 6\n C: 4\n D: 5")
        if (respuestaMath1 == "b" || respuestaMath1 == "B") {
            alert("Felicidades respondiste correctamente")
            respuestaMath1 = true
            break
        } else if (i === 0) {
            alert("Debido a que no pudiste hacer esa simple ecuacion te vamos a proporcionar una calculadora, te quedan 2 intentos, una pista suma y resta")
            usarCalculadora()
            
        } else if (i === 1) {
            alert("Incorrecto, te quedan 1 intento")
            
        } else if (i === 2) {
            alert("Perdiste, ni con calculadora pudiste, te recomendamos que tomes clases de matematicas. Se reinicia tocando enter.")
            respuestaMath1 = false
            
        }
    }

    if (respuestaMath1) {
        alert("Felicidades llegaste a la ultima pregunta, tu premio se te dira al responder correctamente")
        alert("Ana tiene 12 galletas. Ella decide dar 3 galletas a cada uno de sus 4 amigos. Después, recibe 8 galletas más de su mamá. Luego, decide dividir todas sus galletas restantes en partes iguales entre ella y su hermana. ¿Cuántas galletas recibe cada una al final?")
        for (let i = 0; i < 3; i++) {
            respuestaMath2 = prompt(" A: 3\n B: 2\n C: 4\n D: 6")
            if (respuestaMath2 == "c" || respuestaMath2 == "c") {
                alert("Felicidades respondiste correctamente, tu premio es un abrazo y un beso")
                respuestaMath2 = true
                break
            } else if (i === 0) {
                alert("Te quedan dos intentos, si le erras otra vez te proporcionamos una calculadora 'temporal'")
                
            } else if (i === 1) {
                alert("Incorrecto, te quedan 1 intento, ahora si te dejamos una calculadora para que pienses y nuevamente el problema para que lo leas")
                usarCalculadora()
                
            } else if (i === 2) {
                alert("Perdiste, para que te vayas mas triste, el premio era 1 bitcoin transferido a tu wallet preferida. Si reinicias el premio cambiara")
                
                break
            }
        }
    }

}

function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case 1:
            return num1 + num2
        case 2:
            return num1 - num2
        case 3:
            return num1 * num2
        case 4:
            return num1 / num2
        
        default:
            alert("no introdujo ninguna operacion")
            break
    }
}

function usarCalculadora() {
    let operacion = Number(prompt("Que desea?\n 1: sumar 2: restar 3: multiplicar  4: dividir 5: salir"))
    while (operacion !== 5){
        let numero1 = Number(prompt("Ingresar primer numero"))
        let numero2 = Number(prompt("Ingresar segundo numero"))
        let resultado = calculadora(numero1, numero2, operacion)
        alert("el resultado es " + resultado)
        operacion = Number(prompt("Que desea?\n 1: sumar 2: restar 3: multiplicar  4: dividir 5: salir"))
    }
}


if (validacionDeNombre) {
    questions()
    while (!respuesta1) {
        questions()
    }
    while (!respuesta2) {
        questions()
    }
    while (!respuesta3) {
        questions()
    }
    if (respuesta3) {
        questionsMath()
        while (!respuestaMath1) {
            questionsMath()
        }
        while (!respuestaMath2) {
            questionsMath()
        }
    } 
    if (respuestaMath2) {
        alert("MUCHAS GRACIAS POR PARTICIPAR, proximamente se hara su aplicacion web.")
    }
}


