import { FC, PropsWithChildren, useEffect, useState } from "react";

import { fetchData } from "$core/api/fetchData";
import { initState } from "$core/api/initState";
import { useAppContext } from "$core/contexts/app/appContext";

import { DataContext } from "./dataContext";

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const appContext = useAppContext();
  const { sort, username } = appContext;
  const [data, setData] = useState(initState);
  useEffect(() => {
    if (username !== "") {
      enterData(username, sort);
    } else {
      setData(initState);
    }
  }, [sort]);
  const enterData = (username: string, sort: string) => {
    if (username !== "") {
      fetchData(username, sort).then((data) => setData(data));
      console.log(data);
    } else {
      setData(initState);
    }
  };
  return (
    <DataContext.Provider value={{ data, enterData }}>
      {children}
    </DataContext.Provider>
  );
};
