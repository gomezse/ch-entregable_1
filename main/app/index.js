import('../module/ProductManager.mjs')
    .then((module) => {
        const ProductManager = module.default;

        const productManager1 = new ProductManager();

        productManager1.addProduct('producto prueba', 'esto es un producto prueba', 200, "Sin imagen", "abc123", 25);

        // para forzar error de code repetido
        // productManager1.addProduct('producto prueba', 'esto es un producto prueba', 200, "Sin imagen", "abc123", 25);
        // console.log(productManager1.getProducts());


        productManager1.addProduct('producto prueba', 'esto es un producto prueba', 200, "Sin imagen", "abc1234", 25);

        console.log(productManager1.getProducts());

        productManager1.getProductById(1);


        //forzar error de Not found id.
        // productManager1.getProductById(8);


    })
    .catch((error) => {
        console.error('Error en la carga del modulo Product Manager:', error);
    });

