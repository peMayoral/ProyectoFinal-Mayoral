# Proyecto Final de Pedro Mayoral - fullFirebase
### Curso de React comision 47180

## Desquiciados x el Picor

Basado en Locos x el Picante :)
https://www.locosxelpicante.com/

### LEER

El presente proyecto tiene dos variaciones, distribuidas en dos ramas distintas de Git: 

- [La rama main en Github](https://github.com/Pedro-Mayo/ProyectoFinal-Mayoral/tree/main)
- [El deploy en Vercel de main](https://proyecto-final-mayoral.vercel.app/)

-------------------------------------

- [La rama fullFirebase en Github](https://github.com/Pedro-Mayo/ProyectoFinal-Mayoral/tree/fullFirebase)
- [El deploy en Vercel de fullFirebase](https://fullfirebase-proyectofinal-mayoral.vercel.app/)


El proyecto pedia que en cada carga se acceda a la lista de items de Firebase, y que al acceder al detalle de algun item o a alguna categoria se haga un query respectivo.
Esto me parecio poco eficiente ya que habia que volver a cargar los mismos datos en cada cambio de pantalla y generar una query de datos que ya se poseen, por lo que de ahi surge esta separacion de ramas.

En **main** implemente la carga de la lista de productos en un contexto, por lo que despues de la carga inicial de la pagina la lista de productos se encuentra "cacheada" por lo que dure la sesion. El detalle de los items surge de buscar el item en esta misma lista, por lo que no se usan querys de firebase.

En **fullFirebase** se encuentra implementado lo pedido, se llama a firebase en cada carga, y se usan querys para los items y las categorias
 
### Detalle de los archivos

- NavBar (Barra de navehacion) - Ruteado siempre
    - CartWidget (Widget del carrito)
- Item List Container - Ruteado en el index y en /category/:categoryId
    - Loading (Pantalla de Carga)
    - ItemList (Lista de los items)
        - Item (Item particular de la lista)
- Item Detail Container (Implementa logica de carga y ruteado de la pantalla de detalle del item) - Ruteado en /item/:id
    - Loading
    - Item Detail (vista de los detalles)
        - Price (formatea el precio segun si  hay descuento o no)
        - Item Count (control de unidades)
- CartListContainer (Contenedor del brief del carrito, avisa si esta vacio) - Ruteado en /cart/
    -Brief (display de los items del carrito, boton para vaciarlo y boton para el checkout)
- Checkout (logica de compra, envia datos a firebase y muestra el id de la compra) - Ruteado en /checkout/
    - Loading


#### Contexts
- CartContext: Contexto del carrito, su manejo y guardado en localstorage
- ProductContext: proveedor de contexto de los productos cargados desde firebase
