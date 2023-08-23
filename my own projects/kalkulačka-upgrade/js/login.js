export class LoginManager {
  constructor() {
    this.labels = document.querySelectorAll(".form-control-1 label");
    this.loginButton = document.querySelector(".btn-login");
    this.nameInput = document.querySelector("#name");
    this.passwordInput = document.querySelector("#password");
    this.loginForm = document.querySelector(".form-control-1");
    this.container = document.querySelector(".container");
    this.container1 = document.querySelector(".container-1");
    this.container2 = document.querySelector(".container-2");
    this.navLogin = document.querySelector(".nav-login");
    this.btnRegister = document.querySelector(".btn-register");
    this.registerName = document.querySelector("#register-name");
    this.registerPassword = document.querySelector("#register-password");

    this.loginInfo = [];
    this.loadLoginInfoFromStorage();

    this.labels.forEach((label) => {
      label.innerHTML = label.textContent
        .split("")
        .map(
          (letter, index) =>
            `<span style="transition-delay:${index * 70}ms">${letter}</span>`
        )
        .join("");
    });

    this.loginButton.addEventListener("click", this.login.bind(this));
    this.btnRegister.addEventListener("click", this.register.bind(this));
  }

  login(e) {
    e.preventDefault();
    const username = this.nameInput.value.toLowerCase();
    const password = this.passwordInput.value;

    const validLogin = this.loginInfo.some(
      (info) =>
        info.username === username &&
        info.password === password &&
        info.username !== "" &&
        info.password !== ""
    );

    if (validLogin) {
      this.loginForm.style.display = "none";
      this.container.style.display = "block";
      this.container.style.pointerEvents = "";
      this.container1.style.opacity = 0;
      this.container1.style.zIndex = -1000;
      this.container.style.opacity = 1;
    } else {
      alert("Invalid username or password");
    }
  }

  register(e) {
    e.preventDefault();

    const usernameData = this.registerName.value.toLowerCase();
    const passwordData = this.registerPassword.value;

    const userData = { username: usernameData, password: passwordData };
    this.loginInfo.push(userData);

    if (
      usernameData.includes(" ") ||
      passwordData.includes(" ") ||
      (usernameData.includes(" ") && passwordData.includes(" "))
    ) {
      alert("Žádné mezery pls :).");
    } else {
      //console.log("Data before localStorage:", this.loginInfo);

      this.registerName.value = "";
      this.registerPassword.value = "";
      this.container2.style.display = "none";
      this.container1.style.display = "block";

      localStorage.setItem("loginInfo", JSON.stringify(this.loginInfo));
    }
  }

  loadLoginInfoFromStorage() {
    const storedLoginInfo = localStorage.getItem("loginInfo");
    if (storedLoginInfo) {
      this.loginInfo = JSON.parse(storedLoginInfo);
    }
  }
}
