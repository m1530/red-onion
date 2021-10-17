import { useContext } from "react"
import { appContext } from "../context/AuthProvider"

const useAuth = () => {
    return useContext(appContext)
}
export default useAuth;