import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

const ServiceTabs = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="col-span-2 flex justify-center">
          <Tabs className="w-full my-4 xl:px-20 lg:px-12 px-6" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className="grid grid-cols-4 gap-10 justify-around my-5">
              <Tab className={`${tabIndex === 0 ? "bg-gold border-gold text-secondary" : " border-secondary text-black"} cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-2`}>
                SOCIAL LABS
              </Tab>
              <Tab className={`${tabIndex === 1 ? "bg-gold border-gold text-secondary" : "border-secondary text-black"} cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-2`}>
                SOCIAL SETS
              </Tab>
              <Tab className={`${tabIndex === 2 ? "bg-gold border-gold text-secondary" : "border-secondary text-black"} cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-2`}>
                SOCIAL PRODUCTION
              </Tab>
              <Tab className={`${tabIndex === 3 ? "bg-gold border-gold text-secondary" : "border-secondary text-black"} cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-2`}>
                SOCIAL BIZ
              </Tab>
            </TabList>

            <TabPanel className="flex justify-center bg-[#FFF7D3]">
              <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl p-6">
                <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">
                  Social Labs
                </h1>

                <span className="text-black lg:text-lg text-base list-disc">
                  <li> Campaign Planning </li>
                  <li> Creative Strategy</li>
                  <li> Collaboration with Leading Influencers/ Celebrities</li>
                  <li> Post Campaign Report</li>
                  <li> Script Writing Support</li>
                  <li> Absolute execution support</li>
                  <li> Quick turnaround time</li>
                </span>
              </div>
            </TabPanel>
            <TabPanel className="flex justify-center bg-[#FFF7D3]">
              <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl p-6">
                <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">
                  Social Sets
                </h1>

                <ol className="text-black lg:text-lg text-base list-disc">
                  <li>Access to existing venues</li>
                  <li>Saves you cost & time for art setup</li>
                  <li>Options to choose from</li>
                  <li>Helps enhance to production value</li>
                  <li>Helps you think of a better creative approach</li>
                  <li>Most cost-effective pricing</li>
                  <li>Reduces efforts for coordination with multiple vendors</li>
                </ol>
              </div>
            </TabPanel>
            <TabPanel className="flex justify-center bg-[#FFF7D3]">
              <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl p-6">
                <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">
                  Social Production
                </h1>

                <span className="text-black lg:text-lg text-base list-disc">
                  <li>Quality equipment for shooting purposes</li>
                  <li>Best of behind-the-camera crew</li>
                  <li>Most suitable casting for support cast</li>
                  <li>End-to-end production support for video & audio creation</li>
                  <li>End-to-end postproduction support</li>
                  <li>Most cost-effective pricing</li>
                  <li>Quick turnaround time</li>
                </span>
              </div>
            </TabPanel>
            <TabPanel className="flex justify-center bg-[#FFF7D3]">
              <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl p-6">
                <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">
                  Social Biz
                </h1>

                <span className="text-black lg:text-lg text-base">
                  
                  <li>Supporting SMEs across India</li>
                  <li>Creative Campaign Planning with Celebs</li>
                  <li>Partnering with celebs for long-term gains</li>
                  <li>Working together on business plans & innovations</li>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    )
}

export default ServiceTabs;