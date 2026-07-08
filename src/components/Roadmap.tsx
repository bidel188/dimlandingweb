
import { CheckBadge } from "./icons";

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
  return (
    <section id="chinh-phuc" className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-indigo-900 to-purple-900 py-20">
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          HỌC FULL KIẾN THỨC &amp; KỸ NĂNG CHỈ VỚI 1 LỘ TRÌNH
        </h2>
        <div className="mt-6 inline-block rounded-full border-2 border-brand-blue bg-white px-8 py-3">
          <span className="font-heading text-lg font-extrabold text-brand-blue sm:text-xl">
            TỪ 0 - B2 TIẾNG ĐỨC
          </span>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute -top-9 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl border-4 border-white bg-brand-orange font-heading text-2xl font-extrabold text-white shadow-lg">
                {step.number}
              </div>
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
                {step.number === 1 && (
                  <img
                    alt=""
                    className="absolute -bottom-8 left-4 h-16 w-auto drop-shadow-lg"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl items-start gap-3 rounded-2xl bg-white p-6 text-left shadow-lg">
          <CheckBadge className="mt-0.5 h-6 w-6" />
          <p className="font-heading text-sm font-bold text-brand-navy sm:text-base">
            LUYỆN THI THỰC CHIẾN – CHINH PHỤC CHỨNG CHỈ B1 được giáo viên nhận xét chi tiết sau
            từng bài. Hören &amp; Lesen luyện theo cấu trúc đề thi Goethe/TELC mới nhất.
          </p>
        </div>
      </div>
    </section>
  );
}
