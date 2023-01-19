import React, { FC } from "react";

import Image from "next/image";

import { bocchiNo } from "../../../public";

export const NotFound: FC = () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      <Image
        alt="bocchi"
        className="lg:hidden"
        height={300}
        src={bocchiNo}
        width={300}
      />
      <Image
        alt="bocchi"
        className="hidden lg:block"
        height={400}
        src={bocchiNo}
        width={400}
      />
      <h3 className="mt-4 text-center text-2xl font-bold">Not found</h3>
    </div>
  );
};
