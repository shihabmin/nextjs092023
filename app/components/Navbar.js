// components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-base-100">
      <div className="">
        <Link href="/">Mintifi</Link>
      </div>
      <div className="flex">
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
