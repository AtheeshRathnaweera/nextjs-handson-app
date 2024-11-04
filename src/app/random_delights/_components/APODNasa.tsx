"use client";

import Image from "next/image";
import { SiNasa } from "react-icons/si";
import { useState, useEffect } from "react";
import { APODResponse } from "@/app/api/_dto/APODResponse";

export default function APODNasa() {
  const [apodData, setApodData] = useState<APODResponse | null>(null);

  useEffect(() => {
    const fetchApodData = async () => {
      // API call to get the current user IP
      const apodResponse = await fetch("/api/NasaAPOD");
      if (!apodResponse.ok) {
        throw new Error("Failed to fetch APOD data");
      }
      const apodData = await apodResponse.json()
      setApodData(apodData);
    };
    fetchApodData();
  }, []);

  const viewImage = () => {
    window.open(apodData?.hdurl, "_blank");
  };

  return (
    <>
      <div className="rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div>
          <h2 className="text-xl font-bold p-5 text-center uppercase">
            Astronomy Picture of the day
          </h2>
        </div>
        {apodData?.hdurl ? (
          <>
            <div className="relative">
              <Image
                className="w-full h-64 object-cover hover:scale-105 transform transition-all duration-300"
                src={apodData.url}
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
              <button
                type="button"
                className="absolute bottom-0 m-4 inline-flex items-center bg-gray-800 text-white hover:text-white border border-gray-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-xs px-3 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={viewImage}
              >
                View Full Image
              </button>
            </div>
            <div className="p-5 pb-3 bg-white">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {apodData?.title}
              </h3>
              <p className="text-gray-700 leading-tight mb-3 line-clamp-3">
                {apodData?.explanation}
              </p>
              <div>
                <button
                  type="button"
                  className="items-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-xs px-3 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 me-2"
                  disabled
                >
                  Read More
                </button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <a
                    href="https://api.nasa.gov/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiNasa className="text-5xl text-gray-500 hover:text-gray-700" />
                  </a>
                </div>
                <span className="text-gray-600">{apodData?.date}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="h-50 p-3 overflow-hidden bg-gray-200 animate-pulse"></div>
        )}
      </div>
    </>
  );
}