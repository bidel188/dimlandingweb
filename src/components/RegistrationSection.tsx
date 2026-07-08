import studentPhoto from "../assets/student-photo.png";
import t1 from "../assets/testimonial-1.png";
import t2 from "../assets/testimonial-2.png";
import t3 from "../assets/testimonial-3.png";
import t4 from "../assets/testimonial-4.png";
import t5 from "../assets/testimonial-5.png";
import t6 from "../assets/testimonial-6.png";
import RegistrationForm from "./RegistrationForm";

const TESTIMONIALS = [
  {
    photo: t1,
    name: "Nguyễn Thu Huyền",
    text: "Xuất sắc đỗ chứng chỉ B1 tiếng Đức, sau 7 tháng theo học tại LTP Education. Hiện đang học ngành bán hàng tại Stuttgart.",
  },
  {
    photo: t2,
    name: "Nguyễn Hà Vi",
    text: "Xuất sắc đỗ chứng chỉ B1 OSD tiếng Đức, TELC sau 7 tháng đào tạo. Hiện là azubi phục vụ tổ chức sự kiện - nhà hàng tại Beelitz.",
  },
  {
    photo: t3,
    name: "Nguyễn Khánh Ly",
    text: "Xuất sắc đỗ chứng chỉ B1 OSD tiếng Đức, đỗ phỏng vấn đơn bán hàng ngay lần đầu phỏng vấn.",
  },
  {
    photo: t4,
    name: "Cao Huy Phú",
    text: "Xuất sắc đỗ chứng chỉ B1 Goethe tiếng Đức, sau 7 tháng theo học tại LTP Education. Đỗ phỏng vấn lần đầu tiên ngành Fachkraft für Lagerlogistik (Nhân viên hậu cần kho bãi).",
  },
  {
    photo: t5,
    name: "Nguyễn Thị Dịu",
    text: "Xuất sắc đỗ chứng chỉ B1 tiếng Đức, sau 5 tháng theo học tại LTP Education. Hiện đang học ngành bán hàng tại Stuttgart.",
  },
  {
    photo: t6,
    name: "Nguyễn thành công",
    text: "Xuất sắc đỗ chứng chỉ B1 Goethe tiếng Đức, sau 7 tháng theo học tại LTP Education. Hiện đang theo học ngành nhà hàng tại Berlin.",
  },
];

export default function RegistrationSection() {
  return (
    <section id="dang-ky" className="bg-gradient-to-b from-sky-100 to-brand-blue py-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="relative flex flex-col justify-end">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-orange to-brand-orange-dark px-8 pb-4 pt-8">
              <p className="font-heading text-2xl font-extrabold text-white">Tặng Bạn Code:</p>
              <p className="font-heading text-4xl font-extrabold text-yellow-300">LTP2026</p>
              <div className="mt-4 flex w-fit items-center divide-x divide-white/40 rounded-full border-2 border-white/70 text-white">
                <span className="px-4 py-2 text-center text-xs leading-tight">
                  GIẢM NGAY
                  <br />
                  <strong className="text-xl">15%</strong>
                </span>
                <span className="px-4 py-2 text-xs leading-tight">
                  Khi đăng ký
                  <br />
                  từ 2 khoá học
                </span>
              </div>
            </div>
            <img
              src={studentPhoto}
              alt="Học viên LTP Education"
              className="relative -mt-6 max-h-[420px] w-auto self-center object-contain"
            />
          </div>

          <div>
            <RegistrationForm />
          </div>
        </div>

        <div id="feedback" className="mt-16 scroll-mt-24">
          <h3 className="text-center font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Học viên tiêu biểu của <span className="text-brand-blue">LTP</span> 🙂
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 rounded-3xl border-2 border-brand-orange p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <img src={item.photo} alt={item.name} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <p className="font-heading text-sm font-bold text-brand-blue">{item.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
