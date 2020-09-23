import React , {useReducer} from 'react'
import { ProductContext } from './context'
import ProductReducer from './reducer'
function Productstate(props) {
    const initState={
products : []
    }
    const [state, dispatch] = useReducer(ProductReducer, initState)
    return (
        <ProductContext.Provider value={{
            products : state.products
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Productstate
