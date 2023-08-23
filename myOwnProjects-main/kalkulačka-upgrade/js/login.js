
export function initializeLogin() {
  const loginButton = document.querySelector(".btn-login");
  const nameInput = document.querySelector("#name");
  const passwordInput = document.querySelector("#password");
  const loginForm = document.querySelector(".form-control-1");
  const container = document.querySelector(".container");
  const container1 = document.querySelector(".container-1");

  const loginInfo = [
    { username: "martin", password: "pes" },
    { username: "jana", password: "kočka" },
    { username: "zdenda", password: "špaček" },
    { username: "tonda", password: "čáp" },
  ];

  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = nameInput.value.toLowerCase();
    const password = passwordInput.value;

    const validLogin = loginInfo.some(
      (info) => info.username === username && info.password === password
    );

    if (validLogin) {
      loginForm.style.display = "none";
      container.style.display = "block";
      container.style.pointerEvents = "";
      container1.style.opacity = 0;
      container1.style.zIndex = -1000;
      container.style.opacity = 1;
    } else {
      alert("Invalid username or password");
    }
  });
}
