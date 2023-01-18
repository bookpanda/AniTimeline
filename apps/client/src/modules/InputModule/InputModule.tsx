import React, { FC } from "react";

import { Button, InputText } from "@anitimeline/design";

import { useAppContext, useDataContext } from "$core/contexts";

import { ButtonGroup } from "./components/ButtonGroup";

export const InputModule: FC = () => {
  const appContext = useAppContext();
  const dataContext = useDataContext();
  const { setUsername, sort, username } = appContext;
  const { enterData } = dataContext;
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center rounded-2xl bg-white p-4 shadow-xl lg:w-2/5">
      <h3 className="text-xl font-bold">Enter your AniList username</h3>
      <div className="flex items-center space-x-4">
        <InputText
          handleChange={(e) => setUsername(e.target.value)}
          name="username"
          type="text"
          value={username}
        />
        <Button onClick={() => enterData(username, sort)}>Enter</Button>
      </div>
      {username && (
        <div className="mt-4 flex space-x-4">
          <ButtonGroup />
        </div>
      )}
    </div>
  );
};
