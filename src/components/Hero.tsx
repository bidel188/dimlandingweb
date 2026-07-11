import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroPhoto from "../assets/hero-photo.png";
import iconChat from "../assets/icon-chat.png";
import iconDoc from "../assets/icon-doc.png";
import { ArrowCircle, CheckBadge } from "./icons";
import { fadeInUp, staggerContainer, useMotionPrefs } from "../lib/motion";
import Blob from "./decor/Blob";

export default function Hero() {
  const shouldReduceMotion = useMotionPrefs();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 60]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -50]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white to-[rgba(241,133,8,0.1)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-orange/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-brand-cyan/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl"
      />
      <motion.div style={{ y: blobY }}>
        <Blob className="right-8 top-6 h-40 w-40 text-brand-cyan/20 blur-2xl sm:right-16" />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          className="contents lg:block"
        >
          <div>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl font-extrabold leading-tight text-brand-maroon sm:text-5xl"
            >
              Chỉ 1 lộ trình
              <br />
              Tiếng Đức thăng hoa
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gradient-brand font-heading text-4xl font-extrabold leading-tight sm:text-5xl"
            >
              ĐẠT B1 ZERTIFIKAT
            </motion.p>

            <motion.p variants={fadeInUp} className="mt-6 text-xl text-slate-500">
              Học tiếng Đức cùng LTP · Học là đỗ
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-full bg-sky-50 py-3 pl-3 pr-6">
                <CheckBadge className="h-7 w-7" />
                <span className="text-sm text-brand-navy">
                  Lộ trình <strong className="font-bold">cô đọng</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-sky-50 py-3 pl-3 pr-6">
                <CheckBadge className="h-7 w-7" />
                <span className="text-sm text-brand-navy">
                  Chấm bài <strong className="font-bold">chuẩn xác</strong>
                </span>
              </div>
            </motion.div>

            <motion.a
              variants={fadeInUp}
              href="#dang-ky"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-brand-orange to-brand-orange-dark px-10 py-4 font-heading text-lg font-bold text-white shadow-lg shadow-orange-200 transition hover:brightness-105"
            >
              Đăng kí ngay
              <ArrowCircle className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ y: photoY }}
          className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-full bg-gradient-to-br from-orange-400 to-brand-orange-dark shadow-xl"
        >
          <img
            src={heroPhoto}
            alt="Học viên tốt nghiệp B1 tiếng Đức cùng LTP Education"
            className="absolute bottom-0 left-1/2 h-[95%] w-auto -translate-x-1/2 object-contain object-bottom"
          />
          <motion.img
            src={iconChat}
            alt=""
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border-4 border-white shadow-md sm:left-auto sm:right-1/4 sm:translate-x-0"
          />
          <motion.img
            src={iconDoc}
            alt=""
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute left-0 top-1/4 h-16 w-16 rounded-full border-4 border-white shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
