import Link from "next/link";

const Footer = () => {
    return (
        <footer className="font-Mont flex lg:flex-row flex-col gap-y-6 justify-between items-center absolute w-full lg:h-[130px] h-fit text-white lg:p-14 p-8 bg-secondary">
            <p className="text-base">© Social Aviator 2023</p>

            <div className="flex justify-between gap-x-4 uppercase md:text-base text-sm font-semibold">
                <Link className="text-white hover:text-black transition-all" href={"/#"}>home</Link>
                <Link className="text-white hover:text-black transition-all" href={"/#"}>about</Link>
                <Link className="text-white hover:text-black transition-all" href={"/#"}>services</Link>
                <Link className="text-white hover:text-black transition-all" href={"/#"}>work</Link>
                <Link className="text-white hover:text-black transition-all" href={"/#"}>contract</Link>
            </div>

            <div className="flex justify-between gap-x-4">
                <p className="text-base">Follow us:</p>
            </div>
        </footer>
    )
}

export default Footer;