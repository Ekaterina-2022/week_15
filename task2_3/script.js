var errorMessage = document.getElementById("errorBanner");

function check() {
  let first_name = document.getElementById("firstName");
  let last_name = document.getElementById("lastName");
  let yourCountry = document.getElementById("country");
  let yourJob = document.getElementById("job");
  let yourSchool = document.getElementById("school");
  let yourEmail = document.getElementById("eadress");
  let yourPassword = document.getElementById("password");

  if (
    first_name.value == "" ||
    last_name.value == "" ||
    yourCountry.value == "" ||
    yourJob.value == "" ||
    yourSchool.value == "" ||
    yourEmail.value == "" ||
    yourPassword.value == ""
  ) {
    document.getElementById("errorBanner").innerHTML =
      "Please fill in all fields below<br>";
    errorMessage.classList.add("banner-error");
  } else if (yourPassword.value.length < 8) {
    yourPassword.style.backgroundColor = "red";
  } else {
    alert(`Welcome, ${first_name.value}!`);
  }
}

let page = document.querySelector("#containerMain");

function changeTheme(theme) {
  page.classList.remove("white", "black", "yellow");
  page.classList.add(`${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#theme").addEventListener("change", function () {
    changeTheme(this.value);
  });
});
