import Skeleton from "react-loading-skeleton"
import { PropertyCard } from "."

export default function PropertiesContainer({properties, title, filters}) {
    const propertiesData = properties?.propertiesForRent || properties?.propertiesForSale

    console.log('propertiesData', propertiesData)

    return (
        <div className="py-2 px-4 h-auto flex flex-col w-full">
            <div className="h-10 w-fit mt-2">
                <p className="text-2xl font-bold text-primary">{title}</p>
            </div>

            <div className="flex-wrap gap-5 w-full">
                <p className="capitalize text-gray-500 h-8">filters:</p>
                <ul className="flex overflow-auto h-[3.5rem] gap-2">
                    {filters.map((filter, index) => (
                        <li key={index}>
                            <button className="h-10 text-secondary  rounded-full w-56 bg-primary">
                                {filter}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-10 w-full mx-auto  gap-5">
                {propertiesData ? (
                    propertiesData?.map((property, index) => (
                        <div key={`${property.title}-${index}`} className="h-[500px] w-[450px]">
                            <PropertyCard
                                property={property}
                            />
                        </div>
                    ))
                ) : (
                    [...Array(10)].map((_, index) => (
                        <div
                            className="w-full md:w-fit flex mx-auto flex-row justify-center items-center"
                            key={index}
                        >
                            <Skeleton 
                                count={1}
                                baseColor="#D3D3D3"
                                width={450}
                                height={500}

                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}