export interface IData {
  data: {
    MediaListCollection: {
      lists: [
        {
          name: string;
          entries: [
            {
              startedAt: {
                year: number;
                month: number;
                day: number;
              };
              completedAt: {
                year: number;
                month: number;
                day: number;
              };
              media: {
                title: {
                  romaji: string;
                  english: string;
                  native: string;
                  userPreferred: string;
                };
                id: number;
                coverImage: {
                  extraLarge: string;
                  large: string;
                  medium: string;
                  color: string;
                };
              };
            }
          ];
        }
      ];
    };
  };
}

export interface ICompleted {
  name: string;
  entries: [
    {
      startedAt: {
        year: number;
        month: number;
        day: number;
      };
      completedAt: {
        year: number;
        month: number;
        day: number;
      };
      media: {
        title: {
          romaji: string;
          english: string;
          native: string;
          userPreferred: string;
        };
        id: number;
        coverImage: {
          extraLarge: string;
          large: string;
          medium: string;
          color: string;
        };
      };
    }
  ];
}
