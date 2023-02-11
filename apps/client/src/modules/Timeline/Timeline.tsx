import React, { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Image from "next/image";

import clsx from "clsx";

import { useAppContext } from "$core/contexts";

import { NotFound } from "..";

import { processData } from "./processData";

export const Timeline: FC = () => {
  const appContext = useAppContext();
  const { data } = appContext;

  const entries = processData(data);

  const dateDiff = (first: Date, second: Date) => {
    return Math.round(
      (second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)
    );
  };

  return entries ? (
    <div>
      <VerticalTimeline layout="1-column-left">
        {entries.map((entry) => {
          if (entry) {
            const {
              bgColor,
              completedAt,
              id,
              score,
              src,
              srcChar,
              startedAt,
              textColor,
              title,
            } = entry;
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
                      alt={title || ""}
                      className=""
                      height={40}
                      loader={() => srcChar || ""}
                      src={srcChar || ""}
                      width={40}
                    />
                  </div>
                }
                iconStyle={{ background: "#fff", color: "#fff" }}
              >
                <div className="flex flex-col space-x-4 md:flex-row">
                  <Image
                    alt={title || ""}
                    className="hidden rounded-xl lg:block"
                    height={120}
                    loader={() => src || ""}
                    src={src || ""}
                    width={120}
                  />
                  <Image
                    alt={title || ""}
                    className="flex-none rounded-xl lg:hidden"
                    height={120}
                    loader={() => src || ""}
                    src={src || ""}
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
          }
        })}
      </VerticalTimeline>
    </div>
  ) : (
    <NotFound />
  );
};
