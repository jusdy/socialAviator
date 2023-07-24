interface TextBoxTypes {
    content: string;
}

const TextBox = ({
    content
}: TextBoxTypes) => {
    return (
        <div className='col-span-1 bg-[#1F1F1F] border border-black rounded-[4px] text-[#FFE073] pl-3 py-[6px] font-Bebas  m-0'>
            {content}
        </div>
    )
}

export default TextBox;