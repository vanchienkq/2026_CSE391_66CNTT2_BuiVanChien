const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

const registerForm = document.getElementById("registerForm");

function showError(id, msg) {
	document.getElementById(id).textContent = msg;
}

function clearError(id) {
	document.getElementById(id).textContent = "";
}

function validateName() {

	const regex = /^[a-zA-ZÀ-ỹ\s]+$/;

	if (!regex.test(fullname.value) || fullname.value.length < 3) {
		showError("nameErr", "Tên không hợp lệ");
		return false;
	}

	clearError("nameErr");
	return true;
}

function validateEmail() {

	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!regex.test(email.value)) {
		showError("emailErr", "Email không hợp lệ");
		return false;
	}

	clearError("emailErr");
	return true;
}

registerForm.addEventListener("submit", function(e) {

	e.preventDefault();

	const ok =
		validateName() &
		validateEmail();

	if (ok) {
		alert("Đăng ký thành công");
	}
});

const prices = {
	Ao: 150000,
	Quan: 200000
};

const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");

function updateTotal() {

	const p = prices[product.value] || 0;
	const q = Number(quantity.value) || 0;

	const money = p * q;

	total.textContent = money.toLocaleString("vi-VN");
}

product.addEventListener("change", updateTotal);
quantity.addEventListener("input", updateTotal);

const note = document.getElementById("note");
const noteCount = document.getElementById("noteCount");

note.addEventListener("input", function() {

	const len = note.value.length;

	noteCount.textContent = len + "/200";

	if (len > 200) {
		noteCount.style.color = "red";
	}
	else {
		noteCount.style.color = "black";
	}
});