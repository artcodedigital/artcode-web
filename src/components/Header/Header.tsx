import Image from 'next/image';
import AppImages from '../../../public/images';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="max-w-[1300px] w-[95%] h-24 relative flex flex-col justify-center items-center gap-3 m-auto">
        <Link
          className="lg:absolute left-0 duration-300 hover:scale-110"
          href="#">
          <Image className="w-20" src={AppImages.Logo} alt="Logo" />
        </Link>
        <div className="space-x-3 lg:space-x-6 font-semibold flex items-center">
          <Link href="#soluções">Soluções</Link>
          <span>•</span>
          <Link href="#contato">Contato</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
