import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function ShoppingCart(){
let number = 1

    return(
        <div className='d-flex align-items-center'>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>{number}</p>
        </div>
    )
}
export default ShoppingCart;

