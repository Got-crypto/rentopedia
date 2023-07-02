export default function Button({ disabled, size, primary, text, action }) {
    const background = primary ? 'bg-primary text-white' : 'bg-secondary font-bold  text-primary'
    const btnSize = size === 'sm' ? 'h-16 px-2' : size === 'lg' ? 'h-10 px-4' : 'h-8 px-1'



    return <button disabled={disabled !== undefined ? disabled : false} className={`${background} ${btnSize} rounded-md text-ellipsis`} onClick={action}>
        {text}
    </button>
}