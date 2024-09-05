const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("submit");
console.log(btn);

btn.addEventListener("click", function (event) {
  const student = {
    email: email.value,
    password: password.value,
  };
  console.log(student);
  const testHuman = new Human({ email: email.value });
  console.log({ testHuman });
  authenticate(email.value, password.value);
});

window.localStorage.setItem(
  "auth",
  JSON.stringify({
    email: "admin@gmail.com",
    password: "password",
  })
);

function authenticate(email, password) {
  let credentials = window.localStorage.getItem("auth");
  credentials = JSON.parse(credentials);
  let isAuthenticated = false;
  if (email.length >= 10) {
    // is same
    if (credentials.email === email) {
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
    }
  } else {
    alert("Invalid email");
    return;
  }

  if (password.length >= 8) {
    // is same
    if (credentials.password === password) {
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
    }
  } else {
    alert("unauthorized");
    return;
  }

  if (!isAuthenticated) {
    alert("unauthorized");
    return;
  } else {
    window.localStorage.setItem("authStatus", isAuthenticated);
    window.location.href = "http://127.0.0.1:5500/jamb-form/registration.html";
  }
}
``;
