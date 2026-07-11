import teacherPhoto from "../assets/teacher-photo.png";
import { Reveal, cardHover, useTilt } from "../lib/motion";

export default function Teacher() {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt();

  return (
    <section id="thay-co" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
          ĐỘI NGŨ GIÁO VIÊN HẠNG A
        </h2>

        <Reveal
          {...cardHover}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{ rotateX, rotateY, transformPerspective: 800 }}
          className="mt-10 flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-sky-500 to-brand-blue p-8 shadow-card sm:flex-row sm:text-left"
        >
          <img
            src={teacherPhoto}
            alt="Thầy Quang Đức"
            className="h-32 w-32 shrink-0 rounded-full border-4 border-white object-cover shadow-lg"
          />
          <div>
            <p className="font-heading text-2xl font-extrabold text-white">Thầy Quang Đức</p>
            <p className="font-heading text-lg font-bold text-yellow-300">8.0 IELTS Overall</p>
            <ul className="mt-2 space-y-1 text-sm text-sky-50">
              <li>• Thạc sĩ TESOL (Thạc sĩ Giảng dạy tiếng Anh)</li>
              <li>• 4 năm kinh nghiệm giảng dạy tiếng Anh</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
