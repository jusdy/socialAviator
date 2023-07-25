import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-between items-center absolute w-full h-[130px] text-white p-14 bg-[#EF3F42]">
            <p className="text-base">© Social Aviator 2023</p>

            <div className="flex justify-between gap-x-4 uppercase text-base font-semibold">
                <Link href={"/#"}>home</Link>
                <Link href={"/#"}>about</Link>
                <Link href={"/#"}>services</Link>
                <Link href={"/#"}>work</Link>
                <Link href={"/#"}>contract</Link>
            </div>

            <div className="flex justify-between gap-x-4">
                <p className="text-base">Follow us:</p>

            </div>
        </footer>
    )
}

export default Footer;