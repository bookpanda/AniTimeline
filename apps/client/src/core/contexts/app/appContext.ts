import { createContext, useContext } from "react";

import { GetAnimeFromUserQueryHookResult } from "@anitimeline/codegen";

interface IAppContext {
  username: string;
  sort: string;
  setUsername: (text: string) => void;
  setSort: (text: string) => void;
  // loading: boolean;
  // setLoading: (input: boolean) => void;
  data: GetAnimeFromUserQueryHookResult | undefined;
}

export const AppContext = createContext<IAppContext>({
  username: "",
  sort: "STARTED_ON",
  setUsername: () => null,
  setSort: () => null,
  // loading: false,
  // setLoading: () => null,
  data: undefined,
});

export function useAppContext() {
  return useContext(AppContext);
}
