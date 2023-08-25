import ContactForm from "@/components/ContactForm";
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
        <img className="w-full" src="/assets/images/border.png" />
        <div className="bg-[#FFF7D3] pt-16 lg:px-32 px-10 pb-[120px]">
          <div className="flex justify-between items-center">
            <h1 className="text-primary font-bold lg:text-3xl text-xl">
              Let's get to work
            </h1>

            <img
              className="lg:w-[135px] w-20"
              src="/assets/images/logoicon.png"
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
