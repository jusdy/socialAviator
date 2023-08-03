import Input from "@/components/Input";

const Contact = () => {
  return (
    <div className="relative font-Mont">
      <img
        alt="aviator footer"
        src="/assets/images/footer-top.png"
        className="w-full absolute -bottom-1"
      />
      <div className="w-full h-96 bg-gold pt-[174px]">
        <p className="text-black lg:text-2xl text-xl font-semibold text-center">
          Get in touch
        </p>
        <p className="text-secondary lg:text-[84px] text-6xl uppercase font-extrabold text-center tracking-tight">
          CONTACT
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

      <div className="lg:px-24 px-8 lg:pb-[200px] pb-[140px]">
        <img className="w-full" src="/assets/images/border.png"/>
        <div className="bg-[#FFF7D3] pt-16 lg:px-32 px-10 pb-[120px]">
          <div className="flex justify-between items-center">
            <h1 className="text-primary font-bold lg:text-3xl text-xl">
              Let's get to work
            </h1>

            <img className="lg:w-[135px] w-20" src="/assets/images/logoicon.png"/>
          </div>

          <div className="grid xl:grid-cols-3 lg:grid-cols-2 2xl:gap-x-[200px] xl:gap-x-[50px] lg:gap-x-[120px] lg:gap-y-12 gap-y-8 mt-20">
            <Input className="col-span-1" title="Name" />
            <Input className="col-span-1" title="Email" />
            <Input className="col-span-1" title="Mobile" />
            <Input className="col-span-1" title="Company/Brand Website" />
            <Input className="col-span-1" title="City" />
          </div>

          <button className="bg-secondary mt-20 w-[200px] h-[44px] text-white font-semibold uppercase tracking-widest md:text-base text-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
