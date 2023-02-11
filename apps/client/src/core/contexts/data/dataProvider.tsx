import { FC, PropsWithChildren, useEffect, useState } from "react";

import {
  GetAnimeFromUserQueryHookResult,
  useGetAnimeFromUserQuery,
} from "@anitimeline/codegen/src";

import { fetchData } from "$core/api/fetchData";
import { initState } from "$core/api/initState";
import { useAppContext } from "$core/contexts/app/appContext";

import { DataContext } from "./dataContext";

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const appContext = useAppContext();
  const { sort, username } = appContext;
  const [data, setData] = useState<GetAnimeFromUserQueryHookResult | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  const newData = useGetAnimeFromUserQuery({ variables: { username } });
  // if (newData.data) {
  //   setData(newData);
  // }
  // useEffect(() => {
  //   if (username !== "") {
  //     enterData(username, sort);
  //   } else {
  //     setData(initState);
  //   }
  // }, [sort]);
  // const enterData = (username: string, sort: string) => {
  //   setLoading(true);
  //   fetchData(username, sort).then((data) => {
  //     setLoading(false);
  //     setData(data);
  //   });
  // };
  return (
    <DataContext.Provider value={{ data, loading, setLoading }}>
      {children}
    </DataContext.Provider>
  );
};
