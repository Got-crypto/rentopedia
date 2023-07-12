import { filters } from "@/constants/constants"
import { useStateContext } from "@/context/StateContext"
import { PropertiesContainer } from "."

export default function LandingPage() {
    const {propertiesForRent} = useStateContext()

    return (
        <div className="h-[calc(100vh-4rem)] w-full">
            <div className="h-full w-full flex flex-col">
                <PropertiesContainer
                    title={'Properties for Rent'}
                    properties={propertiesForRent}
                    filters={filters}
                />
            </div>
        </div>
    )
}