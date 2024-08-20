import React from "react";
import Image from "next/image";
import "../globals.css"


const Illiakan: React.FC = () => {
  return (
    <div className="bg-custom-bg bg-cover bg-center min-h-screen">
      <div className="flex">
        <Image
          src="/images/illiakan.webp"
          alt="test"
          width={500}
          height={300}
          />
          <span className="pl-12 text-3xl"> 일리아칸</span>
      </div>
      <div className="mt-12">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1k6gUNGwqk0?si=SUU5BLKQ6QrU4h4M"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Illiakan;
