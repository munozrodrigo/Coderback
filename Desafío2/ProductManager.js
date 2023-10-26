const fs = require('fs');
const archivo = "./archivo.txt"

class ProductsManager {

//Debe agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos
    constructor(){
        this.products = [];
        this.path = "./recursos..txt";
    }
    //Guardar como un array en el archivo
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
        return
    }
    //Leer el archivo de productos y devolver todos los productos en el formato de arreglo. GUARDAR COMO UN ARRAY en el archivo
    getProducts(){
    return this.products;
    }
    //Devolverlo en el formato objeto
    getProductById(id){
        let indice = this.products.findIndex(producto=>producto.id===id)//Para que el id de producto sea exactamente igual al Id que me llega por parámetro
        if(indice===-1){
            console.log(`No existe el producto con id ${id}`)
            return
        }
        return this.products[indice];
    }
    //Debe recibir Id de priducto a actualizar (NO DEBE BORRARSE SU ID)
    updateProduct(){

    }
    //Recibe Id y debe eliminar el producto que tenga ése Id.
    deleteProduct(){

    }
}

let productManager = new ProductsManager();
productManager.addProduct('Filmora', 'Wondershare', 10.300 , 'Productos/Video', 123456, 85);
productManager.addProduct('AdobeXD', 'Ilustraciones', 11.500 , 'Productos/Diseño', 1234567, 12);
productManager.addProduct('AutoCAD', 'Civil', 7.500 , 'Productos/Ingeniería', 456789, 22);

//console.log(productManager.getProducts());
//console.log(productManager.getProductById(1));

let texto1 = console.log(productManager.getProducts());

//Graba un archivo de manera síncrona
//28' GRABA EN EL recurso.txt
fs.writeFileSync(archivo, texto1, {encoding: "utf-8"})

//Leer un archivo Parámetros(archivo a leer y codificación)
let lectura = fs.readFileSync(archivo, "utf-8");
//console.log(lectura);

//Modificar archivo
fs.appendFileSync(archivo, "\n\nEditorial Planeta")

//Eliminar archivo
setTimeout(() => {
    fs.unlinkSync(archivo)
},2000)
