import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import type { Variants, HTMLMotionProps } from "framer-motion";
import { useCallback } from "react";
import type { MouseEvent, ReactNode } from "react";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const cardHover = {
  whileHover: { y: -6, transition: { duration: 0.25, ease: "easeOut" as const } },
  whileTap: { y: -2, transition: { duration: 0.15 } },
};

export function useMotionPrefs() {
  return useReducedMotion();
}

const TILT_RANGE = 8;

export function useTilt() {
  const reduceMotion = useMotionPrefs();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [TILT_RANGE, -TILT_RANGE]);
  const rotateY = useTransform(x, [0, 1], [-TILT_RANGE, TILT_RANGE]);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width);
      y.set((e.clientY - rect.top) / rect.height);
    },
    [reduceMotion, x, y],
  );

  const onMouseLeave = useCallback(() => {
    x.set(0.5);
    y.set(0.5);
  }, [x, y]);

  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

type MotionGroupProps = HTMLMotionProps<"div"> & { variants: Variants };

function MotionGroup({ variants, viewport, className, children, ...rest }: MotionGroupProps) {
  const reduceMotion = useMotionPrefs();

  if (reduceMotion) {
    return <div className={className}>{children as ReactNode}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px", ...viewport }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type RevealableProps = Omit<HTMLMotionProps<"div">, "variants"> & { variants?: Variants };

export function Reveal({ variants, ...props }: RevealableProps) {
  return <MotionGroup variants={variants ?? fadeInUp} {...props} />;
}

export function StaggerGroup({ variants, ...props }: RevealableProps) {
  return <MotionGroup variants={variants ?? staggerContainer} {...props} />;
}
