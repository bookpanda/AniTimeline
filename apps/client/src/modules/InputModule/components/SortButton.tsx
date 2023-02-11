import React, { FC } from "react";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";

import clsx from "clsx";

type ButtonMemberType = {
  ascending: boolean;
  handleClick: () => void;
};

export const SortButton: FC<ButtonMemberType> = ({
  ascending,
  handleClick,
}) => {
  return (
    <button
      className={clsx(
        "rounded-lg border border-gray-200  bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-md hover:bg-gray-100 hover:text-blue-700"
      )}
      type="button"
      onClick={() => handleClick()}
    >
      {ascending ? <ArrowDown /> : <ArrowUp />}
    </button>
  );
};
