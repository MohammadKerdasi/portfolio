"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'

const info = [
  {
    icon : <FaPhoneAlt/>,
    title : 'Phone',
    desc : "+96332262466"
  },
  {
    icon : <FaEnvelope/>,
    title : 'Email',
    desc : "mohammadkerdasi033@gmail.com "
  },
  {
    icon : <FaMapMarkerAlt/>,
    title : 'Address',
    desc : "Lattakia ,Syria"
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  return <motion.section
  initial={{ opacity: 0 }}
  animate={{ 
  opacity: 1 , 
  transition : {delay : 2.4 , duration : 0.4 , ease : "easeIn"} 
  }}
  className="py-4"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Eos asperiores eaque non, nulla quas id sunt numquam doloremque 
              impedit voluptatibu
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type='firstname' placeholder='Firstname'/>
                <Input type='lastname' placeholder='Lastname'/>
                <Input type='email' placeholder='Email Address'/>
                <Input type='phone' placeholder='Phone Number'/>
              </div>
              <Textarea className="h-[200px]" placeholder='type your message here'/>
              <Button size='md' className='max-w-40'>
                Send message
              </Button>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-[40px] h-[40px] md:w-[72px] md:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="md:text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="md:text-[20px] text-[13px]">{item.desc}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
