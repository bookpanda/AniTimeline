import { useUserCountQuery } from "@anitimeline/codegen";
import { Button } from "@anitimeline/design";

import { MyPage } from "$core/@types";

const IndexPage: MyPage = () => {
  const { data } = useUserCountQuery();

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-8 text-center transition-colors">
      AniTimeline
    </main>
  );
};

export default IndexPage;
