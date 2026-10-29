"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type SharedProjectCoverProps = {
  slug: string;
  className?: string;
  children: ReactNode;
};

export function SharedProjectCover({
  slug,
  className,
  children,
}: SharedProjectCoverProps) {
  return (
    <motion.div
      layoutId={`project-cover-${slug}`}
      transition={{ duration: 0.45, ease: SMOOTH_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
