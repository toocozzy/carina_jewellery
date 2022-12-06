import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image alt="logo" src={logo} height={90} width={180} />
    </Link>
  );
};

export default Logo;
