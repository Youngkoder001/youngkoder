 const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
 const loginErrorMsg = document.getElementById("login-error-msg");

 loginButton.addEventListener("click", (e) => {
     e.preventDefault();
     console.log("jghvgf")
     const username = loginForm.username.value;
     const password = loginForm.password.value;

     if (username === "user" && password === "web_dev") {
         alert("You have successfully logged in.");
         location.reload();
     } else {
         loginErrorMsg.style.opacity = 1;
     }
 })
 var people = {
    username: "sam",
    password: "",
 }

// function getInfo() {
//     var username = document.getElementById("username").value
//     var password = document.getElementById("password").value

//     for (i = 0; i < people.length; i++)
//         if (username == people[i].username && password == people[i].
//             password
//         ) {
//             console.log(username + "is logged in");

//         }
//         console.log("incorrect Username or password");
//     };