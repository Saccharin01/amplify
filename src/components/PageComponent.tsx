import React from "react";
import Image from "next/image";
interface test {}

const PageComponent: React.FC = () => {
  return (
    <div>
      <a href="">
        <div className=" flex w-full h-10/12">
          <Image src="/string" alt="" width={120} height={120} />
          <span>12345</span>
        </div>
      </a>
    </div>
  );
};

export default PageComponent;
