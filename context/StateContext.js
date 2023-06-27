import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");

const context = createContext(null)

export const StateContext = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState()


    const getUserDetails = async () => {
        const response = await axios.get('https://randomuser.me/api')

        return response   
    }

    const handleOpenDropdownMenu = () => setIsOpen((state) => !state)

    useEffect(() => {
        const getUser = async () => {
            const response = await getUserDetails()
            
            const userData = response?.data?.results[0]

            const userCredentials = {
                username: `${userData?.name?.first} ${userData?.name?.last}`,
                email: userData?.email,
                picture: userData?.picture?.large
            }

            setUser(userCredentials)
        }

        getUser()
    }, [])

    return <context.Provider value={{
        handleOpenDropdownMenu,
        isOpen,
        user,
    }}>
        {children}
    </context.Provider>
}

export const useStateContext = () => useContext(context)