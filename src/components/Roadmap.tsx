import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { CheckBadge } from "./icons";
import { Reveal, StaggerGroup, fadeInUp } from "../lib/motion";
import Blob from "./decor/Blob";

const badgePop: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { delay: 0.2, type: "spring", stiffness: 300, damping: 15 } },
};

type Step = {
  number: number;
  range: string;
  bullets: string[];
};

const STEPS: Step[] = [
  {
    number: 1,
    range: "TỪ 0 - A1",
    bullets: [
      "Xây dựng nền tảng:",
      "Từ vựng: khoảng 800–1.000 từ vựng theo hơn 30 chủ đề giao tiếp.",
      "Ngữ pháp: nắm vững các cấu trúc nền tảng: chia động từ, giống danh từ, mạo từ, cách 1–4 và câu giao tiếp cơ bản.",
      "Phát âm: luyện bảng chữ cái, Umlaut (Ä, Ö, Ü), ß, trọng âm và ngữ điệu chuẩn. Luyện nghe ở mức cơ bản 20' mỗi ngày để bạn quen hơn với nghe tiếng Đức.",
    ],
  },
  {
    number: 2,
    range: "TỪ A1 - A2",
    bullets: [
      "Nâng vốn từ lên 1500+ cho 46 chủ đề khác nhau, 11 chủ điểm ngữ pháp và 4 phạm trù phát âm.",
      "Thành thạo câu phụ, động từ tách, Perfekt, Modalverben và các cấu trúc thường gặp.",
      "Nghe & Đọc: hiểu các đoạn hội thoại và văn bản ngắn trong môi trường thực tế.",
      "Nói & Viết: viết email đơn giản, kể lại trải nghiệm và giao tiếp tự nhiên hơn.",
    ],
  },
  {
    number: 3,
    range: "TỪ A2 - B1",
    bullets: [
      "Luyện đề Goethe/TELC, làm quen với cấu trúc đề thi và chiến thuật từng kỹ năng.",
      "Luyện viết Email, Beschwerde, Meinung và các dạng bài thường gặp.",
      "Thực hành theo nhóm chủ đề, rèn phản xạ và trình bày ý tưởng mạch lạc.",
      "Mô phỏng kỳ thi thật, giáo viên chấm chữa và nhận xét chi tiết.",
    ],
  },
  {
    number: 4,
    range: "TỪ B1 - B2",
    bullets: [
      "Đọc hiểu: văn bản chuyên ngành, hợp đồng, email và tài liệu công việc.",
      "Giao tiếp: trình bày quan điểm, thảo luận và xử lý tình huống trong môi trường làm việc.",
      "Viết email chuyên nghiệp, báo cáo và thư xin việc.",
      "Học cách ứng dụng từ vựng. Chuẩn bị cho học nghề, Visa 18b và môi trường doanh nghiệp Đức.",
    ],
  },
];

export default function Roadmap() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : -60, shouldReduceMotion ? 0 : 60]);

  return (
    <section
      ref={sectionRef}
      id="chinh-phuc"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-indigo-950 via-indigo-900 to-purple-900 py-20 lg:py-24"
    >
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute left-1/2 top-20 h-96 w-[900px] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-3xl"
      />
      <Blob className="right-0 top-0 h-80 w-80 text-brand-orange/15 blur-3xl" />
      <Blob className="left-0 bottom-0 h-72 w-72 text-brand-cyan/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          HỌC FULL KIẾN THỨC &amp; KỸ NĂNG CHỈ VỚI 1 LỘ TRÌNH
        </h2>
        <div className="mt-6 inline-block rounded-full border-2 border-brand-blue bg-white px-8 py-3">
          <span className="font-heading text-lg font-extrabold text-brand-blue sm:text-xl">
            TỪ 0 - B2 TIẾNG ĐỨC
          </span>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-[-2px] hidden h-1 overflow-hidden rounded-full lg:block"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full w-full rounded-full bg-gradient-to-r from-brand-orange to-brand-cyan"
            />
            {!shouldReduceMotion && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "500%" }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  delay: 1.3,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/5 bg-white/70 blur-[2px]"
              />
            )}
          </div>

          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <motion.div key={step.number} variants={fadeInUp} className="relative">
                <motion.div
                  variants={badgePop}
                  className="absolute -top-9 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl border-4 border-white bg-brand-orange font-heading text-2xl font-extrabold text-white shadow-[0_0_0_6px_rgba(241,133,8,0.25),0_10px_20px_-5px_rgba(241,133,8,0.6)]"
                >
                  {step.number}
                </motion.div>
                <div className="relative flex h-full flex-col gap-3 rounded-3xl bg-gradient-to-b from-brand-orange to-brand-orange-dark p-5 pt-10 text-left shadow-lg">
                  <h3 className="text-center font-heading text-lg font-extrabold text-white">
                    {step.range}
                  </h3>
                  <div className="flex-1 space-y-2 rounded-2xl bg-white p-4">
                    {step.bullets.map((bullet) => (
                      <p key={bullet} className="text-xs leading-relaxed text-slate-600">
                        {bullet}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        <Reveal className="mx-auto mt-16 flex max-w-3xl items-start gap-3 rounded-2xl bg-white p-6 text-left shadow-lg">
          <CheckBadge className="mt-0.5 h-6 w-6" />
          <p className="font-heading text-sm font-bold text-brand-navy sm:text-base">
            LUYỆN THI THỰC CHIẾN – CHINH PHỤC CHỨNG CHỈ B1 được giáo viên nhận xét chi tiết sau
            từng bài. Hören &amp; Lesen luyện theo cấu trúc đề thi Goethe/TELC mới nhất.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
