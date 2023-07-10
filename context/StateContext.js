import axios from "axios";
import { signIn, useSession } from 'next-auth/react';

const { createContext, useContext, useState, useEffect } = require("react");

const AppUIUXContext = createContext(null)

export const StateContext = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    const {data} = useSession()

    const handleModalOpenClose = () => setModalOpen(current => !current)

    const getUserDetails = () => {
        return data?.user
    }

    const registerUser = async (credentials) => {
        const response = await axios.post('http://localhost:3000/api/register', credentials)

        return response
    }

    const loginUser = async (credentials) => {
        const { email, password } = credentials

        try {
            const user = await signIn("credentials", {
                email, password, redirect: false
            })

            console.log('user', user)

            handleModalOpenClose()
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleOpenDropdownMenu = () => setIsOpen((state) => !state)

    useEffect(() => {
        const getUser = () => {
            const response = getUserDetails()
            
            const userData = response ? response : null

            const userCredentials = {
                username: userData?.name,
                email: userData?.email,
                picture: userData?.image
            }

            setUser(userData ? userCredentials : null)
        }

        getUser()
    }, [data])

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