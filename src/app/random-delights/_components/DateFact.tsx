"use client";

import { TodaysFactResponse } from "@/app/api/_dto/TodaysFactResponse";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DateFact() {
  const [today, setToday] = useState("");
  const [factData, setApodData] = useState<TodaysFactResponse | null>(null);

  useEffect(() => {
    const date = new Date();
    const formattedDate = date
      .toLocaleDateString("en-US", {
        month: "long", // Full month name, e.g., November
        day: "2-digit", // Day with leading zero if needed, e.g., 04
      })
      .toUpperCase();
    setToday(formattedDate);

    const fetchFactData = async () => {
      const factResponse = await fetch("/api/numbers/today");
      if (!factResponse.ok) {
        throw new Error("Failed to fetch data");
      }
      const factData = await factResponse.json();
      setApodData(factData);
    };
    fetchFactData();
  }, []);

  return (
    <>
      <div className="rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div>
          <h2 className="text-xl font-bold p-5 text-center uppercase">
            Today&apos;s Fascinating Fact
          </h2>
        </div>
        {factData?.fact ? (
          <>
            <div className="relative">
              <Image
                className="w-full h-64 object-cover"
                src="/date_fact_bg.jpg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
              <div className="text-6xl text-white font-bold font-mono absolute inset-0 flex items-center justify-center">
                {today}
              </div>
            </div>
            <div className="p-5 pb-3 bg-white">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{today}</h3>
              <p className="text-gray-700 leading-tight mb-3 line-clamp-3">
                {factData.fact}
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
              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center">
                  <a
                    href="http://numbersapi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-1xl text-gray-500 font-semibold hover:text-gray-700"
                  >
                    NUMBERSAPI
                  </a>
                </div>
                <span className="text-gray-600">{factData.date}</span>
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