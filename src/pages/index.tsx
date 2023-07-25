import Image from 'next/image'
import PhotoContainer from '@/components/photo'
import TextBox from '@/components/TextBox'
import Carousel from 'react-multi-carousel';
import Marquee from "react-fast-marquee";
import ExpandingCards from '@/components/expandingCards';
import { cardData } from '@/constants';
import PhotoAlbum from 'react-photo-album';
import { photos } from '@/constants/photos';

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

export default function Home() {
  return (
    <main
    className="font-Mont"
    >
      <div className='w-full relative'>
        <img alt='aviator footer' src='/assets/images/footer-top.png' className='w-full absolute -bottom-1'/>
        <div className='relative h-[100vh] bg-[#FFDA79] flex 2xl:gap-x-[230px] gap-x-[100px] overflow-x-hidden'>
          <img alt='plane' className='w-full absolute bottom-0 z-0' src='assets/plane.png'/>
          <div className='pt-[250px] pl-[94px] 2xl:w-[730px] w-[600px] z-10 relative grow flex-shrink-0'>
            <p className='text-[#050505] text-2xl font-semibold mb-[40px]  animate-entrance'>Promote your brand through celebrities via our</p>
            <p className='text-[#EF3F42] text-[84px] font-bold uppercase leading-[75px] tracking-tighter animate-entrance'>social production</p>

            <p className='text-[#050505] text-[15px] font-bold  leading-7 mt-[50px] animate-entrance'>
            Production value is what adds brilliance to any campaign, this division handles end-to-end production via our internal team & external partners, 
            we work with some of the finest Directors, DOPs, Photographers, and Post-production experts who handle Animation, VFX, Graphics, Editing, Color Grading, 
            Dubbing, Original Soundtrack creation & many more in the most cost-effective manner.
            </p>
          </div>

          <Carousel
            containerClass='flex w-full justify-between 2xl:pt-[60px] pt-[200px] z-10'
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

        <div className='mt-[90px] mb-[150px]'>
          <p className='text-primary text-[30px] font-semibold text-center mb-6'>Choose from over 1200+ celebrities to promote your business</p>

          <ExpandingCards data={cardData}/>

          <p className='text-primary text-[30px] font-semibold text-center mt-20'>1000+ brands • 850 mn+ reach</p>

        </div>

        <div className='py-4 px-[80px] bg-[#894935] grid grid-cols-2 gap-x-8 items-center border-0'>
          <div className="col-span-1 grid gap-x-2 h-[165px] gap-y-2 grid-cols-2 text-3xl font-normal tracking-widest">
            <TextBox content='1420 BRANDS'/>
            <TextBox content='300 AD CAMPAIGNS'/>
            <TextBox content='8.5 Million REACH'/>
            <TextBox content='74 SPONSORED'/>
            <TextBox content='1200 CELEBRITIES'/>
            <TextBox content='15 CATEGORIES'/>
          </div>

          <div className='col-span-1 flex gap-x-4 items-center'>
            <div className='flex flex-col gap-y-6'>
              <p className='text-white font-bold text-[32px] uppercase leading-10'>Your one STOP PLACE FOR CELEBRITY ENGAGEMENT</p>

              <button className="bg-[#EF3F42] w-[280px] h-[44px] text-white font-semibold uppercase tracking-widest">
                ONBOARD MY BUSINESS
              </button>
            </div>

            <img alt='aviator' src='/assets/avatar.png' className='ml-auto'/>
          </div>
          
        </div>

        <div className='bg-[#FFF7D3] w-full pt-16 pb-[230px] px-[76px] text-3xl font-semibold'>
          <p className='text-primary mb-10'>Glimpse of our work</p>

          <PhotoAlbum layout="columns" photos={photos} columns={3} padding={15}/>
        </div>

      </div>
    </main>
  )
}
