import Link from "next/link";

const Footer = () => {
  return (
    <footer className="font-Mont flex lg:flex-row flex-col gap-y-6 justify-between items-center absolute w-full lg:h-[230px] h-fit text-white lg:p-14 p-8 bg-secondary">
      <div className="max-w-[400px]">
        <p className="font-semibold text-base">Social Aviator</p>
        <br/>
        <p className="md:text-xs text-xs mr-auto">
          Social Aviator is not just an influencer marketer but a holistic
          solutions platform that helps your brand’s growth by conceptualising
          and executing tailored content-led strategies that help you connect
          better with your target audience.
        </p>
        <br/>
        <p className="md:text-xs text-xs mr-auto">© Social Aviator 2023</p>
      </div>

      <div className="flex justify-between gap-x-4 uppercase md:text-base text-xs font-semibold">
        <Link
          className="text-white hover:text-black transition-all"
          href={"/home"}
        >
          home
        </Link>
        <Link
          className="text-white hover:text-black transition-all"
          href={"/about"}
        >
          about
        </Link>
        <Link
          className="text-white hover:text-black transition-all"
          href={"/services"}
        >
          services
        </Link>
        <Link
          className="text-white hover:text-black transition-all"
          href={"/contact"}
        >
          work
        </Link>
        <Link
          className="text-white hover:text-black transition-all"
          href={"/contact"}
        >
          contact
        </Link>
      </div>

      <div className="flex justify-between gap-x-4 items-center">
        <p className="text-base">Follow us:</p>

        <Link href={"/#"}>
          <img className="w-5" src="/assets/icons/facebook.png" />
        </Link>
        <Link href={"/#"}>
          <img className="w-5" src="/assets/icons/instagram.png" />
        </Link>
        <Link href={"/#"}>
          <img className="w-5" src="/assets/icons/twitter.png" />
        </Link>
        <Link href={"/#"}>
          <img className="w-5" src="/assets/icons/youtube.png" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
