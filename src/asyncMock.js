const products = [

    {
        id: "1", nombre: "telefono celular", price: 3000, category: "celulares",
        img: ' https://loquierocel.com.ar/wp-content/uploads/2022/10/iPhone_12_purple1.jpg', stock: 25, description: "caracteristicas del telefono"
    },

    {
        id: "2",
        nombre: "telefono celular",
        price: 100,
        category: "celulares",
        img: ' https://www.latercera.com/resizer/X1NY0frODhaiaAlIZE08Y052B4E=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/B64QZKKY6NBJ3PWB3IXRD6SMOA.jpg',
        stock: 5,
        description: "caracteristicas del telefono"
    },

    {
        id: "3",
        nombre: "telefono celular",
        price: 1500, category: "celulares",
        img: ' https://s3-sa-east-1.amazonaws.com/saasargentina/NCshkgB2x9kyeJGXbxrt/imagen',
        stock: 15,
        description: "caracteristicas del telefono"
    }


]

export const getProducts = () => {

    return new Promise((resolve) => {
        resolve(products)
    }, 500)

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