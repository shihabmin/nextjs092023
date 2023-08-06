// components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-700 px-2 py-3">
      <div className="">
        <Link href="/" className="font-bold text-lg">
          Mintifi
        </Link>
      </div>
      <ul className="flex font-semibold gap-4 mr-4">
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
  );
};
export default Navbar;
