/*Clase que tiene como fin gestionar un conjunto de productos.
Restricciones:
-Debe tener campo "id" automatico, unique y autoincremental.
-El campo "code" debe ser unique.
-Todos los campos son obligatorios
*/

export default class ProductManager {

    constructor() {
        this.products = [];
    }

    /**
     * @param {*} title  @param {*} description  @param {*} price  @param {*} thumbnail  @param {*} code @param {*} stock 
     * @returns true en caso de que se hayan cargados todos los atributos, false caso contrario.
     */

    validate = (title, description, price, thumbnail, code, stock) => title && description && price && thumbnail && code && stock;

    /**
     * @param {*} code codigo del producto a buscar en la lista de productos.
     * @returns devuelve el objeto en caso de coincidir el code
     */

    existCode = (code) => this.products.find(product => product.code === code);

    /**
     * @param {*} searchId del producto a buscar en la lista de productos
     * @returns objeto o undefinded
     */

    getProduct = (searchId) => this.products.find(product => product.id === searchId);

    /**
     * @returns listado de todos los productos 
     */

    getProducts = () => this.products;


    /**     
     * @param {*} searchId id del producto a buscar
     * @returns producto en caso de encontrarlo, sino error.
     */

    getProductById(searchId) {
        const result = this.getProduct(searchId);

        if (!result) {
            return console.error('Not found.');
        }

        return console.log(result);
    }


    /**
     * @param {*} title  @param {*} description  @param {*} price  @param {*} thumbnail  @param {*} code  @param {*} stock 
     * @returns se agrega un nuevo producto al listado o devuelvo algun error
     */

    addProduct = (title, description, price, thumbnail, code, stock) => {

        if (!this.validate(title, description, price, thumbnail, code, stock)) {
            return console.error('Debe llenar todos los campos, son obligatorios.');
        }

        if (this.existCode(code)) {
            return console.error('El codigo ingresado ya existe.')
        }


        const product = {
            id: !this.products.length ? 1 : this.products[this.products.length - 1].id + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        return this.products.push(product);
    }

}


