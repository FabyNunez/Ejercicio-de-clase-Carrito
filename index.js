class carrito {
    constructor({productos, importe, usuario}){
    this.productos = [];
    this.importe = importe;
    this.usuario = usuario;}

    agregarproducto = (producto) => {
        this.productos.push(producto)
        this.importe= (this.importe + producto.precio)
    }
    
}



class producto {
    constructor({precio, nombre, ID}){
    this.precio = precio;
    this.nombre = nombre;
    this.ID = ID;}
}





const papasFritas= new producto ({
    precio: 125,
    nombre: "lays",
    ID:1,
    }
    )
 
    console.log(papasFritas)



const carritoFabiana = new carrito ({importe: 0, usuario: 'fabiana'})

carritoFabiana.agregarproducto(papasFritas)
carritoFabiana.agregarproducto(papasFritas)
carritoFabiana.agregarproducto(papasFritas)
console.log(carritoFabiana)

