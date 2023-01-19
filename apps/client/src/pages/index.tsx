import Image from "next/image";

import { MyPage } from "$core/@types";
import { initState } from "$core/api/initState";
import { useDataContext } from "$core/contexts";
import { InputModule, NavBar, Timeline } from "$modules/index";

import { bocchiLoading, bocchiNo } from "../../public";

const IndexPage: MyPage = () => {
  const dataContext = useDataContext();
  const { data, loading } = dataContext;
  return (
    <main className="min-h-screen w-screen bg-white-pink">
      <NavBar />
      <div className="flex w-screen flex-col items-center">
        <InputModule />
        {loading && (
          <div className="mt-20">
            <Image
              alt="bocchi"
              className="lg:hidden"
              height={300}
              src={bocchiLoading}
              width={300}
            />
            <Image
              alt="bocchi"
              className="hidden lg:block"
              height={400}
              src={bocchiLoading}
              width={400}
            />
            <h3 className="mt-4 text-center text-2xl font-bold">Loading...</h3>
          </div>
        )}
        {data !== initState && loading === false ? (
          <div className="w-full lg:w-2/5">
            <Timeline />
          </div>
        ) : (
          !loading && (
            <div className="mt-20">
              <Image
                alt="bocchi"
                className="lg:hidden"
                height={300}
                src={bocchiNo}
                width={300}
              />
              <Image
                alt="bocchi"
                className="hidden lg:block"
                height={400}
                src={bocchiNo}
                width={400}
              />
              <h3 className="mt-4 text-center text-2xl font-bold">Not found</h3>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default IndexPage;
