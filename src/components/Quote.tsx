import { Reveal } from "../lib/motion";

export default function Quote() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue to-brand-blue-dark py-12 lg:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/20 blur-3xl"
      />
      <svg
        aria-hidden
        viewBox="0 0 60 60"
        className="pointer-events-none absolute left-1/2 top-2 h-16 w-16 -translate-x-1/2 text-white/10 sm:h-24 sm:w-24"
      >
        <path
          fill="currentColor"
          d="M12 30c0-9 6-16 15-18l2 5c-6 2-9 6-9 11h9v13H12V30zm26 0c0-9 6-16 15-18l2 5c-6 2-9 6-9 11h9v13H38V30z"
        />
      </svg>
      <Reveal>
        <p className="relative mx-auto max-w-4xl px-6 text-center font-heading text-xl font-extrabold italic text-white sm:text-3xl">
          &ldquo;Không chỉ học để biết tiếng Đức, mà học để sử dụng tiếng Đức.&rdquo;
        </p>
      </Reveal>
    </section>
  );
}
