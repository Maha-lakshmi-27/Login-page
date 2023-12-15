function toggle() {
    var showpwd = document.getElementById("show-pwd");
    var password = document.getElementById("pwd");

    if (password.type === "password") {
        password.type = "text"
        showpwd.classList.remove("fa-eye-slash")
        showpwd.classList.add("fa-eye")
    }
    else {
        password.type = "password"
        showpwd.classList.remove("fa-eye")
        showpwd.classList.add("fa-eye-slash")
    }
}