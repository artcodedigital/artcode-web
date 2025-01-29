import Image from "next/image";
import AppImages from "../../../public/images";
import Link from "next/link";

const Header = () => {
    return ( 
        <header>
            <div className="max-w-[1500px] w-[95%] h-24 relative flex justify-center items-center m-auto">
                <Link className="absolute left-0 duration-300 hover:scale-110" href="#">
                <Image src={AppImages.Logo} alt="Logo" />
                </Link>
            <div className="space-x-6 font-semibold flex items-center">
                <Link href="#soluções">Soluções</Link>
                <span>•</span>
                <Link href="#contato">Contato</Link>
            </div>
            </div>
        </header>
     );
}
 
export default Header;