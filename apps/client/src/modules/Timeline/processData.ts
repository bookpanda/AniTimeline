import { GetAnimeFromUserQueryHookResult } from "@anitimeline/codegen";

export function processData(data: GetAnimeFromUserQueryHookResult | undefined) {
  const dataLists = data?.data?.MediaListCollection?.lists;
  if (dataLists) {
    const elementPos = dataLists
      .map(function (x) {
        if (x) return x.name;
      })
      .indexOf("Completed");
    const entryData = dataLists[elementPos]?.entries?.map((entry, index) => {
      const bgColor = index % 2 === 0 ? "#6ac0ee" : "#f4d64f";
      const textColor = index % 2 === 0 ? "#ffffff" : "#000000";
      const media = entry?.media;
      const id = media?.id;
      const title = media?.title?.english ?? media?.title?.userPreferred;
      const src = media?.coverImage?.large;
      const nodes = media?.characters?.nodes;
      const numChar = nodes?.length || 1;
      const srcChar =
        nodes && nodes[Math.floor(Math.random() * numChar)]?.image?.medium;
      const score = entry ? entry.score : 0;
      const startedAt = new Date(
        entry?.startedAt?.year || 2003,
        entry?.startedAt?.month || 9 - 1,
        entry?.startedAt?.day || 21
      );
      const completedAt = new Date(
        entry?.completedAt?.year || 2003,
        entry?.completedAt?.month || 9 - 1,
        entry?.completedAt?.day || 21
      );
      return {
        bgColor,
        textColor,
        id,
        title,
        src,
        srcChar,
        score,
        startedAt,
        completedAt,
      };
    });
    return entryData;
  }
  return undefined;
}
