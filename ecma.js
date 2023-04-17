/*Realizar una clase “ProductManager” que gestione un conjunto de productos.*/
class ProductManager {

    /*Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.*/
    constructor(products){
        products=[{title:"", description:"", price:"", thumbnail:"", code: "", stock:""}]
    }

    /*Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
Validar que no se repita el campo “code” y que todos los campos sean obligatorios
Al agregarlo, debe crearse con un id autoincrementable
*/
    addProduct = (producto) =>{
        array = []
        array.push(producto)
        if (code == code)
            console.log="No se puede repetir el código del producto"
        else
            producto =+ producto
    }

    /*Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
*/
    getProduct = () =>{
        totalProduct.addProduct = []
    }

    /*Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ningún id, mostrar en consola un error “Not found”
*/
    getProduct = () =>{

    }
}

/*Cada producto que gestione debe contar con las propiedades*/
let productos = [
    {title:"chocolate", description:"Huevo bon o bon", price:"$1,300", thumbnail:"ruta", code: "123123", stock:"35"},
    {title:"chocolate", description:"Huevo Kinder", price:"$1.700", thumbnail:"ruta", code: "456456", stock:"31"},
    {title:"chocolate", description:"Huevo Kofler", price:"$1.450", thumbnail:"ruta", code: "789789", stock:"21"},
];