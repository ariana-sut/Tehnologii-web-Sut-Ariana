let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const emailRegex = /^[a-z.]+\d{2}@e-uvt\.ro$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

  if (!emailRegex.test(email)) {
    alert("E-mail invalid.");
    return;
  }
  if (!passwordRegex.test(password)) {
    alert("Parola invalida.");
    return;
  }

  alert("Login reușit!");
  window.location.href = "loading.html";
});
