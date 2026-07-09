import { useState, type FormEvent } from "react";
import { ArrowCircle } from "./icons";

// Dán URL Web App sau khi deploy Google Apps Script (xem GOOGLE_SHEETS_SETUP.md)
const GOOGLE_SHEETS_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL ?? "";

type Status = "idle" | "submitting" | "success" | "error";

const BIRTH_YEARS = Array.from({ length: 30 }, (_, i) => 2012 - i);

const EXAM_TIMES = [
  "Trong 3 tháng tới",
  "3 - 6 tháng tới",
  "6 - 12 tháng tới",
  "Chưa xác định",
];

const PROGRAMS = [
  { id: "a1-a2", label: "A1 - A2", original: "40.000.000", price: "30.000.000" },
  { id: "a2-b1", label: "A2 - B1", original: "40.000.000", price: "30.000.000" },
  { id: "a1-b1", label: "A1 - B1", original: "80.000.000", price: "60.000.000" },
];

export default function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [program, setProgram] = useState(PROGRAMS[2].id);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      birthYear: formData.get("birthYear"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      examTime: formData.get("examTime"),
      program: formData.get("program"),
    };

    setStatus("submitting");
    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-lg font-medium text-emerald-700">
          Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border-none bg-sky-50 px-4 py-3 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue";

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Họ và Tên:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Nguyễn Văn A"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="birthYear" className="mb-1 block text-sm font-medium text-slate-700">
            Năm sinh:
          </label>
          <select id="birthYear" name="birthYear" className={inputClass} defaultValue="">
            <option value="" disabled>
              Chọn năm
            </option>
            {BIRTH_YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="ban@email.com"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
            Số điện thoại:
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            pattern="[0-9+ ]{9,15}"
            placeholder="0901234567"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="examTime" className="mb-1 block text-sm font-medium text-slate-700">
            Thời gian dự kiến thi:
          </label>
          <select id="examTime" name="examTime" className={inputClass} defaultValue="">
            <option value="" disabled>
              Chọn thời gian
            </option>
            {EXAM_TIMES.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-slate-700">Bạn quan tâm đến lộ trình:</p>
        <div className="space-y-2">
          {PROGRAMS.map((p) => (
            <label
              key={p.id}
              className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-2"
            >
              <span className="flex items-center gap-3">
                <input
                  type="radio"
                  name="program"
                  value={p.label}
                  checked={program === p.id}
                  onChange={() => setProgram(p.id)}
                  className="h-4 w-4 accent-brand-blue"
                />
                <span className="text-sm font-medium text-brand-navy">{p.label}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-xs text-slate-400 line-through">{p.original}</span>
                <span className="rounded-full bg-gradient-to-b from-brand-orange to-brand-orange-dark px-4 py-1.5 text-sm font-bold text-white">
                  {p.price}
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <p className="font-heading text-lg font-extrabold text-brand-blue">
        CHỈ CÒN 20 SLOTS DUY NHẤT!!!
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-brand-orange to-brand-orange-dark px-8 py-3 font-heading text-base font-bold text-white shadow-md transition hover:brightness-105 disabled:opacity-60 animate-cta-zoom motion-reduce:animate-none"
      >
        {status === "submitting" ? "Đang gửi..." : "Đăng kí nhận tư vấn"}
        <ArrowCircle className="h-6 w-6" />
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          {GOOGLE_SHEETS_WEBHOOK_URL
            ? "Có lỗi xảy ra, vui lòng thử lại."
            : "Chưa cấu hình VITE_GOOGLE_SHEETS_WEBHOOK_URL — xem GOOGLE_SHEETS_SETUP.md."}
        </p>
      )}
    </form>
  );
}
