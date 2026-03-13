//1. Thêm click event listener cho một nút bấm
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("Button clicked");
});

//2. Thêm keyboard event listener để nhận diện phím nhấn
document.addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key);
});

//3. Xử lý sự kiện submit của form và ngăn load lại trang
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted but page not reloaded");
});

//4. Kiểm tra sự lan truyền sự kiện (bubbling) qua các thẻ lồng nhau
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

outer.addEventListener("click", () => {
    console.log("outer clicked");
});

inner.addEventListener("click", () => {
    console.log("inner clicked");
});

//5. Triển khai event delegation cho một danh sách (UL/LI)
const list = document.getElementById("list");

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log("Clicked:", e.target.textContent);
    }
});

