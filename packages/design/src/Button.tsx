import { FC, PropsWithChildren, memo } from "react";

import clsx from "clsx";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = memo(({ children, onClick }) => {
  return (
    <button
      className={clsx(
        "bg-blue-light hover:bg-blue-dark h-12 rounded-lg px-4 text-lg font-bold text-black transition-colors hover:text-white"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
