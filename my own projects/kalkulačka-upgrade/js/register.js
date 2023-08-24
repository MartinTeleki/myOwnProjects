export class RegistrationManager {
  constructor() {
    this.container = document.querySelector(".container");
    this.container1 = document.querySelector(".container-1");
    this.container2 = document.querySelector(".container-2");
    this.navLogin = document.querySelector(".nav-login");
    this.navRegister = document.querySelector(".nav-register");
    this.labels2 = document.querySelectorAll(".form-control-2 label");
    this.registerName = document.querySelector("#register-name");
    this.registerPassword = document.querySelector("#register-password");
    this.btnRegister = document.querySelector(".btn-register");
    this.historyContainer = document.querySelector(".history");
    this.registrationInfo = [];

    this.showPasswordCheckbox = document.querySelector(
      "#show-password-register"
    );
    this.passwordInput = document.querySelector("#register-password");

    this.navLogin.addEventListener("click", (e) => {
      e.preventDefault();
      this.historyContainer.style.display = "none";
      this.container2.style.display = "none";
      this.container1.style.display = "block";
    });

    this.navRegister.addEventListener("click", (e) => {
      e.preventDefault();
      this.historyContainer.style.display = "none";
      this.container.style.display = "none";
      this.container1.style.display = "none";
      this.container2.style.display = "block";
    });

    this.labels2.forEach((label) => {
      label.innerHTML = label.textContent
        .split("")
        .map(
          (letter, index) =>
            `<span style="transition-delay:${index * 70}ms">${letter}</span>`
        )
        .join("");
    });

    this.showPasswordCheckbox.addEventListener("change", () => {
      if (this.showPasswordCheckbox.checked) {
        this.passwordInput.type = "text";
      } else {
        this.passwordInput.type = "password";
      }
    });

    this.loadRegistrationInfoFromStorage();
    this.btnRegister.addEventListener("click", this.register.bind(this));
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
    this.registrationInfo.push(userData);

    this.registerName.value = "";
    this.registerPassword.value = "";
    this.container.style.display = "none";
    this.container2.style.display = "none";
    this.historyContainer.style.display = "none";
    this.container1.style.display = "block";

    localStorage.setItem(
      "registrationInfo",
      JSON.stringify(this.registrationInfo)
    );
  }

  isUsernameTaken(username) {
    return this.registrationInfo.some((info) => info.username === username);
  }

  loadRegistrationInfoFromStorage() {
    const storedRegistrationInfo = localStorage.getItem("registrationInfo");
    if (storedRegistrationInfo) {
      this.registrationInfo = JSON.parse(storedRegistrationInfo);
    }
  }
}
