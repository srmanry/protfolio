"use client";

import { motion } from "framer-motion";
import { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"section">, "children" | "className">;

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
