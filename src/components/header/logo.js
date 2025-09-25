import Image from "next/image";
import Link from "next/link";


export const Logo = ({className}) => {
  return (
    <Link href="/">
      <Image src="/assets/logo.png" alt="logos" width={150} height={80} className={`flex flex-wrap items-center ${className} ` }/>
    </Link>
  );
};


