import { motion } from "framer-motion";
import illusGradcap from "../assets/illus-gradcap.png";
import illusPhone from "../assets/illus-phone.png";
import illusTeacherGuy from "../assets/illus-teacher-guy.png";
import { CheckBadge } from "./icons";
import { StaggerGroup, fadeInUp } from "../lib/motion";
import Blob from "./decor/Blob";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 lg:py-24">
      <Blob className="-left-24 top-1/3 h-72 w-72 text-brand-blue/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
          ĐỒNG HÀNH TỪNG BÀI HỌC
        </h2>
        <p className="mt-2 font-heading text-xl font-bold text-brand-blue sm:text-2xl">
          Quy trình thăng hạng chuẩn B1 tại LTP
        </p>

        <StaggerGroup className="mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.1fr_1fr]">
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
            <div className="flex aspect-square w-56 flex-col items-center justify-center gap-4 rounded-full bg-sky-100 p-6 text-center">
              <img src={illusGradcap} alt="" className="h-20 w-auto" />
              <p className="font-heading text-sm font-bold text-brand-navy">
                Chấm là chuẩn
                <br />
                Chữa là nâng trình
              </p>
            </div>
            <p className="font-heading text-2xl font-extrabold text-brand-orange">
              LỚP 1{" "}
              <span className="text-lg font-bold text-brand-navy">
                Kiểm tra định kỳ theo bài học
              </span>
            </p>
            <div className="rounded-2xl border-2 border-yellow-400 bg-white p-5 text-left shadow-sm">
              <div className="flex items-start gap-3">
                <CheckBadge className="mt-0.5 h-5 w-5" />
                <p className="text-sm text-slate-600">
                  Bài kiểm tra sau mỗi chuyên đề giúp củng cố kiến thức. Giáo viên nhận xét, chỉ
                  ra điểm mạnh và những nội dung cần cải thiện. Điều chỉnh lộ trình học để đảm bảo
                  mục tiêu chinh phục chứng chỉ B1.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <img src={illusPhone} alt="Chấm chữa bài trực tuyến" className="w-full max-w-sm" />
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
            <img src={illusTeacherGuy} alt="" className="h-40 w-auto" />
            <p className="font-heading text-2xl font-extrabold text-brand-orange">
              LỚP 2{" "}
              <span className="text-lg font-bold text-brand-navy">Bứt tốc về đích</span>
            </p>
            <div className="rounded-2xl border-2 border-yellow-400 bg-white p-5 text-left shadow-sm">
              <div className="flex items-start gap-3">
                <CheckBadge className="mt-0.5 h-5 w-5" />
                <p className="text-sm text-slate-600">
                  Luyện đề theo cấu trúc chuẩn Goethe/TELC mới nhất. Rèn chiến thuật làm bài và
                  quản lý thời gian hiệu quả. Thi thử định kỳ để làm quen với áp lực phòng thi.
                  Chấm chữa chi tiết Speaking &amp; Writing theo tiêu chí chấm chính thức.
                </p>
              </div>
            </div>
          </motion.div>
        </StaggerGroup>
      </div>
    </section>
  );
}
