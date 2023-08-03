import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <header className="h-[130px] w-full lg:pl-[94px] lg:pr-[77px] pr-[30px] absolute flex justify-between font-Mont items-center z-50">
            <Link href={'/#'} className="h-full lg:w-[132px] w-[83px] min-w-[83px] ml-4 flex justify-center items-center">
                <img src="assets/logo.png"/>
            </Link>

            <div className="md:hidden flex gap-x-12 items-center">
                <Link href={""}><img src="/assets/svg/whatsapp.svg"/></Link>
                <Link href={""}><img src="/assets/svg/menu.svg"/></Link>
            </div>

            <div className="lg:flex hidden justify-between gap-x-[37px] uppercase text-[15px] items-center font-semibold tracking-widest">
                <Link className={`${pathname === '/home' ? 'text-secondary' : 'text-black'} hover:text-secondary transition-all`} href={"/home"}>home</Link>
                <Link className={`${pathname === '/about' ? 'text-secondary' : 'text-black'} hover:text-secondary transition-all`} href={"/about"}>about</Link>
                <Link className={`${pathname === '/services' ? 'text-secondary' : 'text-black'} hover:text-secondary transition-all`} href={"/services"}>services</Link>
                <Link className={`text-secondary hover:text-secondary transition-all`} href={"/contact"}>work</Link>
                <Link className={`${pathname === '/contact' ? 'text-secondary' : 'text-black'} hover:text-secondary transition-all`} href={"/contact"}>contact</Link>

                <button className="bg-secondary w-[200px] h-[44px] text-white uppercase tracking-widest">
                    Talk To Expert
                </button>
            </div>
        </header>
    )
}

export default Header;