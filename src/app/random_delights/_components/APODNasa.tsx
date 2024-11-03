"use client";

import Image from "next/image";
import { SiNasa } from "react-icons/si";

const nasa_image = {
  date: "2024-11-03",
  explanation:
    "What's that black spot on Jupiter? No one is sure.  During one pass of NASA's Juno over  Jupiter, the robotic spacecraft imaged an usually dark cloud feature informally dubbed the Abyss. Surrounding cloud patterns show the Abyss to be at the center of a vortex. Since dark features on Jupiter's atmosphere tend to run deeper than light features, the Abyss may really be the deep hole that it appears -- but without more evidence that remains conjecture.  The Abyss is surrounded by a complex of meandering clouds and other swirling storm systems, some of which are topped by light colored, high-altitude clouds.  The featured image was captured in 2019 while Juno passed only about 15,000 kilometers above Jupiter's cloud tops.  The next close pass of Juno near Jupiter will be in about three weeks.",
  hdurl:
    "https://apod.nasa.gov/apod/image/2411/JupiterAbyss_JunoEichstadt_1080.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Jupiter Abyss",
  url: "https://apod.nasa.gov/apod/image/2411/JupiterAbyss_JunoEichstadt_1080.jpg",
};

export default function APODNasa() {
  const viewImage = () => {
    window.open(nasa_image.hdurl, "_blank");
  };

  return (
    <>
      <div className="rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div>
          <h2 className="text-xl font-bold p-5 text-center uppercase">
            Astronomy Picture of the day
          </h2>
        </div>
        <div className="relative">
          <Image
            className="w-full h-64 object-cover"
            src={nasa_image.url}
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
            {nasa_image.title}
          </h3>
          <p className="text-gray-700 leading-tight mb-3 line-clamp-3">
            {nasa_image.explanation}
          </p>
          <div>
            <button
              type="button"
              className="items-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-xs px-3 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 me-2"
            >
              Read More
            </button>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <SiNasa className="text-5xl" style={{ color: "grey" }} />
            </div>
            <span className="text-gray-600">2 hours ago</span>
          </div>
        </div>
      </div>
    </>
  );
}