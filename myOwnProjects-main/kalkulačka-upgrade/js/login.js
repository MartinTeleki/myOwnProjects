// login.js

export class LoginManager {
    constructor() {
      this.labels = document.querySelectorAll(".form-control-1 label");
      this.loginButton = document.querySelector(".btn-login");
      this.nameInput = document.querySelector("#name");
      this.passwordInput = document.querySelector("#password");
      this.loginForm = document.querySelector(".form-control-1");
      this.container = document.querySelector(".container");
      this.container1 = document.querySelector(".container-1");
      this.navLogin = document.querySelector(".nav-login");
  
      this.loginInfo = [
        { username: "martin", password: "pes" },
        { username: "jana", password: "kočka" },
        { username: "zdenda", password: "špaček" },
        { username: "tonda", password: "čáp" },
      ];
  
      this.labels.forEach((label) => {
        label.innerHTML = label.textContent
          .split("")
          .map(
            (letter, index) =>
              `<span style="transition-delay:${index * 70}ms">${letter}</span>`
          )
          .join("");
      });
  
      this.loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = this.nameInput.value.toLowerCase();
        const password = this.passwordInput.value;
  
        const validLogin = this.loginInfo.some(
          (info) => info.username === username && info.password === password
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
      });
    }
  }
  