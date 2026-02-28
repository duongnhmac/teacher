const projectData = {
    ruler: {
        title: "THƯỚC KẺ",
        materials: [
            { name: "Bìa Fomex", image: "data/[VẬT LIỆU] BÌA FOMEX.png" },
            { name: "Giấy màu", image: "data/[VẬT LIỆU] GIẤY MÀU.png" }
        ],
        tools: [
            { name: "Thước kẻ", image: "data/[DỤNG CỤ] THƯỚC KẺ.png" },
            { name: "Bút màu", image: "data/[DỤNG CỤ] BÚT MÀU.png" },
            { name: "Kéo", image: "data/[DỤNG CỤ] KÉO.png" }
        ],
        steps: [
            "Chuẩn bị bìa Fomex và cắt theo kích thước thước kẻ mong muốn.",
            "Dùng giấy màu bọc quanh để tạo nền sinh động.",
            "Dùng thước và bút màu vẽ vạch chia độ chính xác.",
            "Trang trí thêm các hình vẽ sáng tạo ở phần còn trống."
        ],
        videoUrl: "data/VIDOE LÀM THƯỚC KẺ.mp4"
    },
    multiplication_table: {
        title: "BẢNG CỬU CHƯƠNG",
        materials: [
            { name: "Bìa Fomex", image: "data/[VẬT LIỆU] BÌA FOMEX.png" },
            { name: "Giấy màu", image: "data/[VẬT LIỆU] GIẤY MÀU.png" }
        ],
        tools: [
            { name: "Bút màu", image: "data/[DỤNG CỤ] BÚT MÀU.png" },
            { name: "Băng dính 2 mặt", image: "data/[DỤNG CỤ] BĂNG DÍNH HAI MẶT.png" },
            { name: "Thước kẻ", image: "data/[DỤNG CỤ] THƯỚC KẺ.png" }
        ],
        steps: [
            "Cắt bìa Fomex thành tấm lớn hình chữ nhật.",
            "Dùng thước kẻ chia ô đều đặn cho bảng tính.",
            "Viết các phép tính bảng cửu chương bằng bút nhiều màu.",
            "Dùng giấy màu và băng dính để trang trí viền bảng."
        ],
        videoUrl: "data/VIDEO LÀM BẢNG CỬU CHƯƠNG.mp4"
    },
    pen_holder: {
        title: "ỐNG ĐỰNG BÚT",
        materials: [
            { name: "Lõi giấy vệ sinh", image: "data/[VẬT LIỆU] LÕI GIẤY VỆ SINH.png" },
            { name: "Que kem", image: "data/[VẬT LIỆU] QUE KEM.png" },
            { name: "Giấy màu", image: "data/[VẬT LIỆU] GIẤY MÀU.png" }
        ],
        tools: [
            { name: "Băng dính 2 mặt", image: "data/[DỤNG CỤ] BĂNG DÍNH HAI MẶT.png" },
            { name: "Kéo", image: "data/[DỤNG CỤ] KÉO.png" }
        ],
        steps: [
            "Dùng băng dính hai mặt dán xung quanh lõi giấy.",
            "Xếp các que kem đều nhau bao quanh lõi giấy vệ sinh.",
            "Trang trí mặt ngoài que kem bằng giấy màu hoặc vẽ hình.",
            "Kiểm tra độ chắc chắn của đáy ống trước khi sử dụng."
        ],
        videoUrl: "data/VIDEO LÀM ỐNG ĐỰNG BÚT.mp4"
    },
    bookmark: {
        title: "THẺ ĐÁNH DẤU TRANG",
        materials: [
            { name: "Giấy màu", image: "data/[VẬT LIỆU] GIẤY MÀU.png" },
            { name: "Bìa Fomex mỏng", image: "data/[VẬT LIỆU] BÌA FOMEX.png" }
        ],
        tools: [
            { name: "Kéo", image: "data/[DỤNG CỤ] KÉO.png" },
            { name: "Bút màu", image: "data/[DỤNG CỤ] BÚT MÀU.png" }
        ],
        steps: [
            "Cắt giấy màu hoặc bìa Fomex thành hình thẻ mong muốn.",
            "Vẽ các họa tiết hoặc nhân vật yêu thích lên mặt thẻ.",
            "Có thể đục lỗ ở đầu và luồn thêm sợi dây trang trí.",
            "Ép thêm một lớp nhựa mỏng nếu muốn giữ thẻ được lâu."
        ],
        videoUrl: "data/VIDEO LÀM THẺ ĐÁNH DẤU TRANG.mp4"
    },
    notebook: {
        title: "SỔ TAY HANDMADE",
        materials: [
            { name: "Giấy màu", image: "data/[VẬT LIỆU] GIẤY MÀU.png" },
            { name: "Bìa Fomex", image: "data/[VẬT LIỆU] BÌA FOMEX.png" }
        ],
        tools: [
            { name: "Băng dính 2 mặt", image: "data/[DỤNG CỤ] BĂNG DÍNH HAI MẶT.png" },
            { name: "Kéo", image: "data/[DỤNG CỤ] KÉO.png" }
        ],
        steps: [
            "Gấp đôi các tờ giấy màu lại làm ruột sổ.",
            "Cắt bìa Fomex làm bìa cứng cho cuốn sổ.",
            "Dùng băng dính hai mặt cố định phần gáy sổ vào bìa.",
            "Trang trí mặt ngoài bìa sổ thật ấn tượng."
        ],
        videoUrl: "" // Chưa có video địa phương
    },
    pencil_case: {
        title: "TÚI ĐỰNG BÚT",
        materials: [
            { name: "Giấy màu", image: "data/[VẬT LIỆU] GIẤY MÀU.png" },
            { name: "Bìa Fomex", image: "data/[VẬT LIỆU] BÌA FOMEX.png" }
        ],
        tools: [
            { name: "Băng dính 2 mặt", image: "data/[DỤNG CỤ] BĂNG DÍNH HAI MẶT.png" },
            { name: "Kéo", image: "data/[DỤNG CỤ] KÉO.png" }
        ],
        steps: [
            "Cắt miếng bìa Fomex theo hình dạng túi đựng bút.",
            "Gấp và dán các mép lại bằng băng dính hai mặt chắc chắn.",
            "Dùng giấy màu trang trí các họa tiết bên ngoài.",
            "Có thể gắn thêm khuy hoặc khóa dán để đóng mở túi."
        ],
        videoUrl: "" // Chưa có video địa phương
    }
};

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const itemKey = card.getAttribute("data-item");
        const data = projectData[itemKey];

        if (data) {
            renderModal(data);
            modal.style.display = "block";
        }
    });
});

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function renderModal(data) {
    let videoHTML = "";
    if (data.videoUrl) {
        if (data.videoUrl.endsWith(".mp4")) {
            videoHTML = `
                <div class="video-container">
                    <video controls>
                        <source src="${data.videoUrl}" type="video/mp4">
                        Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>
                </div>
            `;
        } else {
            videoHTML = `
                <div class="video-container iframe-mode">
                    <iframe src="${data.videoUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
        }
    } else {
        videoHTML = `<p style="text-align: center; color: #636e72;">Video hướng dẫn đang được cập nhật...</p>`;
    }

    modalBody.innerHTML = `
        <div class="detail-header">
            <h2>${data.title}</h2>
        </div>
        <div class="detail-grid">
            <div>
                <span class="section-title">📦 Vật liệu:</span>
                <ul class="materials">
                    ${data.materials.map(m => `
                        <li class="item-card">
                            <img src="${m.image}" alt="${m.name}">
                            <p>${m.name}</p>
                        </li>
                    `).join('')}
                </ul>
                <br>
                <span class="section-title">🛠️ Dụng cụ:</span>
                <ul class="tools">
                    ${data.tools.map(t => `
                        <li class="item-card">
                            <img src="${t.image}" alt="${t.name}">
                            <p>${t.name}</p>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div>
                <span class="section-title">📝 Các bước thực hiện:</span>
                <ol>
                    ${data.steps.map(s => `<li>${s}</li>`).join('')}
                </ol>
            </div>
        </div>
        <div style="margin-top: 2rem;">
            <span class="section-title">🎥 Video hướng dẫn:</span>
            ${videoHTML}
        </div>
    `;
}
