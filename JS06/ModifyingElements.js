// Thay đổi văn bản tiêu đề bằng textContent
let title = document.getElementById("title");
title.textContent = "Tiêu đề mới";

// Chèn thêm mã HTML vào một div bằng innerHTML
let content = document.getElementById("content");
content.innerHTML = "<p>Đây là đoạn <strong>HTML</strong> được chèn</p>";

// Sử dụng createElement để tạo một thẻ <li> mới
let newItem = document.createElement("li");
newItem.textContent = "Item mới";

// Append phần tử vừa tạo vào danh sách <ul>
let list = document.getElementById("list");
list.appendChild(newItem);

// Thử xóa một phần tử bằng phương thức remove()
let removeItem = document.getElementById("removeMe");
removeItem.remove();