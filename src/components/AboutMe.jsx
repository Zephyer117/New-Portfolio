import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

import Wrapper from './Wrapper'
import flag from '../assets/image flag.png'
import pe1 from '../assets/sec-2-p-e-1.png'
import pe2 from '../assets/sec-2-p-e-2.png'
import Div from './Div'

const AboutMe = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false })
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false })
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A Webpage Developer</span>
          <span className="flex items-center gap-2">
            <span>From</span>
            <img
              src={flag}
              alt=""
              className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
            />
            <span>Bangladesh</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          I`m a developer from Bangladesh. I usually Create website application
          both single page and multiple page. I can help you maintain your
          website application also give services if there is any prblm,
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          Also if you are looking for someone to handle your editing and
          desgining sector I have people for that. I personally with my fellow
          team members Work on both sides.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
          We offer premium quality video editing AI designing service and also
          quality based UI/UX design 3d Motion video and other stuffs.
        </Div>
        {/* PARAGRAPH END */}
      </Wrapper>
    </div>
  )
}

export default AboutMe
