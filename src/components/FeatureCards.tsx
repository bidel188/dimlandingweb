import { CheckBadge } from "./icons";

type Card = {
  badge: string;
  title: string;
  bullets: string[];
};

const CARDS: Card[] = [
  {
    badge: "x200%",
    title: "XÂY CHẮC NỀN TẢNG A1 → B1",
    bullets: [
      "Giáo trình được thiết kế theo lộ trình từ cơ bản đến nâng cao, giúp học viên hiểu bản chất thay vì học thuộc.",
      "Học theo ngữ cảnh thực tế, tăng khả năng ghi nhớ và phản xạ.",
      "Hệ thống bài test định kỳ đảm bảo tuyệt đối chất lượng đầu ra.",
    ],
  },
  {
    badge: "TOP",
    title: "PHƯƠNG PHÁP ĐÀO TẠO THỰC CHIẾN",
    bullets: [
      "Luyện phản xạ giao tiếp từ buổi học đầu tiên. Chỉnh phát âm, ngữ điệu và phản xạ giao tiếp ngay trên lớp.",
      "Giáo viên theo sát năng lực từng học viên. Định hướng lộ trình cá nhân để đạt mục tiêu B1.",
    ],
  },
  {
    badge: "x300%",
    title: "ĐỖ B1 NGAY LẦN THI ĐẦU",
    bullets: [
      "Bộ đề cập nhật sát đề thi thật.",
      "Schreiben và Sprechen: được thầy cô chấm chữa để tiến bộ sau từng bài.",
      "Hören và Lesen: có phần giải thích chi tiết. Hướng dẫn chiến thuật làm bài giúp tối ưu điểm số.",
    ],
  },
];

export default function FeatureCards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-sky-50 to-indigo-100 py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold text-brand-blue sm:text-4xl">
            TRỌN GÓI
          </h2>
          <p className="mt-1 font-heading text-2xl font-extrabold text-brand-orange sm:text-3xl">
            CHINH PHỤC TIẾNG ĐỨC TỪ CON SỐ 0
          </p>
          <div className="mt-6 inline-block rounded-full border-2 border-brand-orange bg-white px-6 py-3 font-heading text-lg font-bold text-brand-orange shadow-sm">
            LỘ TRÌNH CẤP TỐC CHỈ TỪ 8 THÁNG
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.badge}
              className="rounded-3xl bg-gradient-to-b from-brand-orange to-brand-orange-dark p-5 shadow-lg"
            >
              <div className="flex items-baseline gap-3 px-2 pb-4 text-white">
                <span className="font-heading text-4xl font-extrabold">{card.badge}</span>
                <span className="font-heading text-sm font-bold uppercase leading-tight">
                  {card.title}
                </span>
              </div>
              <div className="space-y-4 rounded-2xl bg-white p-5">
                {card.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <CheckBadge className="mt-0.5 h-5 w-5" />
                    <p className="text-sm leading-relaxed text-slate-600">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-b from-brand-blue to-brand-blue-dark px-8 py-10 text-center shadow-2xl shadow-blue-300/50">
          <p className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            HÀNG TRĂM HỌC VIÊN
          </p>
          <p className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            ĐÃ THÀNH CÔNG CHINH PHỤC
          </p>
          <p className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            CHỨNG CHỈ B1
          </p>
          <p className="font-heading text-2xl font-extrabold text-brand-cyan sm:text-3xl">
            VỚI MỘT LỘ TRÌNH
          </p>
        </div>
      </div>
    </section>
  );
}
