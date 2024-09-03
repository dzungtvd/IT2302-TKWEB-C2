let indexOfServices = 0;
window.onload = function(){
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
    // chuyển qua lại giữa đăng nhập và đăng kí
    let dangki = document.getElementById("signUp");
    let dangnhap = document.getElementById("loGin");
    dangki.onclick = function(){
        let inputDangNhap = document.querySelector(".login_Input");
        let inputDangKi = document.querySelector(".signup_Input");
        let nutQuenPass = document.querySelector(".forgetPass");
        let contactIcons = document.querySelector("#announceAboutForgetPassword");
        let announces = document.querySelectorAll(".announceAtInput");
        contactIcons.classList.add("hidden"); // ẩn thông báo để khi quay lại đăng nhập sẽ ko hiện nữa
        nutQuenPass.classList.add("displayNone"); // ẩn nút quên mật khẩu
        for (let announce of announces){
            announce.classList.add("hidden"); // ẩn tất cả thông báo nhập liệu
        }
        inputDangNhap.classList.add("displayNone");
        inputDangKi.classList.remove("displayNone");
    }
    dangnhap.onclick = function(){
        let inputDangNhap = document.querySelector(".login_Input");
        let inputDangKi = document.querySelector(".signup_Input");
        let nutQuenPass = document.querySelector(".forgetPass");
        let announces = document.querySelectorAll(".announceAtInputDK");
        for (let announce of announces){
            announce.classList.add("hidden"); // ẩn tất cả thông báo nhập liệu
        }
        nutQuenPass.classList.remove("displayNone"); // hiện nút quên mật khẩu
        inputDangNhap.classList.remove("displayNone");
        inputDangKi.classList.add("displayNone");
    }
    // hiện thông báo khi ấn quên mật khẩu
    let forgetPass = document.getElementById("forgetPass");
    forgetPass.onclick = function(){
        let announce = document.getElementById("announceAboutForgetPassword");
        announce.classList.remove("hidden");
    }
    // chuyển qua lại giữa các dịch vụ nổi bật
    let left_button = document.getElementById("leftButton");
    let right_button = document.getElementById("rightButton");
    left_button.onclick = function(){
        if (indexOfServices===0){
            indexOfServices=2;
        }
        else {
            indexOfServices--;
        }
        changeServices(indexOfServices);
    }
    right_button.onclick = function(){
        if (indexOfServices===2){
            indexOfServices=0;
        }
        else {
            indexOfServices++;
        }
        changeServices(indexOfServices);
    }
    // Kiểm tra input tại phần đăng nhập
    let submitButton = document.getElementById("submitButton");
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let notRobot = document.getElementById("checkBox");
    let notRobotChecked = document.querySelector("#notRobot>div>input").checked;
    notRobotChecked = false;
    user.onchange = pass.onchange = notRobot.onclick = function(){
        if (user.value!=="" && pass.value!=="" && document.querySelector("#notRobot>div>input").checked){
            submitButton.href ="index.html";
        }
        else {
            submitButton.href="#";
        }
    }
    submitButton.onclick = function(){
        if (user.value===""){
            document.getElementById("announceForUser").classList.remove("hidden");
        }
        else {
            document.getElementById("announceForUser").classList.add("hidden");
        }
        if (pass.value===""){
            document.getElementById("announceForPass").classList.remove("hidden");
        }
        else {
            document.getElementById("announceForPass").classList.add("hidden");
        }
        notRobotChecked = document.querySelector("#notRobot>div>input").checked;
        if (!notRobotChecked){
            document.getElementById("announceForRobot").classList.remove("hidden");
        }
        else {
            document.getElementById("announceForRobot").classList.add("hidden");
        }
    }
    // kiểm tra input tại phần đăng kí
    // Kiểm tra input tại phần đăng nhập
    let submitButtonDK = document.getElementById("submitButtonDK");
    let userDK = document.getElementById("userDK");
    let passDK = document.getElementById("passDK");
    let passAgainDK = document.getElementById("passAgainDK");
    let notRobotDK = document.getElementById("checkBoxDK");
    let notRobotCheckedDK = document.querySelector("#notRobotDK>div>input").checked;
    notRobotCheckedDK = false;
    userDK.onchange = passDK.onchange = passAgainDK.onchange = notRobotDK.onclick = function(){
        if (userDK.value!=="" && passDK.value!=="" && document.querySelector("#notRobotDK>div>input").checked && passDK.value===passAgainDK.value){
            submitButtonDK.href ="index.html";
        }
        else {
            submitButtonDK.href="#";
        }
    }
    submitButtonDK.onclick = function(){
        if (userDK.value===""){
            document.getElementById("announceForUserDK").classList.remove("hidden");
        }
        else {
            document.getElementById("announceForUserDK").classList.add("hidden");
        }
        if (passDK.value===""){
            document.getElementById("announceForPassDK").classList.remove("hidden");
        }
        else {
            document.getElementById("announceForPassDK").classList.add("hidden");
        }
        if (passAgainDK.value!==passDK.value){
            document.getElementById("announceForPassAgainDK").classList.remove("hidden");
        }
        else {
            document.getElementById("announceForPassAgainDK").classList.add("hidden");
        }
        notRobotCheckedDK = document.querySelector("#notRobotDK>div>input").checked;
        if (!notRobotCheckedDK){
            document.getElementById("announceForRobotDK").classList.remove("hidden");
        }
        else {
            document.getElementById("announceForRobotDK").classList.add("hidden");
        }
    }
    // Nút tắt quảng cáo các dịch vụ
    let buttonCloseAd = document.querySelector(".services>.closeAd");
    buttonCloseAd.onclick = function(){
        document.querySelector(".services").classList.add("displayNoneForMobile");
        // document.querySelector(".services").classList.add("animate__animated");
        // document.querySelector(".services").classList.add("animate__backOutDown");
    }
}
setInterval(function(){
    if (indexOfServices!==2){
        indexOfServices++;
        changeServices(indexOfServices);
    }
    else {
        indexOfServices = 0;
        changeServices(indexOfServices);
    }
},8000);
let changeServices = function(i){
    if (i===0){
        document.querySelector(".serviceName").innerText = "Du lịch & Đi lại";
        document.querySelector(".serviceDetails").innerText = "Du lịch và đi lại với ưu đãi đặc biệt, hỗ trợ khẩn cấp 24/7.";
        document.querySelector(".services>img").src = "images/serviceImage/serviceImage1.png";
    }
    else if (i===1){
        document.querySelector(".serviceName").innerText = "Nạp điện thoại - Data";
        document.querySelector(".serviceDetails").innerText = "Nạp tiền điện thoại và dữ liệu di động nhanh chóng.";
        document.querySelector(".services>img").src = "images/serviceImage/serviceImage2.png";
    }
    else if (i===2){
        document.querySelector(".serviceName").innerText = "Thanh toán hóa đơn";
        document.querySelector(".serviceDetails").innerText = "Thanh toán hóa đơn tiện lợi và nhanh chóng, dễ dàng quản lý các khoản chi tiêu hàng tháng.";
        document.querySelector(".services>img").src = "images/serviceImage/serviceImage3.png";
    }
}