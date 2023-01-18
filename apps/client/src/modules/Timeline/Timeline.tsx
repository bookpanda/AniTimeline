import React, { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Image from "next/image";

import clsx from "clsx";

type TimelineProps = {
  entries: {
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
    score: number;
    media: {
      characters: {
        nodes: { image: { medium: string } }[];
      };
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
  }[];
};

export const Timeline: FC<TimelineProps> = ({ entries }) => {
  const dateDiff = (first: Date, second: Date) => {
    return Math.round(
      (second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)
    );
  };

  return (
    <div>
      <VerticalTimeline layout="1-column-left">
        {entries.map((entry, index) => {
          const bgColor = index % 2 === 0 ? "#6ac0ee" : "#f4d64f";
          const textColor = index % 2 === 0 ? "#ffffff" : "#000000";
          const id = entry.media.id;
          const title =
            entry.media.title.english ?? entry.media.title.userPreferred;
          const src = entry.media.coverImage.large;
          const numChar = entry.media.characters.nodes.length;
          const srcChar =
            entry.media.characters.nodes[Math.floor(Math.random() * numChar)]
              .image.medium;
          const score = entry.score;
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
                borderRight: clsx("7px solid", bgColor),
              }}
              contentStyle={{
                padding: "16px",
                background: bgColor,
                color: textColor,
                borderRadius: "16px",
              }}
              icon={
                <div className="h-10 w-10 overflow-clip rounded-full">
                  <Image
                    alt={title}
                    className=""
                    height={40}
                    loader={() => srcChar}
                    src={srcChar}
                    width={40}
                  />
                </div>
              }
              iconStyle={{ background: "#fff", color: "#fff" }}
            >
              <div className="flex flex-col space-x-4 md:flex-row">
                <Image
                  alt={title}
                  className="hidden rounded-xl lg:block"
                  height={120}
                  loader={() => src}
                  src={src}
                  width={120}
                />
                <Image
                  alt={title}
                  className="flex-none rounded-xl lg:hidden"
                  height={120}
                  loader={() => src}
                  src={src}
                  width={120}
                />
                <div className="mt-4 md:mt-0">
                  <h3 className="vertical-timeline-element-title text-xl font-bold">
                    {title}
                  </h3>
                  <h3 className="mb-4 text-xl">Score: {score}</h3>
                  <h4>Started Watching: {startedAt.toDateString()}</h4>
                  <h4>Completed Watching: {completedAt.toDateString()}</h4>
                  <h4>Total Days: {dateDiff(startedAt, completedAt) + 1}</h4>
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
