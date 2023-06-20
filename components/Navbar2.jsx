import React, { useState } from "react";
import Link from "next/link";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap  justify-end py-4 px-6">
        <nav className="md:block md:flex md:items-center md:w-auto mt-4 md:mt-0">
          <div className="relative ml-3">
            <div className=" bg-white p-4 mt-1 rounded-md shadow-lg right-0">
              <div className="flex  justify-end">
                <Link
                  href="/ElanAccelerate"
                  className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Elan Accelerate
                </Link>
                <Link
                  href="/ElanDev"
                  className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Elan Dev
                </Link>
                <Link
                  href="/ElanGrowth"
                  className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Elan Growth
                </Link>
                <Link
                  href="/ElanStudio"
                  className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Elan Studio
                </Link>
                <Link
                  href="/ElanTraining"
                  className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Elan Training
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar2;
