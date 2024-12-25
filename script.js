function login() {
    // ดึงค่าจาก input
    const username = document.getElementById('user').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value.trim();

    // ตรวจสอบข้อมูล
    if (username === '' || email === '' || password === '') {
    alert("failed:กรุณากรอกให้ครบถ้วน");
    } else {
        alert("SuccessFully:ล็อกอินสำเร็จ");
    }
};