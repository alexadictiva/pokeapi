# Fetch API with Promises

## API

[Pókemon]("https://pokeapi.co/api/v2/pokemon/")

## Demo

https://alexadictiva.github.io/pokeapi/

## Tipos de Fetch

- GET
  - Para obtener datos
  - Se usa por defecto
- POST para enviar datos
  - se usa con el metodos headers y otros metodos mas que la pagina necesite para recibir datos
- PUT
- Se usa para actualizar datos en la API
- DELETE
  - Se usa para borrar datos de la API

### En este caso se usará GET

fetch('url')

- si se va a usar funciones tradicionales, la promesa debe RETORNAR algo conel RETURN:

```
fetch("https://pokeapi.co/api/v2/pokemon")
.then(function (respuesta) {
return respuesta.json();
})
.then(function (datosParseados) {
return console.log(datosParseados);
for (let i = 0; i < datosParseados.results.length; i++) {
console.log(i + " " + datosParseados.results[i].name);
});
```

- si se va a usar Arrow Functions no es necesario usar el RETURN:

```
fetch("https://pokeapi.co/api/v2/pokemon")
.then((respuesta) => respuesta.json())
.then((datosParseados) => console.log(datosParseados));
```
