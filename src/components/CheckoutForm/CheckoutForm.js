import React, { useState } from 'react'


const CheckoutForm = (onConfirm) => {

    const [nombre, setNombre] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    const handleConfirm = (event) => {

        event.preventDefault()

        const userData = {

            nombre, phone, email


        }
        onConfirm(userData)

    }

  return (
    <div className='container'>
        <form onSubmit={handleConfirm} className= 'Form'>
            <label className='Label'>
                Nombre
                <input
                className='Input'
                type='text'
                value={nombre}
                onChange={({target}) => setNombre(target.value)} 
                />
            </label>
            <label className='Label'>
                Telefono
            <input
            className='Input'
            type='text'
            value={phone}
            onChange={({target}) => setPhone(target.value)}
            />

            </label>
            <label className='Label'>
                Email
            <input
            className='Input'
            type='text'
            value={email}
            onChange={({target}) => setEmail(target.value)}
            />

            </label>

            <div className='Label'>
                <button type='submit' className='Button'> Crear orden</button>
            </div>
        </form>



    </div>
  )
}

export default CheckoutForm