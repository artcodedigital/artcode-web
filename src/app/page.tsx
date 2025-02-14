'use client';

import Image from 'next/image';
import AppImages from '../../public/images';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="max-w-[1500px] w-[95%] min-h-[calc(100dvh-96px)] m-auto text-center flex flex-col items-center justify-between gap-7 lg:gap-10">
      {/* ---------- PRIMEIRA PARTE ----------------------------- */}
      <div className="flex flex-col items-center space-y-6 p-5">
        <h1 className=" relative w-fit m-auto text-[1.8rem] lg:text-5xl leading-[1.1] font-bold">
          O Futuro do Desenvolvimento
        </h1>
        <div className="flex items-center justify-center gap-2">
          <h2 className="font-medium lg:text-xl text-lg relative w-fit m-auto">
            Seu sistema com as melhores tecnologias do mercado, <br /> tudo
            integrado com {''}
            <div className="inline-block">
              <motion.span
                className="flex items-center gap-1 text-transparent bg-clip-text leading-[1.3]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #09A48D, #376FF4, #ED78DE, #09A48D)',
                  backgroundSize: '200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '200% 50%'],
                }}
                transition={{
                  duration: 5,
                  ease: 'linear',
                  repeat: Infinity,
                }}>
                Inteligência Artificial
                <Image
                  className="w-6 lg:w-7"
                  src={AppImages.StarIcon}
                  alt="StarIcon"
                />
              </motion.span>
            </div>
            {''}
          </h2>
        </div>
        <a href="https://wa.me/5581993418470" target="_blank">
          <button className=" flex items-center border-2 rounded-3xl p-3">
            {' '}
            <Image
              className="w-[19px] mr-2"
              src={AppImages.WhatsappIcon}
              alt="WhatsappIcon"
            />{' '}
            <span className="font-medium">Entrar em Contato</span>
          </button>
        </a>
      </div>

      <div className="relative w-full flex flex-col items-center justify-center">
        <Image
          className="relative z-10 w-[388px] h-[400px] lg:w-[388px] lg:h-[494px] md:h-[500px]"
          src={AppImages.PhoneImage}
          alt="PhoneImage"
        />
        <div className="absolute bottom-0 z-0 w-full md:w-fit border-[7px] border-b-0 border-gray-100 rounded-t-full p-7 pb-0">
          <div className="w-full md:w-fit border-[7px] border-b-0 border-gray-100 rounded-t-full p-7 pb-0">
            <div className="bg-gray-100 w-full md:w-[600px] h-[300px] rounded-t-full relative" />
          </div>
          <div className="absolute top-[-35%] left-[-30%] md:left-0 lg:left-[-18%] bg-gradient-to-r from-[#0CA38F] to-[#3671F1] w-[185px] h-[185px] md:w-[150px] lg:w-[197px] rounded-3xl hidden md:block">
            <Image
              className="w-[34] mt-4 ml-4 md:ml-24 lg:ml-5"
              src={AppImages.StarImage}
              alt="StarImage"
            />
            <h3 className="text-background font-semibold text-left md:text-right lg:text-left mx-6 my-6">
              Integração com Inteligências <br></br> Artificiais
            </h3>
          </div>
          <div className="absolute top-[-35%] right-[-30%] md:right-[-1%] lg:right-[-18%] bg-gradient-to-r from-[#A875E6] to-[#3671F1] w-[209px] h-[159px] md:w-[150px] lg:w-[197px] rounded-3xl hidden md:block">
            <Image
              className="w-[34] mt-4 ml-4"
              src={AppImages.PhoneIcon}
              alt="PhoneImage"
            />
            <h3 className="text-background font-semibold text-left mx-6 my-6">
              Aplicativos <br></br> Android e IOS
            </h3>
          </div>
          <div className="absolute top-[35%] right-[-20%] md:right-[-1%] lg:right-[-13%] bg-card w-[209px] h-[159px] md:w-[150px] md:h-[140px] lg:w-[197px] rounded-3xl hidden md:block">
            <Image
              className="w-[34] mt-4 ml-4 md:ml-5"
              src={AppImages.ComputerIcon}
              alt="StarImage"
            />
            <h3 className="text-background font-semibold text-left mx-6 my-6">
              Aplicações <br></br> Web
            </h3>
          </div>
          <Image
            className="absolute top-[15%] left-[-2%] md:left-[5%] lg:left-[-3%] md:h-[15%] lg:h-36 md:top-[20%] lg:top-[15%] hidden md:block"
            src={AppImages.ArrowBigger}
            alt="Arrow Bigger"
          />
          <Image
            className="absolute top-[-40%] right-[5%] md:right-[14%] lg:right-[10%] md:h-[5%] lg:h-36 md:top-[-42%] lg:top-[-55%] hidden md:block"
            src={AppImages.ArrowSmaller}
            alt="Arrow Smaller"
          />
          <Image
            className="absolute top-[85%] right-[5%] md:h-[5%] lg:h-36 md:right-[9%] lg:right-[7%] md:top-[78%] lg:top-[65%] hidden md:block"
            src={AppImages.ArrowSmallerR}
            alt="Arrow Smaller"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
