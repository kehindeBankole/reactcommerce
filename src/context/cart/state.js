import React , { useReducer } from 'react'
import {cartReducer} from './reducer'
import {CartContext} from './context'
function Cartstate(props) {
    const initState={
 load:true
    }
    const [state, dispatch] = useReducer(cartReducer, initState)
    return (
      <CartContext.Provider value={{
          load:state.load
      }}>
          {props.children}
      </CartContext.Provider>
    )
}

export default Cartstate
