import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth"
import {userState, useEffect, useContext, createContext} from "react"
import { auth } from "../../firebase"

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ props }) {
    const {children} = props
    const [user, setUser] = useState(null)
    const [globalData, setGlobalData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    

    function signup(email, password) {
        // Signup logic
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        // Login logic
        return signInWithEmailAndPassword(auth, email, password )
    }

    function resetPassword(email) {
        // Reset password logic
        return sendPasswordResetEmail(auth, email)
    }

    function logout() {
        // Logout logic
        setUser(null)
            setGlobalData(null)
        return signOut(auth)

    const value = { user, globalData, setGlobalData, isLoading, signup, login, resetPassword, 
        logout }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
    