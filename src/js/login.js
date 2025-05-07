
document.addEventListener("DOMContentLoaded", function () {
  checkExistingSession();
  setupLoginForm();
});

function checkExistingSession() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const sessionExpiry = localStorage.getItem("sessionExpiry");

  if (currentUser && sessionExpiry && new Date(sessionExpiry) > new Date()) {
    window.location.href = "dashboard.html";
  } else if (currentUser) {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("sessionExpiry");
  }
}

function setupLoginForm() {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handleLogin();
    });
  }
}


function handleLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("remember").checked;

  if (!email || !password) {
    showError("الرجاء إدخال البريد الإلكتروني وكلمة المرور");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    showError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  if (rememberMe) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7); // انتهاء بعد أسبوع
    localStorage.setItem("sessionExpiry", expiryDate.toISOString());
  }

  showSuccess("تم تسجيل الدخول بنجاح! جاري التوجيه...");
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1500);
}


function showError(message) {
  const existingError = document.querySelector(".login-error");
  if (existingError) {
    existingError.remove();
  }

  const errorElement = document.createElement("div");
  errorElement.className = "alert alert-danger login-error mt-3";
  errorElement.textContent = message;
  errorElement.style.textAlign = "center";
  errorElement.style.direction = "rtl";

  const loginButton = document.querySelector(".btn-login");
  loginButton.parentNode.appendChild(errorElement);
}

function showSuccess(message) {

  const existingMsg = document.querySelector(".login-message");
  if (existingMsg) {
    existingMsg.remove();
  }

  const successElement = document.createElement("div");
  successElement.className = "alert alert-success login-message mt-3";
  successElement.textContent = message;
  successElement.style.textAlign = "center";
  successElement.style.direction = "rtl";

  const loginButton = document.querySelector(".btn-login");
  loginButton.parentNode.appendChild(successElement);
}