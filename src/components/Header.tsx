import logo from "../assets/logo.png";

const NAV_ITEMS = [
  { label: "Lộ trình học", href: "#lo-trinh", active: true },
  { label: "Tự tin chinh phục B1", href: "#chinh-phuc" },
  { label: "Thầy cô", href: "#thay-co" },
  { label: "Feedback của học viên", href: "#feedback" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="LTP Education" className="h-14 w-14 rounded-full object-cover" />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-heading text-sm font-bold uppercase tracking-wide transition ${
                item.active
                  ? "relative text-brand-orange after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-brand-orange"
                  : "text-brand-navy hover:text-brand-orange"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#dang-ky"
          className="shrink-0 rounded-full bg-yellow-400 px-6 py-3 font-heading text-sm font-bold text-brand-navy shadow-md transition hover:bg-yellow-300"
        >
          Liên hệ tư vấn
        </a>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </header>
  );
}
