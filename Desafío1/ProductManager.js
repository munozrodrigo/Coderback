class ProductsManager {

    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){

        let ExisteCode = this.products.find(u=>u.code===code)
        if(ExisteCode){
            console.warn(`Code: ${code} ya existe, por favor cambie el código o NO se mostrará el último producto.`);
            return
        }

        let id = 1
        if(this.products.length > 0){
            id = this.products[this.products.length-1].id + 1;
        }
        
        let elementos = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
        }

        this.products.push(elementos);
        // this.products.push(elementos = {id: 15, title: 'Office 365', description: 'Oficinas', price: 35.000 , thumbnail: 'Productos/Ofimática', code: 1233456, stock: 1});
        return
    }

    getProducts(){
    return this.products;
    }

    getProductById(id){
        let indice = this.products.findIndex(producto=>producto.id===id)//Para que el id de producto sea exactamente igual al Id que me llega por parámetro
        if(indice===-1){
            console.log(`No existe el producto con id ${id}`)
            return
        }
        return this.products[indice];
    }

}

let productManager = new ProductsManager();
productManager.addProduct('Filmora', 'Wondershare', 10.300 , 'Productos/Video', 123456, 85);
productManager.addProduct('AdobeXD', 'Ilustraciones', 11.500 , 'Productos/Diseño', 1234567, 12);
productManager.addProduct('AutoCAD', 'Civil', 7.500 , 'Productos/Ingeniería', 456789, 22);

console.log(productManager.getProducts());
console.log(productManager.getProductById(1));