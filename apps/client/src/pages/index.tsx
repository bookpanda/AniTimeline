import Image from "next/image";

import { useGetAnimeFromUserQuery } from "@anitimeline/codegen/src";

import { MyPage } from "$core/@types";
import { useAppContext } from "$core/contexts";
import { InputModule, NavBar, NotFound, Timeline } from "$modules/index";

import { bocchiLoading } from "../../public";

const IndexPage: MyPage = () => {
  const appContext = useAppContext();
  const { sort, username } = appContext;
  const { data, loading } = useGetAnimeFromUserQuery({
    variables: { username },
  });

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
        {data && loading === false ? (
          <div className="w-full lg:w-2/5">
            <Timeline />
          </div>
        ) : (
          !loading && <NotFound />
        )}
      </div>
    </main>
  );
};

export default IndexPage;
