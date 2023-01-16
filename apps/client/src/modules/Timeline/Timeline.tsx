import React, { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Image from "next/image";

type TimelineProps = {
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
};

export const Timeline: FC<TimelineProps> = ({ entries }) => {
  const dateDiff = (first: Date, second: Date) => {
    return Math.round(
      (second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)
    );
  };

  return (
    <>
      <VerticalTimeline>
        {entries.map((entry) => {
          const id = entry.media.id;
          const title = entry.media.title.english;
          const src = entry.media.coverImage.large;
          const startedAt = new Date(
            entry.startedAt.year,
            entry.startedAt.month,
            entry.startedAt.day
          );
          const completedAt = new Date(
            entry.completedAt.year,
            entry.completedAt.month,
            entry.completedAt.day
          );
          return (
            <VerticalTimelineElement
              key={id}
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              date={startedAt.toDateString()}
              icon={
                <Image
                  alt={title}
                  height={50}
                  loader={() => src}
                  src={src}
                  width={50}
                />
              }
              iconStyle={{ background: "#6ac0ee", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">{title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Watch Time: {dateDiff(startedAt, completedAt) + 1} days
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};
