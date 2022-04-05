import { useAuth } from "../auth"
import { Navigate } from "react-router-native"

export const RequireAuth = ({children}) =>{
    const auth = useAuth()

    // auth.checkDataStorage();

    if(!auth.user){
        return <Navigate to='/login' />
    }


    return children
}