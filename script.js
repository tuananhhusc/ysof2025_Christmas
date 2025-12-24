// Danh sách nhạc - Sử dụng file local từ thư mục music/
const playlist = [
    {
        title: "Đêm Thánh Vô Cùng",
        src: "music/ĐÊM THÁNH VÔ CÙNG.mp3"
    },
    {
        title: "Giáng Sinh Mùa Hồng Ân Cứu Độ",
        src: "music/Giang Sinh Mua Hong An Cuu Đo.mp3"
    },
    {
        title: "Tình Khúc Bêlem",
        src: "music/Tình Khúc Bêlem.mp3"
    },
    {
        title: "Cao Cung Lên",
        src: "music/Cao Cung Lên.mp3"
    },
    {
        title: "Để Chúa Đến",
        src: "music/Để Chúa Đến.mp3"
    }
];

// Danh sách người dùng cho lá thư (12 người) - theo thứ tự
const peopleList = [
    { 
        name: "Chị rọt Thu Duyên", 
        password: "leminh", 
        image: "image/Chị rọt Thu Duyên.svg",
        message: "<img src='image/Chị rọt Thu Duyên.svg' alt='Chị rọt Thu Duyên' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Chị Thu Uyên", 
        password: "phanthiet", 
        image: "image/chị Thu Uyên.svg",
        message: "<img src='image/chị Thu Uyên.svg' alt='chị Thu Uyên' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Chị Nga", 
        password: "638", 
        image: "image/Chị Nga.svg",
        message: "<img src='image/Chị Nga.svg' alt='Chị Nga' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Chị Diễm", 
        password: "455", 
        image: "image/Chị Diễm.svg",
        message: "<img src='image/Chị Diễm.svg' alt='Chị Diễm' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Chị Chi", 
        password: "095", 
        image: "image/Chị Chi.svg",
        message: "<img src='image/Chị Chi.svg' alt='Chị Chi' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Chị Anh Thư", 
        password: "151", 
        image: "image/Chị Anh Thư.svg",
        message: "<img src='image/Chị Anh Thư.svg' alt='Chị Anh Thư' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Bạn Thùy Linh", 
        password: "414", 
        image: "image/Bạn Thùy Linh.svg",
        message: "<img src='image/Bạn Thùy Linh.svg' alt='Bạn Thùy Linh' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Em gái Dung", 
        password: "436", 
        image: "image/Em gái Dung.svg",
        message: "<img src='image/Em gái Dung.svg' alt='Em gái Dung' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Anh Thịnh", 
        password: "859", 
        image: "image/Anh Thịnh.svg",
        message: "<img src='image/Anh Thịnh.svg' alt='Anh Thịnh' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Anh Khôi", 
        password: "659", 
        image: "image/Anh Khôi.svg",
        message: "<img src='image/Anh Khôi.svg' alt='Anh Khôi' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Anh Long", 
        password: "153", 
        image: "image/Anh Long.svg",
        message: "<img src='image/Anh Long.svg' alt='Anh Long' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    },
    { 
        name: "Chị Hậu", 
        password: "771", 
        image: "image/Chị Hậu.svg",
        message: "<img src='image/Chị Hậu.svg' alt='Chị Hậu' style='max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;' />"
    }
];

let currentSongIndex = 0;
let isPlaying = false;
let isCollapsed = false;

// Tạo hiệu ứng tuyết rơi
function createSnowflakes() {
    const snowContainer = document.getElementById('snowContainer');
    const snowflakeSymbols = ['❄', '❅', '❆', '✻', '✼', '✽', '✾', '✿', '❀'];
    
    // Tạo 50 bông tuyết
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
        
        // Vị trí ngẫu nhiên
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        
        // Độ trôi ngẫu nhiên (từ -60px đến 60px)
        const drift = (Math.random() - 0.5) * 120;
        snowflake.style.setProperty('--drift', drift + 'px');
        
        // Thời gian rơi ngẫu nhiên (từ 8s đến 16s)
        const duration = 8 + Math.random() * 8;
        snowflake.style.animationDuration = duration + 's';
        
        // Kích thước ngẫu nhiên
        const size = 0.7 + Math.random() * 0.6; // Từ 0.7em đến 1.3em
        snowflake.style.fontSize = size + 'em';
        
        snowContainer.appendChild(snowflake);
    }
}

