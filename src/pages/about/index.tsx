import { teamInfo } from "@/constants/team";
import Link from "next/link";

const About = () => {
  return (
    <div className="relative font-Mont">
      <img
        alt="aviator footer"
        src="/assets/images/footer-top.png"
        className="w-full absolute -bottom-1"
      />
      <div className="w-full h-96 bg-gold pt-[174px]">
        <p className="text-black lg:text-2xl text-xl font-semibold text-center">
          Meet the team
        </p>
        <p className="text-secondary lg:text-[84px] text-6xl uppercase font-extrabold text-center tracking-tight">
          about
        </p>
      </div>

      <div className="py-16 xl:px-24 lg:px-12 px-6">
        <p className="text-primary lg:text-2xl text-base font-bold text-center">
          Confluencr has seen extremely hyper-intensive growth over the last few
          years both in terms of talent and brands. We have been fortunate to be
          working with numerous creators who understand our vision and a team
          that stands as our pillars of strength shouldering the organisation.a
        </p>
      </div>

      <div className="bg-[#FFF7D3] pt-10 xl:px-20 lg:px-12 px-6 pb-32">
        <p className="text-primary text-3xl font-bold text-center">
          Meet the team
        </p>

        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10">
            {teamInfo.map((item, key) => (
            <div className="col-span-1" key={key}>
                <img className="rounded-md w-full" src="/assets/images/team1.png" />

                <p className="text-primary text-center text-2xl font-bold mt-10">{item.name}</p>
                <p className="text-center text-base">{item.role}</p>
                <p className="text-center md:text-base text-sm pt-6 lg:px-6 px-0">{item.description}</p>
            </div>
            ))}
        </div>

        <div className="relative mt-40 flex flex-col lg:items-start items-center">
            <p className="font-bold lg:text-3xl text-2xl lg:text-left text-center">Ready to take your brand to greater heights?</p>
            <Link href={"/contact"} className="bg-secondary mt-6 w-[200px] h-[44px] text-white flex justify-center items-center font-semibold uppercase tracking-widest md:text-base text-sm">
              get in touch
            </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
