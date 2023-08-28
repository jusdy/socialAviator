import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

const ServiceTabs = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="col-span-2 flex justify-center">
          <Tabs className="w-full my-4 xl:px-20 lg:px-12 px-6" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className="grid grid-cols-4 gap-10 justify-around my-5">
              <Tab className={`${tabIndex === 0 ? "bg-gold border-gold" : " border-secondary"} cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-2`}>
                SOCIAL LABS
              </Tab>
              <Tab className={`${tabIndex === 1 ? "bg-gold border-gold" : "border-secondary"} cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-2`}>
                SOCIAL SETS
              </Tab>
              <Tab className={`${tabIndex === 2 ? "bg-gold border-gold" : "border-secondary"} cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-2`}>
                SOCIAL PRODUCTION
              </Tab>
              <Tab className={`${tabIndex === 3 ? "bg-gold border-gold" : "border-secondary"} cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-2`}>
                SOCIAL BIZ
              </Tab>
            </TabList>

            <TabPanel className="flex justify-center bg-[#FFF7D3]">
              <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl p-6">
                <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">
                  Social Labs
                </h1>

                <span className="text-black lg:text-lg text-base">
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
            </TabPanel>
            <TabPanel className="flex justify-center bg-[#FFF7D3]">
              <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl p-6">
                <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">
                  Social Sets
                </h1>

                <span className="text-black lg:text-lg text-base">
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
            </TabPanel>
            <TabPanel className="flex justify-center bg-[#FFF7D3]">
              <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl p-6">
                <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">
                  Social Production
                </h1>

                <span className="text-black lg:text-lg text-base">
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
            </TabPanel>
            <TabPanel className="flex justify-center bg-[#FFF7D3]">
              <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl p-6">
                <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">
                  Social Biz
                </h1>

                <span className="text-black lg:text-lg text-base">
                  Supporting SMEs across India
                  <br></br>
                  Creative Campaign Planning with Celebs
                  <br></br>
                  Partnering with celebs for long-term gains
                  <br></br>
                  Working together on business plans & innovations
                  <br></br>
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