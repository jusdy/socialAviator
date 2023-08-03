import { expectation } from "@/constants";

const Services = () => {
  return (
    <div className="relative font-Mont">
      <img
        alt="aviator footer"
        src="/assets/images/footer-top.png"
        className="w-full absolute -bottom-1"
      />
      <div className="w-full h-96 bg-gold pt-[174px]">
        <p className="text-black lg:text-2xl text-xl font-semibold text-center">
          What do we offer
        </p>
        <p className="text-secondary lg:text-[84px] text-6xl uppercase font-extrabold text-center tracking-tight">
          SERVICES
        </p>
      </div>

      <div className="py-16 xl:px-24 lg:px-12 px-6">
        <p className="text-primary lg:text-2xl text-base font-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="col-span-1 bg-secondary flex flex-col items-left justify-center lg:pl-24 pl-8 pr-8 lg:py-0 py-10">
          <h1 className="uppercase lg:text-4xl text-2xl text-txtGold font-extrabold mb-8">Social Labs</h1>

          <span className="text-white lg:text-lg text-base">
            Campaign Planning
            <br></br>
            Creative Strategy
            <br></br>
            Collaboration with Leading Influencers/ Celebrities
            <br></br>
            Post Campaign Report
            <br></br>
            Script Writing Support
            <br></br>
            Absolute execution support
            <br></br>
            Quick turnaround time
          </span>
        </div>
        <div className="col-span-1 lg:block hidden">
          <img className="w-full" src="/assets/images/service1.png"/>
        </div>

        <div className="col-span-1 lg:block hidden">
          <img className="w-full" src="/assets/images/service1.png"/>
        </div>
        <div className="col-span-1 bg-black flex flex-col items-left justify-center lg:pl-24 pl-8 pr-8 lg:py-0 py-10">
          <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">Social Sets</h1>

          <span className="text-white lg:text-lg text-base">
            Access to existing venues
            <br></br>
            Saves you cost & time for art setup
            <br></br>
            Options to choose from
            <br></br>
            Helps enhance to production value
            <br></br>
            Helps you think of a better creative approach
            <br></br>
            Most cost-effective pricing
            <br></br>
            Reduces efforts for coordination with multiple vendors
          </span>
        </div>

        <div className="col-span-1 bg-secondary flex flex-col items-left justify-center lg:pl-24 pl-8 pr-8 lg:py-0 py-10">
          <h1 className="uppercase lg:text-4xl text-2xl text-txtGold font-extrabold mb-8">Social Production</h1>

          <span className="text-white lg:text-lg text-base">
            Quality equipment for shooting purposes
            <br></br>
            Best of behind-the-camera crew
            <br></br>
            Most suitable casting for support cast
            <br></br>
            End-to-end production support for video & audio creation
            <br></br>
            End-to-end postproduction support
            <br></br>
            Most cost-effective pricing
            <br></br>
            Quick turnaround time
          </span>
        </div>
        <div className="col-span-1 lg:block hidden">
          <img className="w-full" src="/assets/images/service3.png"/>
        </div>

        <div className="col-span-1 lg:block hidden">
          <img className="w-full" src="/assets/images/service4.png"/>
        </div>
        <div className="col-span-1 bg-black flex flex-col items-left justify-center lg:pl-24 pl-8 pr-8 lg:py-0 py-10">
          <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">Social Biz</h1>

          <span className="text-white lg:text-lg text-base">
            Supporting SMEs across India
            <br></br>
            Creative Campaign Planning with Celebs
            <br></br>
            Partnering with celebs for long-term gains
            <br></br>
            Working together on business plans & innovations
          </span>
        </div>
      </div>

      <div className="bg-[#FFF7D3] pt-20 xl:px-20 lg:px-12 px-6 pb-32">
        <p className="text-primary lg:text-3xl text-xl font-bold">
          What can you expect on the Social Aviator Tarmac?
        </p>

        <div className="mt-24 grid lg:grid-cols-3 sm:grid-cols-2 2xl:gap-x-[165px] xl:gap-x-[120px] gap-x-[60px] md:gap-y-24 gap-y-10">
          {expectation.map((item, key) => (
            <div>
              <img src={"/assets/svg/" + item.icon + ".svg"}/>

              <h1 className="lg:text-lg text-base font-bold mt-6">{item.subTitle}</h1>
              <p className="lg:text-lg text-base">{item.description}</p>
            </div>
          ))
          }
        </div>

        <div className="mt-40 flex flex-col lg:items-start items-center">
          <p className="font-bold lg:text-3xl text-2xl lg:text-left text-center">Ready to take your brand to greater heights?</p>
          <button className="bg-secondary mt-6 w-[200px] h-[44px] text-white font-semibold uppercase tracking-widest md:text-base text-sm">
              get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
