// Lấy phần tử
let img = document.getElementById("myImg");
let box = document.getElementById("box");
let btn = document.getElementById("toggleBtn");

// 1. Thay đổi thuộc tính src của một thẻ <img>
img.src = "image2.jpg";

// 2. Sử dụng dot notation để gán giá trị cho các properties
img.alt = "Ảnh mới";

// 3. Thêm và xóa class cho phần tử bằng classList.add / remove
// Thêm class
box.classList.add("active");
// Xóa class
box.classList.remove("box");

// 4. Sử dụng classList.toggle để bật/tắt một trạng thái
// Toggle class khi click
btn.addEventListener("click", function() {
  box.classList.toggle("highlight");
});

// 5. Kiểm tra sự tồn tại của class bằng classList.contains
// Kiểm tra class
console.log(box.classList.contains("active"));