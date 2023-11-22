const products = [

    {
        id: "1",
        nombre: "IPHONE 14",
        price: 1700,
        category: "Celulares",
        img: ' https://loquierocel.com.ar/wp-content/uploads/2022/10/iPhone_12_purple1.jpg',
        stock: 25,
        description: "camara innovadora con mas de 12gb de ram y un espacio de 256gb"
    },

    {
        id: "2",
        nombre: "NOKIA",
        price: 50,
        category: "Celulares",
        img: ' https://www.latercera.com/resizer/X1NY0frODhaiaAlIZE08Y052B4E=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/B64QZKKY6NBJ3PWB3IXRD6SMOA.jpg',
        stock: 5,
        description: "Un ladrillo sirve como defensa personal tal vez llamar"
    },

    {
        id: "3",
        nombre: "SAMSUNG A13",
        price: 1000,
        category: "Celulares",
        img: ' https://s3-sa-east-1.amazonaws.com/saasargentina/NCshkgB2x9kyeJGXbxrt/imagen',
        stock: 15,
        description: "Con 6gb ram y 128gb de espacio"
    },

    {
        id: "4",
        nombre: "PC GAMER I3",
        price: 1200,
        category: "Computacion",
        img: ' https://http2.mlstatic.com/D_NQ_NP_891653-MLA52097494758_102022-O.webp',
        stock: 15,
        description: "Pc gamer completa!"
    },

    {
        id: "5",
        nombre: "PC GAMER I5",
        price: 2500,
        category: "Computacion",
        img: 'https://www.megatecnologia.com.ar/images/1694632072641.jpg',
        stock: 10,
        description: "Pc gamer juga todos tu juegos en 4k!"
    },
    

    {
        id: "6",
        nombre: "PLAYSTATION 5",
        price: 800,
        category: "Consolas",
        img: ' https://olmoshogar.com.ar/wp-content/uploads/2023/08/PS5-STANDARD-3.jpg',
        stock: 15,
        description: "Ps5 + juego de regalo!!"
    }
    

    


]

export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {

            resolve(products)

        }, 500)

    })

}

export const getProductById = (productId) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)


    })

}


export const getProductsByCategory = (category) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500);
    })

}