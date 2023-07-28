import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(0);
  useEffect(() =>{
    const id = setInterval(() => {
      setTime(prev => prev + 1);
  }, 1000)
  },[])

  return (
    <main className="font-Mont">
      <div className="w-[100vw] h-[100vh] flex relative bg-ground bg-center bg-cover text-white">
        <img
          src="/assets/images/Logo-big.png"
          className="absolute top-[30px] left-[calc(50%-430px)] animate-fadeinLogo opacity-0 z-10"
        />

        <img
          src="/assets/images/bigplane.png"
          className="w-[300px] absolute top-[calc(69%)] left-[calc(50%-153px)] "
        />

        <div className={`${time >= 16 ? "hidden" : "flex"} items-center animate-fadeinLogo animation-delay opacity-0 z-10`}>
          <div className="flex z-20 font-semibold px-[70px] ">
            <div>
              <h2 className="uppercase text-3xl mb-4">Welcome on board with</h2>
              <h1 className="uppercase font-bold 2xl:text-[260px] xl:text-[180px] 2xl:leading-[200px] xl:leading-[160px]">
                social aviator
              </h1>
            </div>

            <div className="">
              <span className="text-2xl tracking-wider">
                Your <span className="bg-primary">one-stop solution</span> for
                all your influencer marketing objectives
              </span>
              <img
                alt="arrow"
                src="/assets/images/arrow.png"
                className="pt-10"
              />
            </div>
          </div>
        </div>

        <div className={`${time >= 16 && time < 24 ? "flex" : "hidden"} mt-20 ml-20 flex-col z-20 animate-fadeinLogo opacity-0`}>
          <h2 className="uppercase font-bold text-2xl mb-6 tracking-wider">We are an influencer marketing company that provides</h2>
          <h1 className="uppercase font-bold 2xl:text-[120px] xl:text-[80px] 2xl:leading-[100px] xl:leading-[80px] tracking-tighter">
          customized <p>brand solutions</p>
          </h1>
          <span className="text-2xl tracking-wider uppercase mt-8 font-bold">
            to help your brand <span className="bg-primary px-2">reach new heights.</span> 
          </span>
          <p className="text-2xl tracking-wider uppercase font-bold">
            With our services, your brands will soar to new heights, leaving behind the ordinary and embrace the extraordinary. </p>
        </div>

        <div className={`${time >= 24 && time < 40 ? "flex" : "hidden"} flex-col text-2xl animate-fadeinText text-center px-[240px] mt-40`}>
          <h1 className="font-bold mb-[60px] uppercase">Why fly with Social Aviator?</h1>

          <p className="font-semibold mb-10">
            We at Social Aviator understand the importance of speed in today's
            fast-paced digital world. Our team of experts is dedicated to coming
            up with innovative trending ideas, putting together effective
            strategies, and collaborating with top-notch artists to create
            memorable campaigns and events.  By partnering with us, you can
            scale your business and achieve your objectives faster, allowing you
            to soar to greater heights. Our team consists of individuals with
            vast experience from some of the most prestigious media and
            advertising companies in the world.
          </p>

          <p className="font-semibold">
            By partnering with us, you can scale your business and achieve your objectives faster, allowing you to soar to greater heights.
          </p>
          <p className="font-semibold">
            Our team consists of individuals with vast experience from some of the most prestigious media and advertising companies in the world.
          </p>
        </div>

        <div className={`${time >= 40 ? "block" : "hidden"} w-full`}>
          <h1 className="text-4xl uppercase font-bold mt-[180px] text-center mb-[60px]">READY FOR TAKE-OFF</h1>

          <p className="font-semibold text-center animate-bounce">Enter Site</p>
        </div>

      </div>
    </main>
  );
}
