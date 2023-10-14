import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import {useParams} from 'react-router-dom'
// import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() =>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
    

    asyncFunc(categoryId)
        
            .then(Response => {
                setProducts(Response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [categoryId])


return(

    <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div>

)

}

export default ItemListContainer