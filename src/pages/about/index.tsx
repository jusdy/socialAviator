import { teamInfo } from "@/constants/team";

const About = () => {
  return (
    <div className="relative">
      <img
        alt="aviator footer"
        src="/assets/images/footer-top.png"
        className="w-full absolute -bottom-1"
      />
      <div className="w-full h-96 bg-gold pt-[174px] font-Mont">
        <p className="text-black text-2xl font-semibold text-center">
          Meet the team
        </p>
        <p className="text-secondary text-[84px] uppercase font-extrabold text-center tracking-tight">
          about
        </p>
      </div>

      <div className="py-16 px-24">
        <p className="text-primary text-2xl font-bold">
          Confluencr has seen extremely hyper-intensive growth over the last few
          years both in terms of talent and brands. We have been fortunate to be
          working with numerous creators who understand our vision and a team
          that stands as our pillars of strength shouldering the organisation.a
        </p>
      </div>

      <div className="bg-[#FFF7D3] pt-10 px-20 pb-32">
        <p className="text-primary text-3xl font-bold text-center">
          Meet the team
        </p>

        <div className="mt-10 grid grid-cols-3 gap-x-6">
            {teamInfo.map((item, key) => (
            <div className="col-span-1">
                <img className="rounded-md w-full" src="/assets/images/team1.png" />

                <p className="text-primary text-center text-2xl font-bold mt-10">{item.name}</p>
                <p className="text-center text-base">{item.role}</p>
                <p className="text-center text-base pt-6 px-6">{item.description}</p>
            </div>
            ))}
        </div>

        <div className="mt-40">
            <p className="font-bold text-3xl">Ready to take your brand to greater heights?</p>
            <button className="bg-secondary mt-6 w-[200px] h-[44px] text-white font-semibold uppercase tracking-widest md:text-base text-sm">
                get in touch
            </button>
        </div>
      </div>
    </div>
  );
};

export default About;
