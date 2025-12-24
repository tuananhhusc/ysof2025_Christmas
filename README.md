# 🎄 Trang Web Giáng Sinh - Cây Thông Noel

Trang web Giáng Sinh đẹp mắt với cây thông Noel chứa tên người dùng, hệ thống mật khẩu và thiệp chúc mừng cá nhân.

## ✨ Tính Năng

- 🎄 **Cây thông Noel đẹp mắt** với hiệu ứng animation
- 👥 **Tên người trên cây** - mỗi tên là một đồ trang trí có thể click
- 🔒 **Hệ thống mật khẩu** - mỗi người có mật khẩu riêng để xem thiệp
- 💌 **Lá thư Giáng Sinh** - hiển thị hình ảnh và lời chúc cá nhân
- ❄️ **Hiệu ứng tuyết rơi** tạo không khí Giáng Sinh
- 🎵 **Nhạc nền** tự động phát khi truy cập
- 📱 **Responsive** - hoạt động tốt trên mọi thiết bị

## 🚀 Cách Sử Dụng

1. Mở file `index.html` trong trình duyệt
2. Nhấn vào tên bất kỳ trên cây thông
3. Nhập mật khẩu tương ứng
4. Xem thiệp chúc mừng Giáng Sinh!

## 🔑 Mật Khẩu Mặc Định

- **An**: `1234`
- **Bình**: `5678`
- **Chi**: `abcd`
- **Dũng**: `efgh`
- **Em**: `ijkl`

## 📝 Tùy Chỉnh

### Thêm Người Dùng Mới

Mở file `script.js` và thêm vào mảng `usersData`:

```javascript
{
    name: "Tên Người",
    password: "mật khẩu",
    image: "URL hình ảnh",
    greeting: "Lời chúc Giáng Sinh"
}
```

### Thay Đổi Vị Trí Tên Trên Cây

Chỉnh sửa mảng `ornamentPositions` trong `script.js` để thay đổi vị trí các tên.

### Thay Đổi Nhạc Nền

Thay đổi URL trong thẻ `<audio>` trong `index.html`:

```html
<source src="URL_NHAC_CUA_BAN.mp3" type="audio/mpeg">
```

## 📁 Cấu Trúc File

```
noel2025/
├── index.html      # File HTML chính
├── styles.css      # File CSS styling
├── script.js       # File JavaScript logic
├── SO_DO.md        # Sơ đồ hệ thống
└── README.md       # File hướng dẫn
```

## 🎨 Tùy Chỉnh Giao Diện

Tất cả styling được định nghĩa trong `styles.css`. Bạn có thể:
- Thay đổi màu sắc cây thông
- Điều chỉnh kích thước và vị trí
- Thêm hiệu ứng animation mới
- Tùy chỉnh thiết kế lá thư

## 🌟 Tính Năng Nâng Cao

- Có thể tích hợp với database để lưu trữ người dùng
- Có thể thêm tính năng upload hình ảnh
- Có thể thêm nhiều loại thiệp khác nhau
- Có thể thêm tính năng gửi email thiệp

## 📄 License

Dự án này được tạo cho mục đích giáo dục và giải trí.

---

🎄 **Chúc bạn Giáng Sinh vui vẻ!** 🎄


