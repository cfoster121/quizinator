async function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  //make sure they are filled
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(response, " Logged in successfully!");
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

//handle signup/register
async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  //check to make sure all fields have values
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(response);
    } else {
      alert(response.statusText);
    }
    //then we send in a request to log into the webpage
    const responseTwo = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (responseTwo.ok) {
      console.log(response, " Logged in successfully!");
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}
//Add event listeners to the buttons
document
  .querySelector("#login-btn")
  .addEventListener("click", loginFormHandler);

document
  .querySelector("#signup-btn")
  .addEventListener("click", signupFormHandler);