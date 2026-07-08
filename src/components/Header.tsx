import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const NAV_ITEMS = [
  { label: "Lộ trình học", id: "top" },
  { label: "Tự tin chinh phục B1", id: "chinh-phuc" },
  { label: "Thầy cô", id: "thay-co" },
  { label: "Feedback của học viên", id: "feedback" },
];

export default function Header() {
  const [activeId, setActiveId] = useState(NAV_ITEMS[0].id);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
      // Nav order isn't page order (e.g. "Thầy cô" sits above "Tự tin chinh phục B1"
      // in the DOM), so sort by actual document position for the scrollspy to work.
      .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

    if (sections.length === 0) return;

    const HEADER_OFFSET = 110;

    function updateActive() {
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top - HEADER_OFFSET <= 0) {
          current = section.id;
        }
      }
      setActiveId(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="LTP Education" className="h-14 w-14 rounded-full object-cover" />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveId(item.id)}
                className={`font-heading text-sm font-bold uppercase tracking-wide transition ${
                  isActive
                    ? "relative text-brand-orange after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-brand-orange"
                    : "text-brand-navy hover:text-brand-orange"
                }`}
              >
                {item.label}
              </a>
            );
          })}
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
