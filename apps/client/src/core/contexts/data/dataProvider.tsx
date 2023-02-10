import { FC, PropsWithChildren, useEffect, useState } from "react";

import {
  useGetAnimeFromUserQuery,
  useTestQuery,
} from "@anitimeline/codegen/src";

import { fetchData } from "$core/api/fetchData";
import { initState } from "$core/api/initState";
import { useAppContext } from "$core/contexts/app/appContext";

import { DataContext } from "./dataContext";

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const variables = { username: "bookpanda" };
  // const newData = useGetAnimeFromUserQuery({ variables });
  // console.log(newData.data);

  const test = useTestQuery();
  console.log(test.data);

  const appContext = useAppContext();
  const { sort, username } = appContext;
  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (username !== "") {
      enterData(username, sort);
    } else {
      setData(initState);
    }
  }, [sort]);
  const enterData = (username: string, sort: string) => {
    setLoading(true);
    fetchData(username, sort).then((data) => {
      setLoading(false);
      setData(data);
    });
  };
  return (
    <DataContext.Provider value={{ data, enterData, loading, setLoading }}>
      {children}
    </DataContext.Provider>
  );
};
