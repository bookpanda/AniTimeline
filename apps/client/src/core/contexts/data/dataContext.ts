import { createContext, useContext } from "react";

import { GetAnimeFromUserQueryHookResult } from "@anitimeline/codegen/src";

import { initState } from "$core/api/initState";
import { ICompleted } from "$core/api/types";

interface IDataContext {
  data: GetAnimeFromUserQueryHookResult | undefined;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  // enterData: (username: string, sort: string) => void;
}

export const DataContext = createContext<IDataContext>({
  data: undefined,
  loading: false,
  setLoading: () => null,
  // enterData: () => null,
});

export function useDataContext() {
  return useContext(DataContext);
}
