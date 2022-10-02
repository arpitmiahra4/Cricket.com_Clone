let res = document.getElementById("res");
let state = document.getElementById("state");
let user = JSON.parse(localStorage.getItem("users")) || {};
let submit = document.getElementById("submit");
let rd_link = document.getElementById("rd-link");
let success = document.getElementById("success");
submit.addEventListener("click", () => {
  
    email1= document.getElementById("email").value;
    password1= document.getElementById("password").value;
  
  if (email1 == "" || password1 == "") {
    success.style.display = "flex";
    state.textContent = "Error!";
    state.style.color = "red";
    res.textContent = "Please fill all the fields";
    rd_link.href = "signin.html";
    rd_link.textContent = "Retry";
    return;
  }
 
  if (email1!=user.email || password1!=user.password) {
    success.style.display = "flex";
    state.textContent = "Error!";
    state.style.color = "red";
    res.textContent = "Wrong Credentials";
    rd_link.href = "signin.html";
    rd_link.textContent = "Retry";
  } else {
    success.style.display = "flex";
    state.textContent = "Success!";
    state.style.color = "Green";
    res.textContent = "Your have been successfuly logged in";
    rd_link.href = "../index.html";
    rd_link.textContent = "Continue";
  }
}); 