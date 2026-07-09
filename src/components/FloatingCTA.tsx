import diem from "../assets/diem.png";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-60 sm:bottom-auto sm:right-8 sm:top-1/2 sm:-translate-y-1/2">
      <a
        href="#dang-ky"
        aria-label="Đăng ký ngay - đến phần đăng ký khóa học"
        className="flex items-center gap-2 rounded-full bg-gradient-to-b from-brand-orange to-brand-orange-dark px-6 py-4 font-heading text-base font-bold text-white shadow-lg shadow-orange-300/60 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy animate-cta-bounce motion-reduce:animate-none sm:px-7 sm:py-4"
      >
        Đăng ký ngay
        <img
          src={diem}
          alt=""
          className="h-16 w-16 shrink-0 rounded-full object-cover"
        />
      </a>
    </div>
  );
}
