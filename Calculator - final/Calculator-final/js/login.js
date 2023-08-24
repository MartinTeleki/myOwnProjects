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
    this.inputText = document.querySelector(".input--text-1");
    this.btnLogout = document.querySelector(".btn--logout");
    this.historyContainer = document.querySelector(".history");
    this.welcomeText = document.querySelector(".welcome-message");
    this.showPasswordCheckbox = document.querySelector("#show-password-login");
    this.welcomeMessage = document.querySelector(".welcome-message");
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
    this.btnLogout.addEventListener("click", this.logout.bind(this));

    this.showPasswordCheckbox.addEventListener("change", () => {
      if (this.showPasswordCheckbox.checked) {
        this.passwordInput.type = "text";
      } else {
        this.passwordInput.type = "password";
      }
    });
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
      this.container1.style.display = "none";
      this.container.style.display = "block";
      this.container.style.pointerEvents = "";
      this.container1.style.opacity = 0;
      this.container.style.opacity = 1;
      this.welcomeMessage.style.display = "block";
      this.btnLogout.style.display = "block";
      this.welcomeText.innerHTML = `Welcome <br> ${username.toUpperCase()}`;
    } else {
      alert("Invalid username or password");
    }
  }

  register(e) {
    e.preventDefault();

    const usernameData = this.registerName.value.toLowerCase();
    const passwordData = this.registerPassword.value;

    if (this.isUsernameTaken(usernameData)) {
      alert("This username is already taken.");
      return;
    }

    const userData = { username: usernameData, password: passwordData };

    if (!usernameData || !passwordData) {
      alert("Please fill in both username and password.");
      return;
    }

    if (
      usernameData.includes(" ") ||
      passwordData.includes(" ") ||
      (usernameData.includes(" ") && passwordData.includes(" "))
    ) {
      alert("No spaces allowed :).");
      return;
    }

    if (usernameData.length < 5 || usernameData.length > 12) {
      alert("Username must be between 5 and 12 characters.");
      return;
    }

    if (passwordData.length < 5 || passwordData.length > 12) {
      alert("Password must be between 5 and 12 characters.");
      return;
    }

    this.loginInfo.push(userData);

    this.registerName.value = "";
    this.registerPassword.value = "";
    this.container.style.display = "none";
    this.container2.style.display = "none";
    this.historyContainer.style.display = "none";
    this.container1.style.display = "block";

    localStorage.setItem("loginInfo", JSON.stringify(this.loginInfo));
  }

  loadLoginInfoFromStorage() {
    const storedLoginInfo = localStorage.getItem("loginInfo");
    if (storedLoginInfo) {
      this.loginInfo = JSON.parse(storedLoginInfo);
    }
  }

  logout() {
    this.container2.style.display = "none";
    this.container.style.display = "none";
    this.btnLogout.style.display = "none";
    this.historyContainer.style.display = "none";
    this.container1.style.display = "block";
    this.container1.style.opacity = "1";
    this.nameInput.value = "";
    this.passwordInput.value = "";
    this.welcomeText.textContent = "";
    this.welcomeMessage.style.display = "none";
  }

  isUsernameTaken(username) {
    return this.loginInfo.some((info) => info.username === username);
  }
}
