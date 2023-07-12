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
        </div>
    )
}