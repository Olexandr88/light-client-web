/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export default function Header({
  button,
  showButton = true,
}: {
  button: ReactNode;
  showButton?: boolean;
}) {
  return (
    <nav className="navbar bg-transparent px-4 py-8 md:px-16 flex flex-row">
      <div className="flex-1">
        <Link
          href="/"
          className="text-mono btn-ghost btn text-xl normal-case md:text-3xl"
        >
          <img
            src="/images/availlogo.png"
            alt=""
            className="max-h-[40px]"
          />
          <span className="text-mono hidden text-xl normal-case md:inline-flex md:text-2xl ml-2">  
          </span>
        </Link>
      </div>
      {showButton ? (
        <div className="invisible flex-none sm:visible md:visible lg:visible xl:visible">
          {button}
        </div>
      ) : (
        <div className="flex-none">{button}</div>
      )}
    </nav>
  );
}