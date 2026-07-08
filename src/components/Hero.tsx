import heroPhoto from "../assets/hero-photo.png";
import iconChat from "../assets/icon-chat.png";
import iconDoc from "../assets/icon-doc.png";
import { ArrowCircle, CheckBadge } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[rgba(241,133,8,0.1)]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-brand-maroon sm:text-5xl">
            Chỉ 1 lộ trình
            <br />
            Tiếng Đức thăng hoa
          </h1>
          <p className="font-heading text-4xl font-extrabold leading-tight text-brand-orange sm:text-5xl">
            ĐẠT B1 ZERTIFIKAT
          </p>

          <p className="mt-6 text-xl text-slate-500">
            Học tiếng Đức cùng LTP · Học là đỗ
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
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
          </div>

          <a
            href="#dang-ky"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-brand-orange to-brand-orange-dark px-10 py-4 font-heading text-lg font-bold text-white shadow-lg shadow-orange-200 transition hover:brightness-105"
          >
            Đăng kí ngay
            <ArrowCircle className="h-6 w-6" />
          </a>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-full bg-gradient-to-br from-orange-400 to-brand-orange-dark shadow-xl">
          <img
            src={heroPhoto}
            alt="Học viên tốt nghiệp B1 tiếng Đức cùng LTP Education"
            className="absolute bottom-0 left-1/2 h-[95%] w-auto -translate-x-1/2 object-contain object-bottom"
          />
          <img
            src={iconChat}
            alt=""
            className="absolute -top-4 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border-4 border-white shadow-md sm:left-auto sm:right-1/4 sm:translate-x-0"
          />
          <img
            src={iconDoc}
            alt=""
            className="absolute left-0 top-1/4 h-16 w-16 rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
