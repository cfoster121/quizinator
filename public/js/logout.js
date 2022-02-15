async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "content-type": "application/json" },
  });

//If user logs out, return to home page
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

//Logout button evnt listener
document.querySelector("#logout-btn").addEventListener("click", logout);