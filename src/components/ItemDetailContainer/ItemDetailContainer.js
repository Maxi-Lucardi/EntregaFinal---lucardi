import {useState, useEffect } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../Firebase/firebaseConfig'

const ItemDetailContainer = () => {

    const [product, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
      setLoading(true)

      const docRef = doc( db ,"products", itemId)

      getDoc(docRef)
      .then(response =>{
        const data = response.data()
        const productsAdapted = {id: response.id, ...data}
        setProducts(productsAdapted)
      })

      .finally(() => {
        setLoading(false)
      })

    }, [itemId])

    return(
        <div className='ItemDetailConteiner' >
            {loading ? <p> cargando...</p> : <ItemDetail {...product} />}
        </div>
    )

}

export default ItemDetailContainer

