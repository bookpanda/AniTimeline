import { useEffect, useState } from "react";

import { MyPage } from "$core/@types";
import { fetchData } from "$core/api/fetchData";
import { initState } from "$core/api/initState";
import { ICompleted } from "$core/api/types";
import { InputModule, NavBar, Timeline } from "$modules/index";

const IndexPage: MyPage = () => {
  const [username, setUsername] = useState("");
  const [sort, setSort] = useState("STARTED_ON");
  const [data, setData] = useState<ICompleted>(initState);
  useEffect(() => {
    fetchData(username, sort).then((data) => setData(data));
  }, [sort, username]);
  const updateUsername = (newUsername: string) => {
    setUsername(newUsername);
  };
  const updateSort = (newSort: string) => {
    setSort(newSort);
  };
  const enterData = () => {
    fetchData(username, sort).then((data) => setData(data));
    console.log(data);
  };
  return (
    <main className="min-h-screen w-screen bg-white-pink">
      <NavBar />
      <div className="flex w-screen flex-col items-center">
        <InputModule
          handleEnterData={enterData}
          handleUpdateSort={updateSort}
          handleUpdateUsername={updateUsername}
          sort={sort}
          username={username}
        />
        {data !== initState && (
          <div className="w-full lg:w-2/5">
            <Timeline entries={data.entries} />
          </div>
        )}
      </div>
    </main>
  );
};

export default IndexPage;