// Khởi tạo audio player
function initAudioPlayer() {
    const audio = document.getElementById('backgroundMusic');
    loadSong(currentSongIndex);
    
    // Xử lý khi bài hát kết thúc
    audio.addEventListener('ended', () => {
        nextSong();
    });
    
    // Cập nhật thanh tiến trình
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateTotalTime);
    
    // Xử lý seek khi click vào progress bar
    setupProgressBar();
}

// Tải bài hát
function loadSong(index) {
    const audio = document.getElementById('backgroundMusic');
    const song = playlist[index];
    
    audio.src = song.src;
    document.getElementById('currentSongTitle').textContent = song.title;
    
    // Reset progress
    document.getElementById('progressFilled').style.width = '0%';
    document.getElementById('progressHandle').style.left = '0%';
    document.getElementById('currentTime').textContent = '0:00';
    document.getElementById('totalTime').textContent = '0:00';
    
    // Tải bài hát mới
    audio.load();
}

// Phát/Dừng nhạc
function togglePlayPause() {
    const audio = document.getElementById('backgroundMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶';
        playPauseBtn.classList.remove('playing');
        isPlaying = false;
    } else {
        audio.play().then(() => {
            playPauseBtn.textContent = '⏸';
            playPauseBtn.classList.add('playing');
            isPlaying = true;
        }).catch(error => {
            console.log('Không thể phát nhạc:', error);
        });
    }
}

// Bài trước
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    
    // Nếu đang phát, tiếp tục phát bài mới
    if (isPlaying) {
        const audio = document.getElementById('backgroundMusic');
        audio.play().catch(error => {
            console.log('Không thể phát nhạc:', error);
        });
    }
}

// Bài tiếp
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    
    // Nếu đang phát, tiếp tục phát bài mới
    if (isPlaying) {
        const audio = document.getElementById('backgroundMusic');
        audio.play().catch(error => {
            console.log('Không thể phát nhạc:', error);
        });
    }
}

// Cập nhật thanh tiến trình
function updateProgress() {
    const audio = document.getElementById('backgroundMusic');
    const progressFilled = document.getElementById('progressFilled');
    const progressHandle = document.getElementById('progressHandle');
    const currentTimeEl = document.getElementById('currentTime');
    
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressFilled.style.width = progress + '%';
        progressHandle.style.left = progress + '%';
        
        // Cập nhật thời gian hiện tại
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }
}

// Cập nhật tổng thời gian
function updateTotalTime() {
    const audio = document.getElementById('backgroundMusic');
    const totalTimeEl = document.getElementById('totalTime');
    
    if (audio.duration) {
        totalTimeEl.textContent = formatTime(audio.duration);
    }
}

// Định dạng thời gian (mm:ss)
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Thiết lập thanh tiến trình có thể click để seek
function setupProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const audio = document.getElementById('backgroundMusic');
    
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    
    // Drag để seek
    let isDragging = false;
    
    progressBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const rect = progressBar.getBoundingClientRect();
            const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            audio.currentTime = percent * audio.duration;
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// Thu gọn/Mở rộng giao diện
function togglePlayer() {
    const player = document.getElementById('musicPlayer');
    const toggleBtn = document.getElementById('togglePlayer');
    
    isCollapsed = !isCollapsed;
    
    if (isCollapsed) {
        player.classList.add('collapsed');
        toggleBtn.classList.add('collapsed');
        toggleBtn.title = 'Mở rộng';
    } else {
        player.classList.remove('collapsed');
        toggleBtn.classList.remove('collapsed');
        toggleBtn.title = 'Thu gọn';
    }
}

