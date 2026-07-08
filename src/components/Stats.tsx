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
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="flex flex-col items-center gap-4">
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
          <span className="font-heading text-xl font-extrabold text-brand-orange">
            {percent.toString().replace(".", ",")}%
          </span>
        </div>
      </div>
      <p className="max-w-[12rem] text-center text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="inline-block rounded-full border-2 border-brand-blue bg-white px-8 py-3 shadow-sm">
          <h2 className="font-heading text-2xl font-extrabold text-brand-blue sm:text-3xl">
            Học là đỗ - Thi là đậu
          </h2>
        </div>
        <p className="mt-6 text-lg font-medium text-brand-navy">
          Hàng trăm học viên LTP đang tiến bộ từng ngày
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {RINGS.map((ring) => (
            <DonutStat key={ring.label} {...ring} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PILLS.map((pill) => (
            <div
              key={pill.label}
              className="rounded-2xl bg-gradient-to-b from-sky-400 to-brand-blue p-6 text-center shadow-md"
            >
              <div className="mx-auto -mt-10 mb-3 w-fit rounded-full bg-white px-6 py-2 shadow">
                <span className="font-heading text-2xl font-extrabold text-brand-blue">
                  {pill.value}
                </span>
              </div>
              <p className="text-sm font-medium text-white">{pill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
