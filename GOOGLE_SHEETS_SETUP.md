# Lưu dữ liệu đăng ký vào Google Sheets

Form đăng ký gửi dữ liệu (họ tên, năm sinh, email, SĐT, thời gian dự kiến thi, lộ trình quan tâm) tới một Google Apps Script Web App, script này sẽ ghi vào một Google Sheet.

## 1. Tạo Google Sheet

1. Tạo một Google Sheet mới, đặt tên ví dụ `Landing Page Leads`.
2. Ở dòng đầu tiên, thêm tiêu đề cột: `Timestamp | Name | Birth Year | Email | Phone | Exam Time | Program`.

## 2. Tạo Apps Script

1. Trong Sheet, vào **Extensions → Apps Script**.
2. Xoá code mặc định, dán đoạn sau:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.birthYear || "",
    data.email || "",
    data.phone || "",
    data.examTime || "",
    data.program || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. Lưu project (đặt tên tuỳ ý, ví dụ `LeadWebhook`).

## 3. Deploy thành Web App

1. Bấm **Deploy → New deployment**.
2. Chọn loại **Web app**.
3. Cấu hình:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Bấm **Deploy**, cấp quyền khi được yêu cầu.
5. Copy **Web app URL** (dạng `https://script.google.com/macros/s/XXXXX/exec`).

## 4. Cấu hình vào project

Tạo file `.env.local` ở thư mục gốc (copy từ `.env.example`) và dán URL vào:

```
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXX/exec
```

Khởi động lại `npm run dev` sau khi thêm biến môi trường.

## Lưu ý

- Request được gửi ở chế độ `no-cors` do giới hạn CORS của Apps Script, nên frontend không đọc được response chi tiết — form chỉ hiển thị "thành công" nếu request không bị lỗi mạng. Nếu cần xác nhận chắc chắn dữ liệu đã ghi, hãy kiểm tra trực tiếp trong Google Sheet.
- Nếu sau này cần bảo mật hơn (chặn spam, validate server-side kỹ hơn), có thể thêm một secret token trong payload và kiểm tra trong Apps Script.
