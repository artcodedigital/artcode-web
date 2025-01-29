'use client';

import Image from "next/image";
import AppImages from "../../public/images";
import { motion } from 'framer-motion';

const Home = () => {
  return ( 
    <div className="max-w-[1500px] w-[95%] m-auto text-center">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-[7px] border-b-0 border-gray-100 rounded-t-full p-7 pb-0">
        <div className="border-[7px] border-b-0 border-gray-100 rounded-t-full p-7 pb-0">
          <div className="bg-gray-100 w-[600px] h-[300px] rounded-t-full relative" />
          <div>
          <Image className="absolute top-[-36%] left-1/2 transform -translate-x-1/2 z-10 w-[388px] h-[494px]" src={AppImages.PhoneImage} alt="PhoneImage" />
          </div>
        </div>
        <div className="absolute top-[-35%] left-[-30%] bg-gradient-to-r from-[#0CA38F] to-[#3671F1] w-[185px] h-[185px] rounded-3xl">
          <Image className="w-[34] mt-4 ml-4" src={AppImages.StarImage} alt="StarImage" />
          <h3 className="text-background font-semibold text-left mx-6 my-6">Integração com Inteligências <br></br> Artificiais</h3>   
        </div>
        <div className="absolute top-[-35%] right-[-30%] bg-gradient-to-r from-[#A875E6] to-[#3671F1] w-[209px] h-[159px] rounded-3xl">
          <Image className="w-[34] mt-4 ml-4" src={AppImages.PhoneIcon} alt="StarImage" />
          <h3 className="text-background font-semibold text-left mx-6 my-6">Aplicativos <br></br> Android e IOS</h3>
        </div>
        <div className="absolute top-[35%] right-[-20%] bg-card w-[209px] h-[159px] rounded-3xl">
          <Image className="w-[34] mt-4 ml-4" src={AppImages.ComputerIcon} alt="StarImage" />
          <h3 className="text-background font-semibold text-left mx-6 my-6">Aplicações <br></br> Web</h3>
        </div>
        <Image className="absolute top-[15%] left-[-2%]" src={AppImages.ArrowBigger} alt="Arrow Bigger" />
        <Image className="absolute top-[-40%] right-[5%]" src={AppImages.ArrowSmaller} alt="Arrow Smaller" />
        <Image className="absolute top-[85%] right-[5%]" src={AppImages.ArrowSmallerR} alt="Arrow Smaller" />
        </div>
        
         {/* ---------- PRIMEIRA PARTE ----------------------------- */}
      <div className="flex flex-col items-center space-y-6 p-5">
      <h1 className="text-5xl leading-[1.1] font-bold">
        O Futuro do Desenvolvimento
      </h1>
      <div className="flex items-center justify-center gap-2">
        <h2 className="font-medium">
        Seu sistema com as melhores tecnologias do mercado, <br /> tudo integrado com {''}
        <motion.span className="text-transparent bg-clip-text leading-[1.3]"
        style={{
          backgroundImage:
          'linear-gradient(to right, #09A48D, #376FF4, #ED78DE, #09A48D)',
          backgroundSize: '200%',
          display: 'inline-block',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '200% 50%'],
        }}
        transition={{
          duration: 5,
          ease: 'linear',
          repeat:Infinity,
        }}>
          Inteligência Artificial
          <Image className="w-6 h-6 absolute top-[23.7%] right-[40%]" src={AppImages.StarIcon} alt="StarIcon" />
        </motion.span>{''}
      </h2>
      
      </div>
      <button className=" flex items-center border-2 rounded-3xl p-3"> <Image className="w-[19px] mr-2" src={AppImages.WhatsappIcon} alt="WhatsappIcon" /> <span className="font-medium">Entrar em Contato</span></button>
    </div>
    </div>
   );
}
 
export default Home;

