import teacherPhoto from "../assets/teacher-photo.png";

export default function Teacher() {
  return (
    <section id="thay-co" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
          ĐỘI NGŨ GIÁO VIÊN HẠNG A
        </h2>

        <div className="mt-10 flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-sky-500 to-brand-blue p-8 shadow-xl sm:flex-row sm:text-left">
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
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <span
              key={dot}
              className={`h-2 w-2 rounded-full ${dot === 1 ? "bg-brand-blue" : "bg-slate-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
