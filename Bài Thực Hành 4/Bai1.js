const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const addBtn = document.getElementById("addBtn");

const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

const tableBody = document.getElementById("tableBody");
const stats = document.getElementById("stats");
const sortScore = document.getElementById("sortScore");

let students = [];
let sortAsc = true;

function getRank(score) {
	if (score >= 8.5) return "Giỏi";
	if (score >= 7) return "Khá";
	if (score >= 5) return "Trung bình";
	return "Yếu";
}

function renderTable(list) {

	tableBody.innerHTML = "";

	if (list.length === 0) {
		tableBody.innerHTML = "<tr><td colspan='5'>Không có kết quả</td></tr>";
		return;
	}

	list.forEach((st, i) => {

		const tr = document.createElement("tr");

		if (st.score < 5) {
			tr.style.background = "yellow";
		}

		tr.innerHTML = `
			<td>${i + 1}</td>
			<td>${st.name}</td>
			<td>${st.score}</td>
			<td>${getRank(st.score)}</td>
			<td>
				<button data-index="${students.indexOf(st)}">Xóa</button>
			</td>
		`;

		tableBody.appendChild(tr);

	});

	updateStats();
}

function updateStats() {

	let sum = 0;

	students.forEach(s => sum += s.score);

	const avg = students.length ? (sum / students.length).toFixed(2) : 0;

	stats.textContent =
		`Tổng sinh viên: ${students.length} | Điểm trung bình: ${avg}`;
}

function applyFilters() {

	let result = [...students];

	const keyword = searchInput.value.toLowerCase();

	result = result.filter(s =>
		s.name.toLowerCase().includes(keyword)
	);

	const filter = filterSelect.value;

	if (filter !== "all") {
		result = result.filter(s =>
			getRank(s.score) === filter
		);
	}

	result.sort((a, b) =>
		sortAsc ? a.score - b.score : b.score - a.score
	);

	renderTable(result);
}

addBtn.addEventListener("click", () => {

	const name = nameInput.value.trim();
	const score = Number(scoreInput.value);

	if (!name || score < 0 || score > 10) {
		alert("Dữ liệu không hợp lệ");
		return;
	}

	students.push({ name, score });

	nameInput.value = "";
	scoreInput.value = "";

	nameInput.focus();

	applyFilters();
});

scoreInput.addEventListener("keyup", (e) => {

	if (e.key === "Enter") {
		addBtn.click();
	}
});

tableBody.addEventListener("click", (e) => {

	if (e.target.tagName === "BUTTON") {

		const index = e.target.dataset.index;

		students.splice(index, 1);

		applyFilters();
	}
});

searchInput.addEventListener("input", applyFilters);
filterSelect.addEventListener("change", applyFilters);

sortScore.addEventListener("click", () => {

	sortAsc = !sortAsc;

	applyFilters();
});