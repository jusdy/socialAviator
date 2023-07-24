import Link from "next/link";

const Header = () => {
    return (
        <header className="h-[130px] w-[calc(100%-171px)] ml-[94px] mr-[77px] absolute flex justify-between font-Mont items-center z-50">
            <Link href={'/#'} className="h-full bg-white w-[132px] flex justify-center items-center">
                <img src="assets/logo.png"/>
            </Link>

            <div className="flex justify-between gap-x-[37px] uppercase text-[15px] items-center font-semibold tracking-widest">
                <Link className="text-[#BEBEBE] hover:text-white transition-all" href={"/home"}>home</Link>
                <Link className="text-[#BEBEBE] hover:text-white transition-all" href={"/home"}>about</Link>
                <Link className="text-[#BEBEBE] hover:text-white transition-all" href={"/home"}>services</Link>
                <Link className="text-[#BEBEBE] hover:text-white transition-all" href={"/home"}>work</Link>
                <Link className="text-[#BEBEBE] hover:text-white transition-all" href={"/home"}>contract</Link>

                <button className="bg-[#EF3F42] w-[200px] h-[44px] text-white uppercase tracking-widest">
                    Talk To Expert
                </button>
            </div>
        </header>
    )
}

export default Header;