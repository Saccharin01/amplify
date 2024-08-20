"use client";
import React from "react";
import { useState, useEffect } from "react";
import urlPath from "@/static/script";
import "./globals.css";

const Entry: React.FC = () => {
  const [location, setlocation] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setlocation(window.location.origin);
    }
  }, []);

  return (
    <div className="flex items-center justify-center mt-60">
      {urlPath.map((element, index) => (
        <div
          key={index}
          className="
          w-fit text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700
          "
        >
          <a href={`${location}${element}`}>{element.split("/").join(" ")}</a>
        </div>
      ))}
    </div>
  );
};

export default Entry;
