import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion } from "framer-motion";
import { StaggerGroup, fadeInUp } from "../lib/motion";
import Blob from "./decor/Blob";

type Ring = { percent: number; label: string };
type Pill = { value: string; label: string };

const RINGS: Ring[] = [
  { percent: 89.5, label: "đạt số điểm mong muốn" },
  { percent: 92.5, label: "Nâng trình độ sau 5 bài chấm chữa" },
  { percent: 91.6, label: "Thành thạo tiếng Đức sau lộ trình" },
];

const PILLS: Pill[] = [
  { value: "100+", label: "học viên điểm Gut, Sehr Gut" },
  { value: "50.000+", label: "Tổng số bài thi thử được chấm chữa chi tiết" },
  { value: "100+", label: "Bạn đã vững nền tảng và đang học B2 chuyên sâu" },
];

function DonutStat({ percent, label }: Ring) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayPercent, setDisplayPercent] = useState(shouldReduceMotion ? percent : 0);
  const scale = useMotionValue(1);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const controls = animate(0, percent, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: setDisplayPercent,
      onComplete: () => {
        animate(scale, [1, 1.15, 1], { duration: 0.4, ease: "easeOut" });
      },
    });
    return () => controls.stop();
  }, [isInView, percent, shouldReduceMotion, scale]);

  const offset = circumference * (1 - displayPercent / 100);

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <div className="relative h-36 w-36">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="#fde8cf" strokeWidth="12" />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#f1850c"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.span
            style={{ scale }}
            className="text-gradient-brand font-heading text-2xl font-extrabold"
          >
            {displayPercent.toFixed(1).replace(".", ",")}%
          </motion.span>
        </div>
      </div>
      <p className="max-w-[12rem] text-center text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-20 lg:py-24">
      <Blob className="-right-16 top-10 h-64 w-64 text-brand-cyan/10 blur-3xl" />
      <Blob className="-left-20 bottom-10 h-72 w-72 text-brand-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-block rounded-full border-2 border-brand-blue bg-white px-8 py-3 shadow-sm">
          <h2 className="font-heading text-2xl font-extrabold text-brand-blue sm:text-3xl">
            Học là đỗ - Thi là đậu
          </h2>
        </div>
        <p className="mt-6 text-lg font-medium text-brand-navy">
          Hàng trăm học viên LTP đang tiến bộ từng ngày
        </p>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {RINGS.map((ring) => (
            <motion.div key={ring.label} variants={fadeInUp}>
              <DonutStat {...ring} />
            </motion.div>
          ))}
        </StaggerGroup>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PILLS.map((pill) => (
            <motion.div
              key={pill.label}
              variants={fadeInUp}
              className="rounded-2xl bg-gradient-to-b from-sky-400 to-brand-blue p-6 text-center shadow-md"
            >
              <div className="mx-auto -mt-10 mb-3 w-fit rounded-full bg-white px-6 py-2 shadow">
                <span className="text-gradient-cool font-heading text-3xl font-extrabold">
                  {pill.value}
                </span>
              </div>
              <p className="text-sm font-medium text-white">{pill.label}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
