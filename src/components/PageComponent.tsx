import React from "react";
import Image from "next/image";
import { AmplifyClient } from "@aws-sdk/client-amplify";
interface test {}

const PageComponent: React.FC = () => {
  return (
    <div>
      <a href="">
        <div className=" flex w-full h-10/12 justify-between">
          <Image src="/string" alt="123124" width={120} height={120} />
          <span>12345</span>
        </div>
      </a>
    </div>
  );
};

export default PageComponent;
