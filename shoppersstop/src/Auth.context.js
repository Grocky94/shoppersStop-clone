import { createContext, useEffect, useReducer } from "react"
export const AuthContext = createContext();
const initialValue = { user: null }
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default:
            return state
    }

}
const Authprovider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
   

    const login = (data) => {
        dispatch({
            type: "LOGIN",
            payload: data
        })
    }

    const logout = () => {
        localStorage.removeItem("Current-User")
        dispatch({
            type: "LOGOUT"
        })
    }

    useEffect(() => {
        const allUser = JSON.parse(localStorage.getItem("User"))
        if (allUser) {
            dispatch({
                type: "LOGIN",
                payload: allUser
            })
        }
    }, [])


    return (<AuthContext.Provider value={{ state, login, logout }}>
        { children }
    </AuthContext.Provider>)
}
export default Authprovider;