function Login()
{
    const login = document.getElementById("login");
    const password = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");
    if(login.value !="" || password.value !="")
    window.location.href = "./dashboard.html";
    else
    alert("Enter Please Fill All Fields");
}


