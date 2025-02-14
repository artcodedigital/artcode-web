import Image from 'next/image';
import AppImages from '../../../public/images';
import Link from 'next/link';
import { Link2, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* --------------------------Estilização do Background / Logo ----------------------    */}
      <footer id="contato" className="bg-foreground">
        <div className="max-w-[1300px] w-[95%] m-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-10 lg:py-16">
          <div className="lg:w-[265px]">
            <Link href="#home">
              <Image
                className="w-36 duration-300 hover:scale-105"
                src={AppImages.Logo}
                alt="Logo"
              />
            </Link>
          </div>
          {/* -------------------------------- Estilização Produto / Planos / Contato --------------------- */}
          <div className="lg:w-[265px] flex flex-row lg:flex-col items-center gap-10">
            <Link
              className="duration-300 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-[#09A48D] hover:via-[#376FF4] hover:to-[#ED78DE]"
              href="#soluções">
              Soluções
            </Link>
            <Link
              className="duration-300 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-[#09A48D] hover:via-[#376FF4] hover:to-[#ED78DE]"
              href="#contatos">
              Contato
            </Link>
          </div>

          {/* ----------------------- Phone -------------------------------- */}
          <div className="lg:w-[265px] space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 rounded-full p-2.5">
                <Phone className="text-white" />
              </div>
              <span className="text-white text-sm font-semibold">
                +55 81 99341-8470
              </span>
            </div>
            {/* ----------------------- Contato ----------------------------- */}
            <Link
              href="mailto:contato@artcodedigital.com"
              className="flex items-center gap-2">
              <div className="bg-white/10 rounded-full p-2.5">
                <Mail className="text-white" />
              </div>
              <span className="text-white text-sm font-semibold">
                contato@artcodedigital.com
              </span>
            </Link>
            {/* ------------------------ Whatsapp ----------------------------- */}
            <Link
              className="flex items-center gap-2"
              href="https://wa.me/5581993418470"
              target="_blank">
              <div className="bg-white/10 rounded-full p-2.5">
                <Image
                  className="invert"
                  src={AppImages.WhatsappIcon}
                  alt="WhatsApp"
                />
              </div>
              <span className="text-white text-sm font-semibold">WhatsApp</span>
            </Link>
            {/* ---------------------------- Linkedin -------------------------- */}
            <Link
              className="flex items-center gap-2"
              href="https://www.linkedin.com/company/artcodesolutions/posts/?feedView=all"
              target="_blank">
              <div className="bg-white/10 rounded-full p-2.5">
                <Linkedin className="text-white" size={24} />
              </div>
              <span className="text-white text-sm font-semibold">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
      {/* -------------------------- Copyright ----------------------     */}
      <p className="bg-foreground text-center text-white text-sm border-t-2 border-white/20 py-6">
        © 2025 ArtCode Digital. Todos os direitos reservados.
      </p>
    </>
  );
};

export default Footer;
