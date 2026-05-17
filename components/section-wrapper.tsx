"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"section">, "children" | "className">;

export function SectionWrapper({ children, className = "", ...rest }: Props) {
  return (
    <motion.section
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
