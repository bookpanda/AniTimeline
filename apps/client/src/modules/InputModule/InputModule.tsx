import React, { FC } from "react";

import { Button, InputText } from "@anitimeline/design";

type InputModuleType = {
  username: string;
  sort: string;
  handleEnterData: () => void;
  handleUpdateSort: (value: string) => void;
  handleUpdateUsername: (value: string) => void;
};

export const InputModule: FC<InputModuleType> = ({
  handleEnterData,
  handleUpdateSort,
  handleUpdateUsername,
  sort,
  username,
}) => {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center rounded-2xl bg-white p-4 lg:w-2/5">
      <h3 className="text-xl font-bold">Enter your AniList username</h3>
      <div className="flex items-center space-x-4">
        <InputText
          handleChange={(e) => handleUpdateUsername(e.target.value)}
          name="username"
          type="text"
          value={username}
        />
        <Button onClick={() => handleEnterData()}>Enter</Button>
      </div>
      <InputText
        handleChange={(e) => handleUpdateSort(e.target.value)}
        name="sort"
        type="text"
        value={sort}
      />
      <Button onClick={() => handleEnterData()}>Enter</Button>
    </div>
  );
};
