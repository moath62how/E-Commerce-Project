if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}

/**
 * Register a new user
 * @returns {boolean} - Returns false to prevent form submission
 */
function registerUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phone = document.getElementById("phone").value.trim();

  // Validate inputs
  if (!validateEmail(email)) {
    showError("email", "الرجاء إدخال بريد إلكتروني صحيح");
    return false;
  }

  if (!validatePassword(password, confirmPassword)) {
    return false;
  }

  if (!validatePhone(phone)) {
    showError("phone", "الرجاء إدخال رقم هاتف صحيح");
    return false;
  }

  // Check if user already exists
  const users = JSON.parse(localStorage.getItem("users"));
  if (users.some((user) => user.email === email)) {
    showError("email", "البريد الإلكتروني مسجل بالفعل");
    return false;
  }

  // Create user object (in real app, never store plain passwords)
  const newUser = {
    id: Date.now().toString(),
    email,
    password,
    phone,
    role: "user",
    createdAt: new Date().toISOString(),
  };

  // Save to localStorage
  users.push(newUser);
  console.log(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  // Redirect after registration
  console.log("here");
  showSuccess("تم التسجيل بنجاح! جاري التوجيه...");
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1500);

  return false;
}

// Helper Functions

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password, confirmPassword) {
  if (password.length < 8) {
    showError("password", "كلمة المرور يجب أن تكون 8 أحرف على الأقل");
    return false;
  }

  if (password !== confirmPassword) {
    showError("confirmPassword", "كلمات المرور غير متطابقة");
    return false;
  }

  return true;
}

function validatePhone(phone) {
  // Basic phone validation - adjust for your needs
  return phone.length >= 10;
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorElement =
    document.getElementById(`${fieldId}Error`) || document.createElement("div");

  field.classList.add("is-invalid");
  errorElement.id = `${fieldId}Error`;
  errorElement.className = "error-message";
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.fontSize = "0.875rem";
  errorElement.style.direction = "rtl";
  errorElement.style.textAlign = "right";

  if (
    !field.nextElementSibling ||
    !field.nextElementSibling.classList.contains("error-message")
  ) {
    field.after(errorElement);
  }
}

function showSuccess(message) {
  const successElement = document.createElement("div");
  successElement.className = "alert alert-success mt-3";
  successElement.textContent = message;
  successElement.style.textAlign = "center";
  successElement.style.direction = "rtl";

  const form = document.getElementById("registrationForm");
  form.appendChild(successElement);

  setTimeout(() => {
    successElement.remove();
  }, 3000);
}

// Attach to form submission
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registrationForm");
  console.log(registerForm);
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      registerUser();
    });
  }
});