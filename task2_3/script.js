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

function changeMe() {
  let mainTheme = document.getElementById("containerMain");

  switch (opt) {
    case "white":
      mainTheme.style.backgroundColor = "#fff";
      break;
    case "black":
      mainTheme.style.backgroundColor = "#414f5a";
      break;
    case "yellow":
      mainTheme.style.backgroundColor = "gold";
      break;
  }
}
