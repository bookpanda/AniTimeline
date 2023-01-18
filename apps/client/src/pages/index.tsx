import { MyPage } from "$core/@types";
import { initState } from "$core/api/initState";
import { useDataContext } from "$core/contexts";
import { InputModule, NavBar, Timeline } from "$modules/index";

const IndexPage: MyPage = () => {
  const dataContext = useDataContext();
  const { data } = dataContext;
  return (
    <main className="min-h-screen w-screen bg-white-pink">
      <NavBar />
      <div className="flex w-screen flex-col items-center">
        <InputModule />
        {data !== initState && (
          <div className="w-full lg:w-2/5">
            <Timeline />
          </div>
        )}
      </div>
    </main>
  );
};

export default IndexPage;