// Thiết lập event listeners cho player
function setupPlayerControls() {
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
    document.getElementById('prevBtn').addEventListener('click', prevSong);
    document.getElementById('nextBtn').addEventListener('click', nextSong);
    document.getElementById('togglePlayer').addEventListener('click', togglePlayer);
}

// Không cần hàm tạo circular text nữa vì text đã được đặt trực tiếp trong HTML

// Tạo các hình chữ nhật chứa SVG và tên
function createGiftBoxes() {
    const giftsGrid = document.getElementById('giftsGrid');
    
    peopleList.forEach((person) => {
        // Container chính
        const giftBox = document.createElement('div');
        giftBox.className = 'gift-box';
        giftBox.dataset.name = person.name;
        
        // Container cho SVG - sử dụng hình ảnh 2027.svg cho tất cả
        const letterImage = document.createElement('div');
        letterImage.className = 'letter-image';
        // Không cần set backgroundImage vì đã được định nghĩa trong CSS
        giftBox.appendChild(letterImage);
        
        // Tên người (dưới hình ảnh)
        const giftName = document.createElement('div');
        giftName.className = 'gift-name';
        giftName.textContent = person.name;
        giftBox.appendChild(giftName);
        
        giftsGrid.appendChild(giftBox);
        
        // Thêm hiệu ứng khi click vào lá thư - mở modal đăng nhập
        giftBox.addEventListener('click', () => {
            openMemberLoginModal(person);
        });
    });
}

// Mở modal nhập mật khẩu
function openPasswordModal() {
    const passwordModal = document.getElementById('passwordModal');
    passwordModal.classList.add('active');
    const passwordInput = document.getElementById('passwordInput');
    passwordInput.value = '';
    passwordInput.focus();
    document.getElementById('passwordError').textContent = '';
    document.body.style.overflow = 'hidden';
}

