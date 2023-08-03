interface InputTypes {
    className?: string;
    title?: string;
    
}

const Input = ({
    className,
    title
}:InputTypes) => {
    return (
        <div className={`${className} flex flex-col`}>
            <p className="font-bold text-sm">{title}*</p>

            <input className="w-full border-0 border-b border-b-[black] bg-[#FFF7D3] text-black focus:outline-none"/>
        </div>
    )
}

export default Input;