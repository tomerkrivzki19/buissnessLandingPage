import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import logo from "../assets/Untitle_design.svg";
// import logo from "../assets/Untitled_design.svg";
// import logo from "../assets/Untitled_design.gif";
import logo from "../assets/TomStudio.gif";
import logo2 from "../assets/Your_paragraph_text_(Website).gif";
// import logo2 from "../assets/Untitled_design_(1).svg";

const navigation = [
  { name: "Work", href: "#" },
  { name: "Services", href: "#" },
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
];
function Nav() {
  return (
    <div>
      {/* <Popover as="header" className="relative z-10 pb-5 bg-gray-50"> */}
      <Popover as="header" className="relative z-10  pb-3 bg-white ">
        <div className="">
          <nav
            aria-label="Global"
            className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 xl:px-8"
          >
            <div className="flex w-full items-center justify-between lg:w-auto">
              <a href="/">
                <span className="sr-only">Your Company</span>
                <img
                  alt="לוגו חברה"
                  // src={logo2}
                  src={logo}
                  // src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=purple&shade=600"
                  // className="h-8 w-auto sm:h-10"
                  className=" absolute top-2 left-2 h-42 sm:h-46 "
                />
                {/* <img
                  alt="לוגו חברה"
                  // src={logo2}
                  src={logo2}
                  // src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=purple&shade=600"
                  className="h-22 w-full "
                  // className=" absolute top-2 left-2 h-42 sm:h-46 "
                /> */}
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <PopoverButton className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </PopoverButton>
              </div>
            </div>
            <div className="hidden space-x-10 lg:ml-10 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="#"
                className="rounded-md border border-transparent bg-white px-6 py-2 text-base font-medium text-purple-600 shadow-md hover:bg-gray-50"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
        {/* <div className="bg-gray-50 py-4 ">
          <nav
            aria-label="Global"
            className="relative mx-auto flex max-w-7xl items-center justify-between px-6 xl:px-8"
          >
            <div className="flex w-full items-center justify-between lg:w-auto">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  alt="לוגו חברה"
                  src={logo}
                  className=" h-10 sm:h-46 w-auto "
                  // className="max-h-46 w-auto flex-shrink-0 object-contain"
                />
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <PopoverButton className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </PopoverButton>
              </div>
            </div>
            <div className="hidden space-x-10 lg:ml-10 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="#"
                className="rounded-md border border-transparent bg-white px-6 py-2 text-base font-medium text-purple-600 shadow-md hover:bg-gray-50"
              >
                Contact
              </a>
            </div>
          </nav>
        </div> */}

        <PopoverPanel
          focus
          transition
          className="absolute inset-x-0 top-0 origin-top transform p-2 transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in lg:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=purple&shade=600"
                  className="h-8 w-auto"
                />
              </div>
              <div className="-mr-2">
                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </PopoverButton>
              </div>
            </div>
            <div className="pb-6 pt-5">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <a
                  href="#"
                  className="block w-full rounded-md border border-transparent bg-purple-500 px-4 py-2 text-center font-medium text-white shadow hover:bg-purple-600"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
}

export default Nav;
