import { useEffect, useRef, useState } from "react";
import Link from "next/link";
//@ts-ignore
import NewsTicker, { Directions } from "react-advanced-news-ticker";
import PhotoContainer from "@/components/photo";
import TextBox from "@/components/TextBox";
import Carousel from "react-multi-carousel";
import Marquee from "react-fast-marquee";
import ExpandingCards from "@/components/expandingCards";
import { cardData, cardData2 } from "@/constants";
import Typewriter from "typewriter-effect";
import "regenerator-runtime/runtime";
import { instgramLinks } from "@/constants/instgram";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 80,
  },
};

const responsive2 = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1536,
    },
    items: 4,
  },
  desktop2: {
    breakpoint: {
      max: 1536,
      min: 1024,
    },
    items: 3,
  },
  mobile: {
    breakpoint: {
      max: 768,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 768,
    },
    items: 2,
  },
};

const HomePage = () => {
  const ref = useRef(null);

  const [time, setTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (time >= 16) setTime(0);
  }, [time]);

  return (
    <div className="w-full relative font-Mont">
      <img
        alt="aviator footer"
        src="/assets/images/footer-top.png"
        className="w-full absolute -bottom-1"
      />
      <div className="relative lg:h-[100vh] h-fit bg-gold flex lg:flex-nowrap flex-wrap 2xl:gap-x-[230px] gap-x-[100px] overflow-x-hidden">
        <img
          alt="plane"
          className="w-full absolute bottom-0 z-0"
          src="assets/plane.png"
        />
        <div className="lg:pt-[250px] pt-[200px] lg:pl-[94px] pl-[30px] lg:pr-0 pr-[30px] 2xl:w-[730px] lg:w-[600px] w-fit z-10 relative grow flex-shrink-0">
          <p className="text-[#050505] text-2xl font-semibold mb-[40px]  animate-entrance">
            Promote your brand through celebrities via our
          </p>

          {/* <p className='text-secondary lg:text-[84px] text-[40px] font-bold uppercase md:leading-[75px] leading-[50px] tracking-tighter animate-entrance'>social production</p> */}
          <div className="text-4xl text-secondary lg:text-[84px] text-[40px] font-bold uppercase md:leading-[75px] leading-[50px] tracking-tighter">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Social Labs")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Social Sets")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Social Production")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Social Biz")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>

          <p
            className={`${
              time >= 4 ? "hidden" : "block"
            } text-[#050505] text-[15px] font-bold  leading-7 mt-[50px] animate-fadeinLogo`}
          >
            This division is dedicated to providing tailored brand solutions
            that help your brand presence reach new heights. We take the time to
            understand your unique needs and goals, and our team of experts will
            work dedicatedly to create a customized strategy that delivers
            results.
          </p>
          <p
            className={`${
              time >= 4 && time < 8 ? "block" : "hidden"
            } text-[#050505] text-[15px] font-bold  leading-7 mt-[50px] animate-fadeinLogo`}
          >
            Avail our tie-ups with state-of-the-art studios across Mumbai which
            is currently the hub for KEY influencers allowing us to create
            high-quality content that is tailored to your brand's needs and
            goals. Customize your celebrity, your experience, and your location
            all at once with Social Aviator.
          </p>
          <p
            className={`${
              time >= 8 && time < 12 ? "block" : "hidden"
            } text-[#050505] text-[15px] font-bold leading-7 mt-[50px] animate-fadeinLogo`}
          >
            Production value is what adds brilliance to any campaign, this
            division handles end-to-end production via our internal team &
            external partners, we work with some of the finest Directors, DOPs,
            Photographers, and Post-production experts who handle Animation,
            VFX, Graphics, Editing, Color Grading, Dubbing, Original Soundtrack
            creation & many more in the most cost-effective manner.
          </p>
          <p
            className={`${
              time >= 12 && time < 16 ? "block" : "hidden"
            } text-[#050505] text-[15px] font-bold  leading-7 mt-[50px] animate-fadeinLogo`}
          >
            This division focuses on Small and Medium Enterprises across India
            who are new to the world of influencer marketing but still wish to
            associate with influencers/ celebs by working out a long-term
            business association without having to pay anything upfront. We
            design a business plan which is a win-win for all parties associated
            by connecting businesses to relevant influencers/celebs.
          </p>
        </div>

        <Carousel
          containerClass="flex w-full justify-between 2xl:pt-[60px] lg:pt-[200px] pt-10 ml-[30px] z-10"
          responsive={responsive}
          partialVisible={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          arrows={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <PhotoContainer>
            <img src="assets/images/window1.png" className="md:h-full" />
          </PhotoContainer>

          <PhotoContainer>
            <img src="assets/images/window2.png" className="h-full" />
          </PhotoContainer>

          <PhotoContainer>
            <img src="assets/images/window3.png" className="h-full" />
          </PhotoContainer>
        </Carousel>
      </div>

      <div className="mt-[90px]">
        <div className="flex gap-x-4 justify-center mb-6 mx-6">
          <p className="text-primary md:text-[30px] text-lg font-semibold text-center">
            Brands Trusting Social Aviator
          </p>
          <img className="w-5" src="assets/svg/heart.svg" />
        </div>

        <Marquee>
          {Array(11)
            .fill("")
            .map((item, key) => (
              <img key={key} src={`/assets/images/brands${key}.png`} />
            ))}
        </Marquee>
      </div>

      <div className="mt-[90px] md:mb-[150px] mb-[50px] mx-6">
        <p className="text-primary md:text-[30px] text-xl font-semibold text-center mb-6">
          Choose from over 1200+ celebrities to promote your business
        </p>

        <ExpandingCards className="lg:flex hidden" data={cardData} />
        <ExpandingCards className="lg:hidden flex" data={cardData2} />

        <p className="text-primary md:text-[30px] text-xl font-semibold text-center mt-20">
          1000+ brands • 850 mn+ reach
        </p>
      </div>

      <div className="py-4 lg:px-[80px] px-[27px] bg-[#894935] grid lg:grid-cols-2 grid-cols-1 gap-x-8 items-center border-0">
        <div className="col-span-1 grid gap-x-2 2xl:h-[165px] gap-y-2 md:grid-cols-2 grid-cols-1 md:text-3xl text-2xl font-normal tracking-widest">
          <TextBox content="1420 BRANDS">
            <NewsTicker
              ref={ref}
              id="nt-example1"
              direction={Directions.UP}
              rowHeight={30}
              maxRows={1}
              duration={4000}
            >
              <div>1420 BRANDS</div>
              <div>1420 BRANDS</div>
              <div>1420 BRANDS</div>
              <div>1420 BRANDS</div>
            </NewsTicker>
          </TextBox>
          <TextBox content="1420 BRANDS">
            <NewsTicker
              ref={ref}
              id="nt-example1"
              direction={Directions.UP}
              rowHeight={30}
              maxRows={1}
              duration={4000}
            >
              <div>8.5 Million REACH</div>
              <div>8.5 Million REACH</div>
              <div>8.5 Million REACH</div>
              <div>8.5 Million REACH</div>
            </NewsTicker>
          </TextBox>
          <TextBox content="1420 BRANDS">
            <NewsTicker
              ref={ref}
              id="nt-example1"
              direction={Directions.UP}
              rowHeight={30}
              maxRows={1}
              duration={4000}
            >
              <div>1200 CELEBRITIES</div>
              <div>1200 CELEBRITIES</div>
              <div>1200 CELEBRITIES</div>
              <div>1200 CELEBRITIES</div>
            </NewsTicker>
          </TextBox>
          <TextBox content="1420 BRANDS">
            <NewsTicker
              ref={ref}
              id="nt-example1"
              direction={Directions.UP}
              rowHeight={30}
              maxRows={1}
              duration={4000}
            >
              <div>300 AD CAMPAIGNS</div>
              <div>300 AD CAMPAIGNS</div>
              <div>300 AD CAMPAIGNS</div>
              <div>300 AD CAMPAIGNS</div>
            </NewsTicker>
          </TextBox>
          <TextBox content="1420 BRANDS">
            <NewsTicker
              ref={ref}
              id="nt-example1"
              direction={Directions.UP}
              rowHeight={30}
              maxRows={1}
              duration={4000}
            >
              <div>74 SPONSORED</div>
              <div>74 SPONSORED</div>
              <div>74 SPONSORED</div>
              <div>74 SPONSORED</div>
            </NewsTicker>
          </TextBox>
          <TextBox content="1420 BRANDS">
            <NewsTicker
              ref={ref}
              id="nt-example1"
              direction={Directions.UP}
              rowHeight={30}
              maxRows={1}
              duration={4000}
            >
              <div>15 CATEGORIES</div>
              <div>15 CATEGORIES</div>
              <div>15 CATEGORIES</div>
              <div>15 CATEGORIES</div>
            </NewsTicker>
          </TextBox>
        </div>

        <div className="col-span-1 flex gap-x-4 items-center mt-8">
          <div className="flex flex-col gap-y-6">
            <p className="text-white font-bold md:text-[32px] text-xl uppercase leading-10">
              Your one STOP PLACE FOR CELEBRITY ENGAGEMENT
            </p>

            <div className="flex justify-between items-center">
              <button className="bg-secondary w-[280px] h-[44px] text-white font-semibold uppercase tracking-widest md:text-base text-sm">
                ONBOARD MY BUSINESS
              </button>
              <img
                alt="aviator"
                src="/assets/avatar.png"
                className="md:hidden block md:w-full w-[100px]"
              />
            </div>
          </div>

          <img
            alt="aviator"
            src="/assets/avatar.png"
            className="md:block hidden ml-auto md:w-[213px]"
          />
        </div>
      </div>

      <div className="bg-[#FFF7D3] w-full pt-16 lg:pb-[280px] pb-[100px] md:px-[76px] px-6 md:text-3xl text-2xl font-semibold">
        <p className="text-primary mb-10 md:text-left text-center">
          Glimpse of our work
        </p>

        <Carousel
          responsive={responsive2}
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-padding-bottom"
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          showDots
          itemClass="mb-10"
        >
          {instgramLinks.map((item: string, key) => (
            <Link
              key={key}
              href={item}
              target="_blank"
              className="h-full w-full"
            >
              <div className="bg-[#ffee05] 2xl:w-[330px] xl:w-[350px] lg:w-[290px] md:w-[300px] w-full h-[667px] rounded-[20px]" />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
