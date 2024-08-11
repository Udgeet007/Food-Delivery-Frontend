import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      {/* Left Links */}
      <div className="hidden md:flex gap-4">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* {LOGO} */}

      <div className="text-xl">
        <Link href="/">MASSIMO</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex gap-4">
        <Link href="/login">Login</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
};
export default Navbar;
