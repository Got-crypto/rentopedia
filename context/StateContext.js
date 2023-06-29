import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");

const AppUIUXContext = createContext(null)

export const StateContext = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState()
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalOpenClose = () => setModalOpen(current => !current)


    const getUserDetails = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api')
            return response   
        } catch (error) {
            console.log('error', error)
            return null
        }

    }

    const handleOpenDropdownMenu = () => setIsOpen((state) => !state)

    useEffect(() => {
        const getUser = async () => {
            const response = await getUserDetails()
            
            const userData = response ? response?.data?.results[0] : null

            const userCredentials = {
                username: `${userData?.name?.first} ${userData?.name?.last}`,
                email: userData?.email,
                picture: userData?.picture?.large
            }

            setUser(userData ? userCredentials : null)
        }

        getUser()
    }, [])

    return <AppUIUXContext.Provider value={{
        handleOpenDropdownMenu,
        isOpen,
        user,
        handleModalOpenClose,
        modalOpen
    }}>
        {children}
    </AppUIUXContext.Provider>
}

export const useStateContext = () => useContext(AppUIUXContext)