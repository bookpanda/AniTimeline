import { createContext, useContext } from "react";

interface IAppContext {
  username: string;
  sort: string;
  setUsername: (text: string) => void;
  setSort: (text: string) => void;
}

export const AppContext = createContext<IAppContext>({
  username: "",
  sort: "STARTED_ON",
  setUsername: () => null,
  setSort: () => null,
});

export function useAppContext() {
  return useContext(AppContext);
}
