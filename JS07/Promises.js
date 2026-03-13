//1. Tự tạo một Promise mô phỏng việc lấy dữ liệu (delay 2s)
const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded");
    }, 2000);
});

//2. Sử dụng .then() và .catch() để xử lý kết quả
getData
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});

//3. Thực hiện chuỗi Chain promises qua nhiều bước xử lý
const getNumber = new Promise((resolve) => {
    setTimeout(() => resolve(5), 1000);
});

getNumber
.then(num => {
    console.log("Step 1:", num);
    return num * 2;
})
.then(num => {
    console.log("Step 2:", num);
    return num + 3;
})
.then(num => {
    console.log("Step 3:", num);
});

//4. Mô phỏng lỗi và xử lý tập trung bằng .catch()
const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        const success = false;

        if (success) {
            resolve("OK");
        } else {
            reject("Something failed");
        }

    }, 1000);
});

testPromise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log("Error:", error);
});

//5. Chuyển đổi một hàm callback truyền thống sang dạng Promise
//Callback truyền thống
function loadData(callback) {
    setTimeout(() => {
        callback("Data from callback");
    }, 1000);
}

loadData(function(data){
    console.log("Callback:", data);
});

//Dạng promise
function loadDataPromise(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Data from Promise");
        }, 1000);

    });
}

loadDataPromise()
.then(data => {
    console.log("Promise:", data);
});

