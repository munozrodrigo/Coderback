const fs = require ('fs');

class ProductManager {
    constructor(rutaArchivo){
        this.path = rutaArchivo;
        //this.rutaArchivo = "./archivos/productos.json";
    }

    getProducts(){
        if(fs.existsSync(this.path)){
            return JSON.parse(fs.readFileSync(this.path, "utf-8"))//Return lo que leo del archivo (pasado por JSON.parse())
        }else{
            return [];
        }
    }

    addProduct(title, description, price, thumbnail, code, stock){

        let productos = this.getProducts()//Aquí obtenemos el array

        //Asigno ID incrementable
        let id = 1
        if(this.path.length > 0){
            id = this.path[this.path.length-1].id + 1;
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
        //Grabo Productos... Antes de salir CON PUSH grabo el archivo.
        productos.push(elementos)

        fs.writeFileSync(this.path, JSON.stringify(productos))//Aquí grabamos un texto

        return
    }

    getProductById(id){
        let indice = this.path.findIndex(producto=>producto.id===id)//Para que el id de producto sea exactamente igual al Id que me llega por parámetro
        if(indice===-1){
            console.log(`No existe el producto con id ${id}`)
            return
        }
        return(this.path, JSON.parse[indice]);
    }
    
}

let productManager = new ProductManager("./archivos/productos.json")
productManager.addProduct('Filmora', 'Wondershare', 10.300 , 'Productos/Video', 123456, 85);
productManager.addProduct('AdobeXD', 'Ilustraciones', 11.500 , 'Productos/Diseño', 1234567, 12);
productManager.addProduct('AutoCAD', 'Civil', 7.500 , 'Productos/Ingeniería', 456789, 22);

console.log(productManager.getProducts());
//console.log(productManager.getProductById(1));