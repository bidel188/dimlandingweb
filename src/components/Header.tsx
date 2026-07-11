import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import logo from "../assets/logo.png";

const NAV_ITEMS = [
  { label: "Lộ trình học", id: "top" },
  { label: "Tự tin chinh phục B1", id: "chinh-phuc" },
  { label: "Thầy cô", id: "thay-co" },
  { label: "Feedback của học viên", id: "feedback" },
];

export default function Header() {
  const [activeId, setActiveId] = useState(NAV_ITEMS[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
      setIsScrolled(window.scrollY > 0);
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
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        isScrolled ? "shadow-card" : "shadow-none"
      }`}
    >
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
                className={`relative font-heading text-sm font-bold uppercase tracking-wide transition ${
                  isActive ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-brand-orange"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 30 }
                    }
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#dang-ky"
            className="rounded-full bg-yellow-400 px-6 py-3 font-heading text-sm font-bold text-brand-navy shadow-md transition hover:bg-yellow-300"
          >
            Liên hệ tư vấn
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-brand-navy transition hover:bg-slate-100 lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              {isMenuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col gap-1 overflow-hidden border-t border-slate-100 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-1 py-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => {
                      setActiveId(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`rounded-lg px-3 py-2 font-heading text-sm font-bold uppercase tracking-wide transition ${
                      isActive
                        ? "bg-brand-orange-light text-brand-orange"
                        : "text-brand-navy hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </header>
  );
}
