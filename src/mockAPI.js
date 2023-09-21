export default function mockAPI(itemId) {

    let selectedDelay = 2000;

    const productos = [
        {
            id: "00", title: "Pizza Congelada de Muzzarella x2u", description: "Pack de 2 pizzas congeladas de muzzarella. 940gr",
            category: "comidaCongelada", price: 8, stock: 10, pictureUrl: "https://static.cotodigital3.com.ar/sitios/fotos/large/00066700/00066715.jpg", oferta: 10
        },

        {
            id: "01", title: "Cerveza Quilmes 500cc", description: "Cerveza Rubia Quilmes x1u. 500cc",
            category: "bebidas", price: 3, stock: 24, pictureUrl: "https://static.cotodigital3.com.ar/sitios/fotos/large/00564000/00564002.jpg"
        },
        {
            id: "02", title: "3 Empanadas Congeladas", description: "Pack de 3 empanadas congeladas de JyQ. 300gr.",
            category: "comidaCongelada", price: 6, stock: 8, pictureUrl: "https://static.cotodigital3.com.ar/sitios/fotos/large/00044700/00044722.jpg"
        },
        {
            id: "03", title: "Coca Cola 1.5lts", description: "Coca Cola sabor Original de 1.5lts",
            category: "bebidas", price: 5, pictureUrl: "https://static.cotodigital3.com.ar/sitios/fotos/large/00016200/00016202.jpg", oferta: 5
        },
        {
            id: "04", title: "Agua Mineral Villavicencio 500cc", description: "Agua mineral sin gas Villavicencio. 500cc",
            category: "bebidas", price: 2, pictureUrl: "https://static.cotodigital3.com.ar/sitios/fotos/large/00011700/00011779.jpg"
        },
        {
            id: "05", title: "Nuggets de Pollo congelados", description: "Bolsa de Nuggets congelados. 750gr",
            category: "comidaCongelada", price: 10, pictureUrl: "https://static.cotodigital3.com.ar/sitios/fotos/large/00012500/00012524.jpg"
        },
        {
            id: "06", title: "Torta Red Velvet", description: "Torta Red Velvet de 8 porciones",
            category: "comidaPreparada", price: 9, pictureUrl: "https://cdn.buenavibra.es/wp-content/uploads/2019/05/10154830/Webp.net-resizeimage-2020-03-10T154107.737-1-1170x600.jpg"
        },
        {
            id: "07", title: "Hamburguesa con queso para llevar", description: "Hamburguesa con queso para llevar en el momento",
            category: "comidaPreparada", price: 6, pictureUrl: "https://tse3.mm.bing.net/th?id=OIP.dO-ucHLbxUSRLqeyDmMIKwHaHa"
        },
        {
            id: "08", title: "Docena de medialunas", description: "Docena de medialunas de manteca",
            category: "comidaPreparada", price: 8, pictureUrl: "https://www.lavicentelopez.com.ar/vl2/wp/wp-content/uploads/2018/02/productos__0020_Medialunas-de-manteca.jpg", oferta: 15
        }
    ];



    if(itemId){
        const productoElegido = productos.find((elemento)=>elemento.id===itemId);

        return new Promise((resolve, reject)=>{
            return setTimeout(
                () => resolve(productoElegido), selectedDelay)
        })
        
    }

    return new Promise((resolve, reject)=>{
        return setTimeout(() => resolve(productos), selectedDelay)
    })
}