import React, { FC, useState } from "react";

import { useAppContext } from "$core/contexts";

import { ButtonMember } from "./ButtonMember";
import { SortButton } from "./SortButton";

export const ButtonGroup: FC = () => {
  const initState = [
    {
      style: "rounded-l-lg",
      text: "Score",
      sort: "SCORE",
      active: true,
    },
    {
      style: "",
      text: "Started",
      sort: "STARTED_ON",
      active: false,
    },
    {
      style: "rounded-r-lg",
      text: "Completed",
      sort: "FINISHED_ON",
      active: false,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonState, setButtonState] = useState(initState);
  const [ascending, setAscending] = useState(true);
  const AppContext = useAppContext();
  const { setSort } = AppContext;
  const click = (index: number) => {
    setAscending(!ascending);
    setButtonState((oldState) => {
      const newState = oldState;
      newState[index] = {
        ...newState[index],
        active: true,
      };
      for (let i = 0; i < 3; i++) {
        if (i !== index) {
          newState[i].active = false;
        }
      }
      return newState;
    });
    setCurrentIndex(index);
    setSort(buttonState[index].sort + (ascending ? "" : "_DESC"));
  };

  return (
    <div className="flex space-x-4">
      <div className="inline-flex rounded-md" role="group">
        {buttonState.map((button, index) => (
          <ButtonMember
            key={index}
            active={button.active}
            handleClick={() => click(index)}
            index={index}
            style={button.style}
            text={button.text}
          />
        ))}
      </div>
      <SortButton
        ascending={ascending}
        handleClick={() => {
          setAscending(!ascending);
          setSort(buttonState[currentIndex].sort + (ascending ? "" : "_DESC"));
        }}
      />
    </div>
  );
};
