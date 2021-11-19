
## Elementos de manipulacion del DOM

buscar un elemento con un ID `#divBtn`
````
document.querySelector('#divBtn'); 
````

Crear un Elemento, en este caso un boton
````
document.createElement('button'); 
````

En este caso buscamos un elemento con clase .titulo, para insertarle un texto 'Hola'
````
document.querySelector('.titulo').innerText = 'Hola';
````

En este caso igual que el anterior buscamos, pero ahora insertamos un elemento html un 'h1'
````
document.querySelector('.titulo').innerHTML= '<h1>Hola</h1>';
````

En este caso buscamos un elemento con una clase nombrada "carta"
````
document.getElementsByClassName('carta');
````

Al igual que el anterior, pero con ID
````
document.getElementById('cpu-cartas');
````

Es para añadir algo
````
.append
````

## Añadir Clases
Ejemplo usado:
````
btnNew.classList.add(btn);
btnNew.classList.add(btn-primary);
````

#

- Referencia a todas las clases `.classList` 
- Para agregar o cambiar una clase `.classList.toggle()`
````
todoElemento.classList.toggle('completed');
````

- Para comprobar si un elemento contiene una clase `.contains`
````
elemento.classList.contains('completed')
````