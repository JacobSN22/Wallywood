import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [loginData, setloginData] = useState({})

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      setloginData(JSON.parse(sessionStorage.getItem('token')))
    }
  }, [children])

  return (
        <AuthContext.Provider value={{loginData, setloginData}}>
            {children}
        </AuthContext.Provider>
  );
}
const useAuth = () => useContext(AuthContext)
export { AuthProvider, useAuth }