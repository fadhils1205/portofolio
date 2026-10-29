"use client";

import { MotionConfig } from "motion/react";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.1,
          smoothWheel: true,
          anchors: {
            offset: -80,
          },
          respectReducedMotion: true,
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