// Đóng modal nhập mật khẩu
function closePasswordModal() {
    const passwordModal = document.getElementById('passwordModal');
    passwordModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Kiểm tra mật khẩu
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordError = document.getElementById('passwordError');
    const password = passwordInput.value.trim();
    const correctPassword = 'ysof2025';
    
    if (password === '') {
        passwordError.textContent = 'Vui lòng nhập mật khẩu!';
        passwordError.style.display = 'block';
        return;
    }
    
    if (password === correctPassword) {
        passwordError.style.display = 'none';
        closePasswordModal();
        openGiftsModal();
    } else {
        passwordError.textContent = 'Mật khẩu không đúng! Vui lòng thử lại.';
        passwordError.style.display = 'block';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Mở modal hộp quà
function openGiftsModal() {
    const giftsModal = document.getElementById('giftsModal');
    giftsModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Ngăn scroll khi modal mở
}

// Đóng modal hộp quà
function closeGiftsModal() {
    const giftsModal = document.getElementById('giftsModal');
    giftsModal.classList.remove('active');
    document.body.style.overflow = ''; // Cho phép scroll lại
}

// Mở modal đăng nhập cho thành viên
function openMemberLoginModal(person) {
    const memberLoginModal = document.getElementById('memberLoginModal');
    const memberLoginTitle = document.getElementById('memberLoginTitle');
    const memberLoginSubtitle = document.getElementById('memberLoginSubtitle');
    const memberPasswordInput = document.getElementById('memberPasswordInput');
    const memberPasswordError = document.getElementById('memberPasswordError');
    
    // Lưu thông tin thành viên hiện tại
    memberLoginModal.dataset.personName = person.name;
    
    // Cập nhật nội dung modal
    memberLoginTitle.textContent = `🔐 Đăng Nhập - ${person.name}`;
    memberLoginSubtitle.textContent = 'Vui lòng nhập mật khẩu để xem lời nhắn của bạn';
    
    // Reset input và error
    memberPasswordInput.value = '';
    memberPasswordError.textContent = '';
    memberPasswordError.style.display = 'none';
    
    // Hiển thị modal và focus vào input
    memberLoginModal.classList.add('active');
    memberPasswordInput.focus();
    document.body.style.overflow = 'hidden';
}

// Đóng modal đăng nhập thành viên
function closeMemberLoginModal() {
    const memberLoginModal = document.getElementById('memberLoginModal');
    memberLoginModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Kiểm tra mật khẩu thành viên
function checkMemberPassword() {
    const memberLoginModal = document.getElementById('memberLoginModal');
    const memberPasswordInput = document.getElementById('memberPasswordInput');
    const memberPasswordError = document.getElementById('memberPasswordError');
    const personName = memberLoginModal.dataset.personName;
    const password = memberPasswordInput.value.trim();
    
    // Tìm thông tin thành viên
    const person = peopleList.find(p => p.name === personName);
    
    if (!person) {
        memberPasswordError.textContent = 'Không tìm thấy thông tin thành viên!';
        memberPasswordError.style.display = 'block';
        return;
    }
    
    if (password === '') {
        memberPasswordError.textContent = 'Vui lòng nhập mật khẩu!';
        memberPasswordError.style.display = 'block';
        return;
    }
    
    if (password === person.password) {
        memberPasswordError.style.display = 'none';
        closeMemberLoginModal();
        openMessageModal(person);
    } else {
        memberPasswordError.textContent = 'Mật khẩu không đúng! Vui lòng thử lại.';
        memberPasswordError.style.display = 'block';
        memberPasswordInput.value = '';
        memberPasswordInput.focus();
    }
}

// Mở modal hiển thị lời nhắn
function openMessageModal(person) {
    const messageModal = document.getElementById('messageModal');
    const messageContent = document.getElementById('messageContent');
    const downloadBtn = document.getElementById('downloadMessageBtn');
    
    // Ẩn nút download ban đầu
    downloadBtn.style.display = 'none';
    downloadBtn.classList.remove('visible');
    
    // Xóa nội dung cũ
    messageContent.innerHTML = '';
    
    // Tạo container cho hình ảnh với animation
    const imageContainer = document.createElement('div');
    imageContainer.className = 'message-image-container';
    
    const img = document.createElement('img');
    img.src = person.image;
    img.alt = person.name;
    img.className = 'message-image';
    img.id = 'messageImage';
    
    // Lưu thông tin person vào modal để dùng cho download
    messageModal.dataset.personImage = person.image;
    messageModal.dataset.personName = person.name;
    
    // Thêm hiệu ứng fade in và scale khi load xong
    img.addEventListener('load', () => {
        img.classList.add('loaded');
        
        // Hiển thị nút download sau 20 giây
        setTimeout(() => {
            downloadBtn.style.display = 'flex';
            setTimeout(() => {
                downloadBtn.classList.add('visible');
            }, 100);
        }, 20000); // 20 giây
    });
    
    imageContainer.appendChild(img);
    messageContent.appendChild(imageContainer);
    
    // Hiển thị modal
    messageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Đóng modal lời nhắn
function closeMessageModal() {
    const messageModal = document.getElementById('messageModal');
    const downloadBtn = document.getElementById('downloadMessageBtn');
    
    // Ẩn nút download
    downloadBtn.style.display = 'none';
    downloadBtn.classList.remove('visible');
    
    // Xóa data
    delete messageModal.dataset.personImage;
    delete messageModal.dataset.personName;
    
    messageModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Download hình ảnh lời chúc
function downloadMessageImage() {
    const messageModal = document.getElementById('messageModal');
    const imageUrl = messageModal.dataset.personImage;
    const personName = messageModal.dataset.personName;
    
    if (!imageUrl) {
        console.error('Không tìm thấy hình ảnh để tải xuống');
        return;
    }
    
    // Tạo link tạm để download
    const link = document.createElement('a');
    link.href = imageUrl;
    
    // Tạo tên file từ tên người (loại bỏ ký tự đặc biệt)
    const fileName = personName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_') + '.svg';
    link.download = fileName;
    
    // Thêm vào DOM, click và xóa
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Thiết lập modal đăng nhập thành viên
function setupMemberLoginModal() {
    const memberLoginModal = document.getElementById('memberLoginModal');
    const memberPasswordInput = document.getElementById('memberPasswordInput');
    const memberPasswordSubmitBtn = document.getElementById('memberPasswordSubmitBtn');
    const memberPasswordCancelBtn = document.getElementById('memberPasswordCancelBtn');
    
    // Xác nhận khi nhấn Enter
    memberPasswordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkMemberPassword();
        }
    });
    
    // Xác nhận khi click nút
    memberPasswordSubmitBtn.addEventListener('click', checkMemberPassword);
    
    // Hủy khi click nút hủy
    memberPasswordCancelBtn.addEventListener('click', closeMemberLoginModal);
    
    // Đóng khi click ra ngoài
    memberLoginModal.addEventListener('click', (e) => {
        if (e.target === memberLoginModal) {
            closeMemberLoginModal();
        }
    });
}

// Thiết lập modal lời nhắn
function setupMessageModal() {
    const messageModal = document.getElementById('messageModal');
    const closeMessageBtn = document.getElementById('closeMessageBtn');
    const downloadMessageBtn = document.getElementById('downloadMessageBtn');
    
    // Đóng khi click nút đóng
    closeMessageBtn.addEventListener('click', closeMessageModal);
    
    // Download khi click nút download
    downloadMessageBtn.addEventListener('click', downloadMessageImage);
    
    // Đóng khi click ra ngoài
    messageModal.addEventListener('click', (e) => {
        if (e.target === messageModal) {
            closeMessageModal();
        }
    });
}

// Thiết lập modal nhập mật khẩu
function setupPasswordModal() {
    const passwordModal = document.getElementById('passwordModal');
    const passwordInput = document.getElementById('passwordInput');
    const passwordSubmitBtn = document.getElementById('passwordSubmitBtn');
    const passwordCancelBtn = document.getElementById('passwordCancelBtn');
    
    // Xác nhận khi nhấn Enter
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    // Xác nhận khi click nút
    passwordSubmitBtn.addEventListener('click', checkPassword);
    
    // Hủy khi click nút hủy
    passwordCancelBtn.addEventListener('click', closePasswordModal);
    
    // Đóng khi click ra ngoài
    passwordModal.addEventListener('click', (e) => {
        if (e.target === passwordModal) {
            closePasswordModal();
        }
    });
}

// Thiết lập các nút mở/đóng modal
function setupGiftsModal() {
    const openBtn = document.getElementById('openGiftsBtn');
    const closeBtn = document.getElementById('closeGiftsBtn');
    const giftsModal = document.getElementById('giftsModal');
    
    // Mở modal nhập mật khẩu khi click vào "Khu Vực Của Những Lá Thư"
    openBtn.addEventListener('click', openPasswordModal);
    
    // Đóng modal khi click vào nút đóng
    closeBtn.addEventListener('click', closeGiftsModal);
    
    // Đóng modal khi click ra ngoài (vào background)
    giftsModal.addEventListener('click', (e) => {
        if (e.target === giftsModal) {
            closeGiftsModal();
        }
    });
    
    // Đóng modal khi nhấn phím ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && giftsModal.classList.contains('active')) {
            closeGiftsModal();
        }
    });
}

// Khởi tạo trang web
document.addEventListener('DOMContentLoaded', function() {
    createSnowflakes();
    createGiftBoxes();
    initAudioPlayer();
    setupPlayerControls();
    setupPasswordModal();
    setupMemberLoginModal();
    setupMessageModal();
    setupGiftsModal();
    
    // Thử phát nhạc khi người dùng tương tác với trang
    const tryPlayMusic = () => {
        if (!isPlaying) {
            togglePlayPause();
        }
    };
    
    document.addEventListener('click', tryPlayMusic, { once: true });
    document.addEventListener('mousemove', tryPlayMusic, { once: true });
});
