const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con vue',
        frutas: [
            {nombre: 'Pera', cantidad: 0},
            {nombre: 'Manzana', cantidad: 25},
            {nombre: 'Fresa', cantidad: 12}
        ]
    }
});