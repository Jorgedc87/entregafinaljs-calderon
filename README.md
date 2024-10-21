# Entregable 3 - Final - Semana 10

## Descripción
Simulador de compra de pasajes. Como segunda etapa, existirán varios destinos, con valor único y un descuento por compra **Ida y Vuelta**. Se agregará la posibilidad de comprar más de un pasaje y verlo reflejado en el Dom, e incluso poder ver los pasajes en otra pestaña.

Se intenta seguir con las **buenas prácticas**, definiendo **variables** y **funciones**, y luego utilizándolas en una función principal que es llamada al presionar el botón **comprar**.

## Aclaración importante

Decidí hacer una **entrega2** lo más detallado posible, sabiendo que aun falta el tema de asincronismo, peticiones, promesas y librerías, para tener que hacer la menor cantidad de cosas más adelante. De igual manera, al observar como quedó el proyecto, posiblemente tenga que reacomodar mil cosas después, pero creo que cumple con la entrega correctamente.

Se agregaron, a diferencia de la preentrega 2: 

- Validaciones (valida minimamente el formulario)
- Asincronismo (ya tenía, al "cargar más" tarjetas de destinos), pero de igual manera se agregó asincronismo también en SweetAlert y algun lugar más.
- Fetch local (como no se me ocurría como hacer un fetch web, hice uno local, en fetchTravelPoints, en app.js)
- Librería: Usé SweetAlert2 para la confirmación de compras y las validaciones.

## Tecnologías

- HTML
- CSS
- TailwindCSS
- Javascript
- SweetAlert2

## Scope

### El usuario podrá: 

- Ver todos los paquetes disponibles
- Elegir cantidad de pasajes.
- Iniciar la compra
- Completar formulario y seleccionar si es ida y vuelta
- Ver resumen de compra
- Confirmar compra al final.
- Visualizar los pasajes al finalizar.

## Validaciones

Se validan que los campos se completen, y se hacen mínimas validaciones en cada uno (pudiendo mejorarse a futuro).

## Comentarios

- Se colocaron diferentes comentarios en el código **HTML** y en el código **JS** para mejor entendimiento.

- Se utiliza localStorage para: Guardar los "pasajeros" con toda la información de los pasajes, y luego cargarlos y utilizarlos en la vista de **Tus Pasajes**.

- Utilicé clases para la creación de Passengers (pasajeros). Luego se guardan en un array de objetos/clases.

- Funcionalidades agregué bastantes.

- Para poder utilizar los imports y exports de js, se agregó **type="module"** en el script y funciona correctamente.

- Se agregó fetch, librería SweetAlert2, validaciones y asincronismo.

- El error que me indicó de currentData lo resolví pero luego al agregar el fecth, quedó aun mejor.

## Versión

- **Entregable:** v3.0 
- **Fecha de entrega:** 21/10/2024
- **Autor:** Jorge Calderón