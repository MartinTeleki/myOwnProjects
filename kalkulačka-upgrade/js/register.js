export class RegistrationManager {
  constructor() {
    this.container1 = document.querySelector(".container-1");
    this.container2 = document.querySelector(".container-2");
    this.navLogin = document.querySelector(".nav-login");
    this.navRegister = document.querySelector(".nav-register");
    this.labels2 = document.querySelectorAll(".form-control-2 label");
    this.registerName = document.querySelector("#register-name");
    this.registerPassword = document.querySelector("#register-password");
    this.btnRegister = document.querySelector(".btn-register");
    this.registrationInfo = [];
    console.log(this.registrationInfo);

    this.navLogin.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("pes");
      this.container2.style.display = "none";
      this.container1.style.display = "block";
    });

    this.navRegister.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("pes");
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

    // this.btnRegister.addEventListener("click", this.register.bind(this));
  }

  // register(e) {
  //   e.preventDefault();

  //   const usernameData = this.registerName.value.toLowerCase();
  //   const passwordData = this.registerPassword.value;

  //   const userData = { username: usernameData, password: passwordData };
  //   this.registrationInfo.push(userData);

  //   this.registerName.value = "";
  //   this.registerPassword.value = "";

  //   //console.log(username, password);
  // }
}
