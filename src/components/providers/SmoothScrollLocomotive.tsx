"use client";

import LocomotiveScroll from "locomotive-scroll";
import * as React from "react";

export const SmoothScrollContext = React.createContext({
  scroll: null as LocomotiveScroll | null,
});

interface SmoothScrollLocomotiveProps {
  children: React.ReactNode;
  options?: any;
}

export const SmoothScrollLocomotive = ({
  children,
  options,
}: SmoothScrollLocomotiveProps) => {
  const [scroll, setScroll] = React.useState<LocomotiveScroll | null>(null);

  React.useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll" as any))
            .default;

          setScroll(
            new LocomotiveScroll({
              el: document.querySelector("[data-scroll-container]"),
              ...options,
            })
          );
        } catch (error) {
          throw Error(`[SmoothScrollLocomotive]: ${error}`);
        }
      })();
    }

    return () => {
      scroll?.destroy();
    };
  }, [options, scroll]);

  return (
    <SmoothScrollContext.Provider
      value={{
        scroll,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
};
