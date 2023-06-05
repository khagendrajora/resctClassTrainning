import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Game from '../Game'

const NavTest = () => {
    const cartdata = useSelector(store => store.cart)
    const dispatch = useDispatch()
    const add = () => (
        dispatch({ type: 'ADD_ITEM' })
    )
    const subtract = () => (
        dispatch({ type: 'REMOVE_ITEM' })
    )
    return (
        <>
            <h1 className='text-success'>
                The number of items in the cart is {cartdata.cartcount}
            </h1>
            <button className='btn btn-warning px-5 rounded-pill' onClick={add}>+</button>
            &nbsp;
            <button className='btn btn-danger px-5 rounded-pill' onClick={subtract}>-</button>
            <hr/>
            <Game/>
        </>
    )
}

export default NavTest