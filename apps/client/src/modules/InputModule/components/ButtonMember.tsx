import React, { FC } from "react";

import clsx from "clsx";

type ButtonMemberType = {
  text: string;
  style: string;
  active: boolean;
  index: number;
  handleClick: (index: number) => void;
};

export const ButtonMember: FC<ButtonMemberType> = ({
  active,
  handleClick,
  index,
  style,
  text,
}) => {
  return (
    <button
      className={clsx(
        "border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700",
        style,
        active ? "bg-gray-100" : "bg-white shadow-md"
      )}
      type="button"
      onClick={() => handleClick(index)}
    >
      {text}
    </button>
  );
};
