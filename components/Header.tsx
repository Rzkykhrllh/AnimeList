import React, { useState, useEffect } from "react";
import Image from "next/image";

import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          }
          width={100}
          height={30}
          className="object-contain cursor-pointer"
          alt="Netflix Logo"
        />

        <ul className="hidden space-x-4 md:flex ">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center text-sm font-light gap-x-4">
        <SearchIcon className="hidden h-8 lg:inline g-8" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-8 g-8" />
        <Link href="/account">
          <Image
            src={
              "https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            }
            alt="icon logo"
            height={32}
            width={32}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;