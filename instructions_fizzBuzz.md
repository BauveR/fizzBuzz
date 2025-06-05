# FizzBuzz con Manipulación del DOM

## Descripción

Este ejercicio tiene como objetivo evaluar tus conocimientos sobre JavaScript, manipulación del DOM y control de errores con try...catch. Implementarás el clásico problema de "FizzBuzz" con una interfaz web donde el usuario podrá ingresar un número y recibir la respuesta en pantalla.

## Funcionalidades

* Crear una página HTML con un campo de entrada (input) para recibir un número, un botón para procesarlo y una sección donde se muestren los resultados
* Validar que el usuario solo pueda ingresar números.
* Al presionar el botón, mostrar el resultado en pantalla según las reglas de FizzBuzz.
* Se mantiene un historial de los valores ingresados y sus respectivos resultados.

## Criterios de Aceptación

* *Funcional*: Si el número ingresado es divisible por 3, se muestra Fizz.
* *Funcional*: Si el número ingresado es divisible por 5, se muestra Buzz.
* *Funcional*: Si el número ingresado es divisible por 3 y 5, se muestra FizzBuzz.
* *Funcional*: Si el número ingresado no es divisible ni por 3 ni por 5, se muestra el número mismo.
* *Funcional*: Si el usuario ingresa un valor no numérico, se debe mostrar un mensaje de error.
* *Funcional*: Se muestra en pantalla un historial con los valores ingresados y sus resultados.
* *Técnico*: Guardar cada número ingresado en un objeto junto con su resultado.
* *Técnico*: Manejar errores usando `<span>try...catch</span>`.
* *Técnico*: implementar una estructura de retorno con el siguiente formato:

  ```javascript
  {
  	status: "", // Código indicando éxito o error
  	message: "", // Mensaje
  	data: {
  		number: 0, // Número evaluado
  		result: "" // Resultado esperado
  	}
  }
  ```

## Casos de prueba (formato Gherking)

### Feature: Validación de FizzBuzz

#### Scenario: Número divisible por 3

    Given un número 9
    When el número es procesado
    Then se muestra "Fizz"

#### Scenario: Número divisible por 5

    Given un número 10
    When el número es procesado
    Then se muestra "Buzz"

#### Scenario: Número divisible por 3 y 5

    Given un número 15
    When el número es procesado
    Then se muestra "FizzBuzz"

#### Scenario: Número no divisible por 3 ni 5

    Given un número 7
    When el número es procesado
    Then se muestra "7"

#### Scenario: Entrada no numérica

    Given una entrada "Hola"
    When el usuario intenta procesar la entrada
    Then se muestra un mensaje de error

#### Scenario: Historial de entradas

    Given un número 9 y un número 10
    When el usuario los ingresa secuencialmente
    Then el historial muestra "9: Fizz" y "10: Buzz"

## Estructura de archivos

// fizzbuzz-project-structure
│── index.html          # Estructura HTML
│── /js
│   ├── dom.js          # Manipulación del DOM
│   ├── fizzbuzz.js     # Lógica de FizzBuzz
│   ├── events.js       # Manejo de eventos
│── /css
│   ├── styles.css      # Estilos opcionales

│── /test
│   ├── fizzBuzz.test.js    # Tests de la lógica
│   ├── dom.test.js      # Tests de la interfáz
│   ├── events.test.js      # Tests de las interacciones

¡Buena suerte! 🚀
