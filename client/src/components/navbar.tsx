import Image from "next/image";
import DTULogo from "../assets/images/DTULogo.jpg";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red">
      <Link href="/">
      <Image src={DTULogo} alt="DTU logo" className="w-16 h-auto mx-auto" />
      </Link>
    </nav>
  );
};

export default Navbar;