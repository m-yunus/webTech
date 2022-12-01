import React,{createContext,useReducer} from 'react'


export const ThemeContext=createContext();
const Initialstate ={darkmode:false}

const ThemeReducer=(state,action)=>{

    switch(action.type){
        case "toggle":
            return {darkmode: !state.darkmode};
            default:
                return state
    }

 

}
export const ThemeProvider =(props)=>{
const [state,dispatch]=useReducer(ThemeReducer,Initialstate)
return(
    <ThemeContext.Provider  value={{state,dispatch}}>
        {props.children}
    </ThemeContext.Provider>
)
}