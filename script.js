const projectData = {
    ruler: {
        title: "Thước Kẻ Sáng Tạo",
        materials: ["Thước gỗ trắng hoặc nhựa nhám", "Bút dạ nhiều màu", "Nhãn dán (Stickers)", "Sơn bóng hoặc băng keo trong"],
        tools: ["Kéo", "Khăn lau"],
        steps: [
            "Lau sạch bề mặt thước để mực bám tốt hơn.",
            "Dùng bút dạ vẽ các họa tiết yêu thích (ngôi sao, hoa, hình học).",
            "Dán nhãn dán ở những khoảng trống nếu muốn.",
            "Phủ một lớp băng keo trong hoặc sơn bóng để bảo vệ hình vẽ."
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    pen: {
        title: "Bút Viết Trang Trí",
        materials: ["Bút bi thông thường", "Dây ruy băng nhỏ", "Cúc áo màu sắc", "Keo nến"],
        tools: ["Súng bắn keo", "Kéo"],
        steps: [
            "Quấn ruy băng quanh thân bút từ dưới lên trên.",
            "Dùng súng bắn keo cố định hai đầu dây ruy băng.",
            "Dán thêm cúc áo hoặc các quả bông nhỏ lên đỉnh bút.",
            "Kiểm tra xem bút có bị vướng khi cầm viết hay không."
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    pen_holder: {
        title: "Ống Đựng Bút Tái Chế",
        materials: ["Lon sữa cũ hoặc lõi giấy vệ sinh", "Giấy màu thủ công", "Dây thừng nhỏ (len)", "Cườm hoặc hạt trang trí"],
        tools: ["Keo dán giấy", "Súng bắn keo", "Thước đo"],
        steps: [
            "Đo kích thước lon và cắt giấy màu vừa vặn.",
            "Dán giấy màu chắc chắn quanh thân lon.",
            "Quấn dây thừng ở phần viền để tạo điểm nhấn cổ điển.",
            "Sắp xếp và dán các hạt cườm theo ý thích."
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
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

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function renderModal(data) {
    modalBody.innerHTML = `
        <div class="detail-header">
            <h2>${data.title}</h2>
        </div>
        <div class="detail-grid">
            <div>
                <span class="section-title">📦 Vật liệu:</span>
                <ul class="materials">
                    ${data.materials.map(m => `<li>${m}</li>`).join('')}
                </ul>
                <br>
                <span class="section-title">🛠️ Dụng cụ:</span>
                <p>${data.tools.join(", ")}</p>
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
            <div class="video-container">
                <iframe src="${data.videoUrl}" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    `;
}
