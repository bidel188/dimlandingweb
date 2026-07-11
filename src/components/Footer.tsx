import logo from "../assets/logo.png";
import qrCode from "../assets/qr-code.png";
import { Reveal } from "../lib/motion";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12">
      <Reveal className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-[auto_auto_1fr]">
        <img src={logo} alt="LTP Education" className="h-28 w-28 rounded-full object-cover" />

        <div className="flex items-center gap-4">
          <img src={qrCode} alt="Quét QR để liên hệ trực tiếp qua Zalo" className="h-28 w-28" />
          <div className="space-y-2 text-sm font-bold text-brand-navy">
            <p>👆 Quét QR để liên hệ trực tiếp</p>
            <p>📞 Hotline: 0911 543 726</p>
          </div>
        </div>

        <div className="text-sm text-slate-600">
          <p className="font-heading text-lg font-extrabold text-brand-navy">
            Công ty cổ phần tư vấn LTP Việt Nam
          </p>
          <p className="mt-2">
            <strong className="text-brand-navy">Địa chỉ trụ sở chính:</strong> NO.02 - LK29, Khu
            Công Đồng, Dương Nội, Thành phố Hà Nội, Việt Nam
          </p>
          <p>
            <strong className="text-brand-navy">Cơ sở Thành phố Hồ Chí Minh:</strong> Trường Cao
            Đẳng Bách Khoa Sài Gòn 34 - 34A Nguyễn Bỉnh Khiêm, Phường Hạnh Thông
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
