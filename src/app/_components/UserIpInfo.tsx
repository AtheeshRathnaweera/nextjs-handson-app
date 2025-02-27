"use client";

import { useState, useEffect } from "react";

export default function UserIpInfo() {
  const [ip, setIp] = useState('');

  // get the user IP when loading
  useEffect(() => {
    fetch("https://api.ipify.org")
      .then((res) => res.text())
      .then((data) => {
        setIp(data);
        console.log("This is the client IP 01:", data);
      });
  }, []); 
  

  return (
    <nav className="border-b border-gray-300 dark:border-gray-600">
      <div className="container flex items-center justify-center mx-auto capitalize p-3 text-sm">
        { ip + " | " }Colombo, Sri Lanka | +05:30
      </div>
      {/* <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 border-red-200">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <a
            href="tel:5541251234"
            className="text-sm dark:text-white hover:underline"
          >
            (555) 412-1234
          </a>
          <a
            href="#"
            className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
          >
            Login
          </a>
        </div>
      </div> */}
    </nav>
  );
}