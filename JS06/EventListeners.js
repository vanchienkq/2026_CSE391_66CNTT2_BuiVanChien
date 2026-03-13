let btn = document.getElementById("btn");
let title = document.getElementById("title");
let box = document.getElementById("box");

// 1. Gán sự kiện click cho một nút bấm
btn.addEventListener("click", function() {
  console.log("Button clicked");
});

// 2. Thử nghiệm gán nhiều listeners khác nhau cho cùng 1 phần tử (không bị ghi đè, có thể thêm nhiều)
btn.addEventListener("click", function() {
  console.log("Another click listener");
});

// 3. Lắng nghe sự kiện mouseenter / mouseleave
// mouseenter
box.addEventListener("mouseenter", function() {
  console.log("Mouse entered");
});
// mouseleave
box.addEventListener("mouseleave", function() {
  console.log("Mouse left");
});

// 4. Thay đổi textContent của một thẻ khi người dùng click vào
btn.addEventListener("click", function() {
  title.textContent = "Đã click!";
});

// 5. Toggle class để đổi màu nền khi click nút
btn.addEventListener("click", function() {
  box.classList.toggle("active");
});