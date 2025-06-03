"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import NavbarItems from "./navbar-items";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={46} />
        </div>
      </Link>
      <div className=" flex items-center gap-8">
        <NavbarItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
