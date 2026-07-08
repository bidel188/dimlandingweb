import illusDesk from "../assets/illus-desk.png";
import { ArrowCircle, CheckBadge } from "./icons";

export default function StudyMethod() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-heading text-3xl font-extrabold sm:text-4xl">
          <span className="text-brand-orange">HỌC CHĂM</span>{" "}
          <span className="text-brand-navy">- LUYỆN CHẤT</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50 p-8 lg:grid-cols-2 lg:p-12">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <CheckBadge className="h-7 w-7" />
              <h3 className="font-heading text-xl font-extrabold text-brand-navy">
                HÌNH THỨC HỌC
              </h3>
              <span className="text-sm text-slate-500">Trực tiếp hoặc trực tuyến</span>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <CheckBadge className="h-7 w-7" />
                <h3 className="font-heading text-xl font-extrabold text-brand-navy">
                  CHƯƠNG TRÌNH HỌC CÔ ĐỌNG
                </h3>
              </div>
              <ul className="mt-2 ml-10 space-y-1 text-sm text-slate-600">
                <li>Xây dựng lộ trình bài bản, chuyên nghiệp</li>
                <li>Bài giảng tinh gọn đúng trọng tâm, bám sát mục tiêu B1</li>
                <li>Đầy đủ bài mẫu, bài tập, test như thi thật</li>
                <li>Được thầy cô chấm chữa, định hướng học tập theo tiêu chí chấm thi</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <CheckBadge className="h-7 w-7" />
                <h3 className="font-heading text-xl font-extrabold text-brand-navy">
                  LUYỆN THI THỰC CHIẾN
                </h3>
              </div>
              <ul className="mt-2 ml-10 space-y-1 text-sm text-slate-600">
                <li>Mô phỏng môi trường thi thật giúp học viên tự tin bước vào kỳ thi B1.</li>
                <li>Luyện đủ 4 kỹ năng theo chuẩn Goethe/TELC.</li>
                <li>Thi thử định kỳ như kỳ thi chính thức.</li>
                <li>Giáo viên nhận xét và góp ý chi tiết sau mỗi bài.</li>
                <li>Rèn chiến thuật làm bài và quản lý thời gian.</li>
                <li>Nhận xét, chỉ ra lỗi sai và gợi ý nâng cấp từ vựng.</li>
              </ul>
            </div>

            <a
              href="#dang-ky"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-brand-orange to-brand-orange-dark px-8 py-3 font-heading text-base font-bold text-white shadow-md transition hover:brightness-105"
            >
              Bấm học thử bài giảng ngay
              <ArrowCircle className="h-6 w-6" />
            </a>
          </div>

          <div className="flex items-center justify-center">
            <img src={illusDesk} alt="Bàn học và bảng đen" className="max-h-96 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
