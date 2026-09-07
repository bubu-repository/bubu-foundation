"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function FloatingCard({
  children,
  className,
  delay = 0,
  floatDuration = 5.5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  floatDuration?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn("glass rounded-card shadow-sm", className)}
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay }}
    >
      <div
        className={reduce ? undefined : "float"}
        style={reduce ? undefined : ({ "--float-duration": `${floatDuration}s` } as React.CSSProperties)}
      >
        {children}
      </div>
    </motion.div>
  );
}
