import React, { FC, useState } from "react";

import { useAppContext } from "$core/contexts";

import { ButtonMember } from "./ButtonMember";

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
      style: "",
      text: "Completed",
      sort: "FINISHED_ON",
      active: false,
    },
    {
      style: "rounded-r-lg",
      text: "Days",
      sort: "STARTED_ON",
      active: false,
    },
  ];
  const [buttonState, setButtonState] = useState(initState);
  const AppContext = useAppContext();
  const { setSort } = AppContext;
  const click = (index: number) => {
    setButtonState((oldState) => {
      const newState = oldState;
      newState[index] = {
        ...newState[index],
        active: true,
      };
      for (let i = 0; i < 4; i++) {
        if (i !== index) {
          newState[i].active = false;
        }
      }
      return newState;
    });
    setSort(buttonState[index].sort);
  };

  return (
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
  );
};
