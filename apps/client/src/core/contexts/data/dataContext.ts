import { createContext, useContext } from "react";

import { initState } from "$core/api/initState";
import { ICompleted } from "$core/api/types";

interface IDataContext {
  data: ICompleted;
  enterData: (username: string, sort: string) => void;
}

export const DataContext = createContext<IDataContext>({
  data: initState,
  enterData: () => null,
});

export function useDataContext() {
  return useContext(DataContext);
}
