import { ICompleted } from "$core/api/types";

export const initState: ICompleted = {
  name: "",
  entries: [
    {
      startedAt: {
        year: 0,
        month: 0,
        day: 0,
      },
      completedAt: {
        year: 0,
        month: 0,
        day: 0,
      },
      media: {
        title: {
          romaji: "",
          english: "",
          native: "",
          userPreferred: "",
        },
        id: 0,
        coverImage: {
          extraLarge: "",
          large: "",
          medium: "",
          color: "",
        },
      },
    },
  ],
};