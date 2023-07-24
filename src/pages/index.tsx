import Image from 'next/image'
import PhotoContainer from '@/components/photo'
import TextBox from '@/components/TextBox'

export default function Home() {
  return (
    <main
    className="font-Mont"
    >
      <div className='w-full'>
        <div className=' h-[100vh] bg-gradient-to-b from-[#133B7BFF] to-[#464B8AFF] flex gap-x-[230px] overflow-x-hidden'>
          <img alt='plane' className='w-full absolute bottom-0 z-0' src='assets/plane.png'/>
          <div className='pt-[250px] pl-[94px] w-[730px] z-10 relative grow flex-shrink-0'>
            <p className='text-white text-2xl font-semibold mb-[40px]'>Promote your brand through celebrities via our</p>
            <p className='text-white text-[84px] font-bold uppercase leading-[75px] tracking-tighter'>social production</p>

            <p className='text-white text-[15px] font-bold  leading-7 mt-[50px]'>
            Production value is what adds brilliance to any campaign, this division handles end-to-end production via our internal team & external partners, 
            we work with some of the finest Directors, DOPs, Photographers, and Post-production experts who handle Animation, VFX, Graphics, Editing, Color Grading, 
            Dubbing, Original Soundtrack creation & many more in the most cost-effective manner.
            </p>
          </div>

          <div className='flex justify-between gap-x-[100px] pt-[300px] z-10'>
            <PhotoContainer>
              <img src='assets/woman.png' className='h-full'/>
            </PhotoContainer>

            <PhotoContainer>
              <img src='assets/man.png' className='h-full'/>
            </PhotoContainer>

            <PhotoContainer>
              <img src='assets/katrina.png' className='h-full'/>
            </PhotoContainer>
          </div>
        </div>
        <div className='mt-[90px] '>
          <div className='flex gap-x-4 justify-center'>
            <p className='text-[#F15859] text-[30px] font-semibold text-center'>Brands Trusting Social Aviator</p>
            <img src='assets/svg/heart.svg'/>
          </div>
        </div>

        <div className='my-[18px] py-4 px-[80px] bg-[#2C2C2C] grid grid-cols-2 gap-x-8 items-center'>
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

      </div>
    </main>
  )
}
