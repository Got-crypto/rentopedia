export default function Input({name, value, onChange, placeholder, type}) {
    return (
        <input 
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            className="h-12 w-80 border p-2  text-secondary border-secondary bg-transparent placeholder:text-gray-500 outline-none"
        />
    )
}