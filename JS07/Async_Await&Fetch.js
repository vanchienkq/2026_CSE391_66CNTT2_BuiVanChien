// Async/Await + Fetch API
async function loadUsers(){

  const container = document.getElementById("users");

  try {
    // 2. Fetch API gọi API công khai
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // 3. kiểm tra lỗi kết nối
    if(!response.ok){
      throw new Error("API error");
    }

    // 4. chuyển dữ liệu JSON
    const users = await response.json();

    // 5. hiển thị dữ liệu lên DOM
    container.innerHTML = "";

    users.forEach(user => {

      const div = document.createElement("div");

      div.classList.add("user");

      div.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
      `;

      container.appendChild(div);

    });
  }

  catch(error){
    console.log("Lỗi:", error);
    container.innerHTML = "<p>Không thể tải dữ liệu</p>";
  }
}

// click để tải dữ liệu
document
.getElementById("loadBtn")
.addEventListener("click", loadUsers);