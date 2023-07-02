import axios from "axios";
import { signIn } from 'next-auth/react';

const { createContext, useContext, useState, useEffect } = require("react");

const AppUIUXContext = createContext(null)

export const StateContext = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState()
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalOpenClose = () => setModalOpen(current => !current)


    const getUserDetails = async () => {

    }

    const registerUser = async (credentials) => {
        const response = await axios.post('http://localhost:3000/api/register', credentials)

        return response
    }

    const loginUser = async (credentials) => {
        const { email, password } = credentials

        try {
            await signIn("credentials", {
                email, password, redirect: false
            })

            handleModalOpenClose()
        } catch (error) {
            console.log('error', error)
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
        registerUser,
        handleModalOpenClose,
        modalOpen,
        loginUser
    }}>
        {children}
    </AppUIUXContext.Provider>
}

export const useStateContext = () => useContext(AppUIUXContext)