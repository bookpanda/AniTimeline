import { FC, PropsWithChildren, useState } from "react";

import { AppContext } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [username, setUsername] = useState("");
  const [sort, setSort] = useState("STARTED_ON");
  return (
    <AppContext.Provider value={{ username, sort, setUsername, setSort }}>
      {children}
    </AppContext.Provider>
  );
};
