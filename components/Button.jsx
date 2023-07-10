import Image from "next/image"

export default function Button({ disabled, size, primary, text, action, icon }) {
    const background = primary ? 'bg-primary text-white' : 'bg-secondary font-bold  text-primary'
    const btnSize = size === 'sm' ? 'h-16 px-2' : size === 'lg' ? 'h-10 px-4' : 'h-8 px-1'

    return <button disabled={disabled !== undefined ? disabled : false} className={`${background} ${btnSize} rounded-md text-ellipsis flex flex-row gap-2 justify-center items-center`} onClick={action}>
        {icon && (
            <Image src={icon} alt="btn icon" className="object-cover" height={20} width={20}/>
        )}
        {text}
    </button>
}