import React , { useReducer } from 'react'
import {userReducer} from './reducer'
import {UserContext} from './context'
function Userstate(props) {
    const initState={
 load:true
    }
    const [state, dispatch] = useReducer(userReducer, initState)
    return (
      <UserContext.Provider value={{
          load:state.load
      }}>
          {props.children}
      </UserContext.Provider>
    )
}

export default Userstate
