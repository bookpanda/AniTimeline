import { createContext, useContext } from "react";

import { initState } from "$core/api/initState";
import { ICompleted } from "$core/api/types";

interface IDataContext {
  data: ICompleted;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  enterData: (username: string, sort: string) => void;
}

export const DataContext = createContext<IDataContext>({
  data: initState,
  loading: false,
  setLoading: () => null,
  enterData: () => null,
});

export function useDataContext() {
  return useContext(DataContext);
}
