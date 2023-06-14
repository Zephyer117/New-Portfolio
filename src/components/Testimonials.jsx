import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

import Wrapper from './Wrapper'
import Div from './Div'
import pe1 from '../assets/sec-4-p-e-1.png'
import pe2 from '../assets/sec-4-p-e-2.png'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import '../slider.css'

const Testimonials = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false })
  const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false })
  return (
    <div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-4-p-e-1 rellax" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-4-p-e-2 rellax" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* SECTION HEADING START */}
        <Div className="mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
            Client Says
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </Div>
        {/* SECTION HEADING END */}

        {/* CAROUSEL START */}
        <Div className="bg-[#F2F2F2] w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
          <Carousel>
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
              <div className="mb-[25px]">
                <img
                  src="https://i.pravatar.cc/300"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                />
                <div className="font-bold">John Doy</div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                  Client
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                We re-did our website twice in a 12 month period. There was no
                comparison between the first company and Thrive. Professional,
                Creative, Attentive to Detail, Excellent Communication…If I had
                contracted with Thrive the first time I would not have had to do
                it twice.
              </div>
            </div>
            {/* SLIDE END */}
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
              <div className="mb-[25px]">
                <img
                  src="https://i.pravatar.cc/300"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                />
                <div className="font-bold">John Doy</div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                  Client
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                I would highly recommend Thrive Internet Marketing. They are
                great to work with. The traffic to our website has increased
                thanks to their SEO program.
              </div>
            </div>
            {/* SLIDE END */}
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
              <div className="mb-[25px]">
                <img
                  src="https://i.pravatar.cc/300"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                />
                <div className="font-bold">John Doy</div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                  Client
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                Since having our new website built by Thrive, we have seen a
                100% increase in the number of online contact forms being filled
                out and returned to us. Matt and his team worked closely with us
                to provide a site that met all of the criteria that we were
                looking for. The end result was a website that is attractive,
                organized and effective. Thanks to Thrive for all of your hard
                work and support!
              </div>
            </div>
            {/* SLIDE END */}
          </Carousel>
        </Div>
        {/* CAROUSEL END */}
      </Wrapper>
    </div>
  )
}

export default Testimonials
