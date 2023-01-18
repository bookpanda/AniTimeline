import { useState } from "react";

import { Button, InputText } from "@anitimeline/design";

import { MyPage } from "$core/@types";
import { fetchData } from "$core/api/fetchData";
import { initState } from "$core/api/initState";
import { ICompleted } from "$core/api/types";
import { NavBar, Timeline } from "$modules/index";

const IndexPage: MyPage = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState<ICompleted>(initState);
  const updateUsername = (newUsername: string) => {
    setUsername(newUsername);
  };
  const enterData = () => {
    fetchData(username).then((data) => setData(data));
    console.log(data);
  };
  return (
    <main className="min-h-screen w-screen bg-white-pink">
      <NavBar />
      <div className="flex w-screen flex-col items-center">
        <div className="mt-20 flex w-full flex-col items-center justify-center rounded-2xl bg-white p-4 lg:w-2/5">
          <h3 className="text-xl font-bold">Enter your AniList username</h3>
          <div className="flex items-center space-x-4">
            <InputText
              handleChange={(e) => updateUsername(e.target.value)}
              name="username"
              type="text"
              value={username}
            />
            <Button onClick={() => enterData()}>Enter</Button>
          </div>
        </div>
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
