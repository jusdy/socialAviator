import { useRef } from 'react';
import Image from 'next/image'
//@ts-ignore
import NewsTicker, { Directions } from "react-advanced-news-ticker";
import PhotoContainer from '@/components/photo'
import TextBox from '@/components/TextBox'
import Carousel from 'react-multi-carousel';
import Marquee from "react-fast-marquee";
import ExpandingCards from '@/components/expandingCards';
import { cardData, cardData2 } from '@/constants';
import 'regenerator-runtime/runtime';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const responsive2 = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1536
    },
    items: 4,
  },
  desktop2: {
    breakpoint: {
      max: 1536,
      min: 1024
    },
    items: 3,
  },
  mobile: {
    breakpoint: {
      max: 768,
      min: 0
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 768
    },
    items: 2,
  }
};

const HomePage = () => {
  const ref = useRef(null);

  return (
    <div className='w-full relative font-Mont'>
        <img alt='aviator footer' src='/assets/images/footer-top.png' className='w-full absolute -bottom-1'/>
        <div className='relative lg:h-[100vh] h-fit bg-[#FFDA79] flex lg:flex-nowrap flex-wrap 2xl:gap-x-[230px] gap-x-[100px] overflow-x-hidden'>
          <img alt='plane' className='w-full absolute bottom-0 z-0' src='assets/plane.png'/>
          <div className='lg:pt-[250px] pt-[200px] lg:pl-[94px] pl-[30px] lg:pr-0 pr-[30px] 2xl:w-[730px] lg:w-[600px] w-fit z-10 relative grow flex-shrink-0'>
            <p className='text-[#050505] text-2xl font-semibold mb-[40px]  animate-entrance'>Promote your brand through celebrities via our</p>
            <p className='text-secondary lg:text-[84px] text-[40px] font-bold uppercase md:leading-[75px] leading-[50px] tracking-tighter animate-entrance'>social production</p>

            <p className='text-[#050505] text-[15px] font-bold  leading-7 mt-[50px] animate-entrance'>
            Production value is what adds brilliance to any campaign, this division handles end-to-end production via our internal team & external partners, 
            we work with some of the finest Directors, DOPs, Photographers, and Post-production experts who handle Animation, VFX, Graphics, Editing, Color Grading, 
            Dubbing, Original Soundtrack creation & many more in the most cost-effective manner.
            </p>
          </div>

          <Carousel
            containerClass='flex w-full justify-between 2xl:pt-[60px] lg:pt-[200px] pt-10 ml-[30px] z-10'
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
              <img src='assets/images/window1.png' className='h-full'/>
            </PhotoContainer>

            <PhotoContainer>
              <img src='assets/images/window2.png' className='h-full'/>
            </PhotoContainer>

            <PhotoContainer>
              <img src='assets/images/window3.png' className='h-full'/>
            </PhotoContainer>
          </Carousel>
        </div>

        <div className='mt-[90px]'>
          <div className='flex gap-x-4 justify-center mb-6'>
            <p className='text-primary text-[30px] font-semibold text-center'>Brands Trusting Social Aviator</p>
            <img src='assets/svg/heart.svg'/>
          </div>

          <Marquee>
            {
            Array(20).fill("").map((item, key) => 
            <img key={key} src='/assets/images/brands.png'/>
            )
            }
          </Marquee>
        </div>

        <div className='mt-[90px] md:mb-[150px] mb-[50px]'>
          <p className='text-primary text-[30px] font-semibold text-center mb-6'>Choose from over 1200+ celebrities to promote your business</p>

          <ExpandingCards className="lg:flex hidden" data={cardData}/>
          <ExpandingCards className='lg:hidden flex' data={cardData2}/>

          <p className='text-primary md:text-[30px] text-[24px] font-semibold text-center mt-20'>1000+ brands • 850 mn+ reach</p>

        </div>

        <div className='py-4 lg:px-[80px] px-[27px] bg-[#894935] grid lg:grid-cols-2 grid-cols-1 gap-x-8 items-center border-0'>
          <div className="col-span-1 grid gap-x-2 2xl:h-[165px] gap-y-2 md:grid-cols-2 grid-cols-1 text-3xl font-normal tracking-widest">
            <TextBox content='1420 BRANDS'>
              <NewsTicker 
              ref={ref} 
              id="nt-example1" 
              direction={Directions.UP} 
              rowHeight={30} 
              maxRows={1} 
              duration={4000}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
                <div>Content 4</div>
              </NewsTicker> 
            </TextBox>
            <TextBox content='1420 BRANDS'>
              <NewsTicker 
              ref={ref} 
              id="nt-example1" 
              direction={Directions.UP} 
              rowHeight={30} 
              maxRows={1} 
              duration={4000}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
                <div>Content 4</div>
              </NewsTicker> 
            </TextBox>
            <TextBox content='1420 BRANDS'>
              <NewsTicker 
              ref={ref} 
              id="nt-example1" 
              direction={Directions.UP} 
              rowHeight={30} 
              maxRows={1} 
              duration={4000}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
                <div>Content 4</div>
              </NewsTicker> 
            </TextBox>
            <TextBox content='1420 BRANDS'>
              <NewsTicker 
              ref={ref} 
              id="nt-example1" 
              direction={Directions.UP} 
              rowHeight={30} 
              maxRows={1} 
              duration={4000}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
                <div>Content 4</div>
              </NewsTicker> 
            </TextBox>
            <TextBox content='1420 BRANDS'>
              <NewsTicker 
              ref={ref} 
              id="nt-example1" 
              direction={Directions.UP} 
              rowHeight={30} 
              maxRows={1} 
              duration={4000}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
                <div>Content 4</div>
              </NewsTicker> 
            </TextBox>
            <TextBox content='1420 BRANDS'>
              <NewsTicker 
              ref={ref} 
              id="nt-example1" 
              direction={Directions.UP} 
              rowHeight={30} 
              maxRows={1} 
              duration={4000}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
                <div>Content 4</div>
              </NewsTicker> 
            </TextBox>
          </div>

          <div className='col-span-1 flex gap-x-4 items-center mt-8'>
            <div className='flex flex-col gap-y-6'>
              <p className='text-white font-bold md:text-[32px] text-2xl uppercase leading-10'>Your one STOP PLACE FOR CELEBRITY ENGAGEMENT</p>

              <div className='flex justify-between items-center'>
                <button className="bg-secondary w-[280px] h-[44px] text-white font-semibold uppercase tracking-widest text-base">
                  ONBOARD MY BUSINESS
                </button>
                <img alt='aviator' src='/assets/avatar.png' className='md:hidden block md:w-full w-[100px]'/>
              </div>
            </div>

            <img alt='aviator' src='/assets/avatar.png' className='md:block hidden ml-auto md:w-[213px]'/>
          </div>
          
        </div>

        <div className='bg-[#FFF7D3] w-full pt-16 pb-[280px] md:px-[76px] px-6 text-3xl font-semibold'>
          <p className='text-primary mb-10'>Glimpse of our work</p>

          <Carousel
            responsive={responsive2}
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-padding-bottom"
            dotListClass=""
            draggable
            focusOnSelect
            infinite
            itemClass="mb-10"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}          
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            showDots
          >
            <div className='bg-[#D9D9D9] 2xl:w-[330px] xl:w-[350px] lg:w-[290px] md:w-[300px] w-full h-[667px] rounded-[20px]'></div>
            <div className='bg-[#884141] 2xl:w-[330px] xl:w-[350px] lg:w-[290px] md:w-[300px] w-full h-[667px] rounded-[20px]'></div>
            <div className='bg-[#278a91] 2xl:w-[330px] xl:w-[350px] lg:w-[290px] md:w-[300px] w-full h-[667px] rounded-[20px]'></div>
            <div className='bg-[#D9D9D9] 2xl:w-[330px] xl:w-[350px] lg:w-[290px] md:w-[300px] w-full h-[667px] rounded-[20px]'></div>
            <div className='bg-[#D9D9D9] 2xl:w-[330px] xl:w-[350px] lg:w-[290px] md:w-[300px] w-full h-[667px] rounded-[20px]'></div>
            <div className='bg-[#D9D9D9] 2xl:w-[330px] xl:w-[350px] lg:w-[290px] md:w-[300px] w-full h-[667px] rounded-[20px]'></div>
          </Carousel>
        </div>

      </div>
    )
}

export default HomePage;