import { filters } from "@/constants/constants"
import { useStateContext } from "@/context/StateContext"
import { PropertiesContainer } from "."

export default function LandingPage() {
    const {propertiesForRent, propertiesForSale} = useStateContext()

    return (
        <div className="h-auto w-full">
            <div className="h-full w-full flex flex-col">
                <PropertiesContainer
                    title={'Properties for Rent'}
                    properties={propertiesForRent}
                    filters={filters}
                />
                <div className="h-20"/>
                {/* <PropertiesContainer
                    title={'Properties for Sale'}
                    properties={propertiesForSale}
                    filters={filters}
                /> */}
            </div>
        </div>
    )
}