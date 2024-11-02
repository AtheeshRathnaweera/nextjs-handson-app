"use client";

import { useState, useEffect } from "react";
import { IpInfoResponse } from "../api/_dto/IpInfoResponse";

export default function UserIpInfo() {
  const [ipInfo, setIpInfo] = useState<IpInfoResponse | null>(null);

  useEffect(() => {
    const fetchIpData = async () => {
      return;
      // API call to get the current user IP
      const userIpResponse = await fetch("https://api.ipify.org")
      if (!userIpResponse.ok) {
        throw new Error("Failed to fetch users's IP");
      }
      const userIp = await userIpResponse.text();

      // API call to retrieve more information from the user IP
      const ipInfoResponse = await fetch("/api/IpInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: userIp }),
      });
      if (!ipInfoResponse.ok) {
        throw new Error("Failed to fetch users's IP information");
      }
      const userIpInfo = await ipInfoResponse.json();
      setIpInfo(userIpInfo)
    }

    fetchIpData();
  }, []); 
  

  return (
    <nav className="border-b border-gray-300 dark:border-gray-600">
      <div className="container flex items-center justify-center mx-auto capitalize p-3 text-sm">
        { ipInfo?.ip + " | " + ipInfo?.city_name + ", " + ipInfo?.country_name + " | " + ipInfo?.time_zone }
      </div>
    </nav>
  );
}