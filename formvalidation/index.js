let form = document.getElementById("form");
let username = document.getElementById("uname");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let mobile = document.getElementById("mobile");
let email = document.getElementById("email");
let checkbox = document.getElementById("check");

let isusername = false;
let ispassword = false;
let iscpassword = false;
let ismobile = false;
let isemail = false;
let ischeckbox = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});
function validation() {
  isusername = false;
  isemail = false;
  ispassword = false;
  iscpassword = false;
  ismobile = false;

  ischeckbox = false;
  console.log("hello validation function");
  checkname();
  checkmobile();
  checkemail();
  checkpassword();
  confirmpassword();
  checkboxchecker();

  if (
    isusername &&
    isemail &&
    ismobile &&
    ispassword &&
    iscpassword &&
    ischeckbox
  ) {
    form.submit();
  }
}
function checkname() {
  if (username.value.trim() == "") {
    seterror(username, "enter something");
  } else if (username.value.trim().length <= 3) {
    seterror(username, "username should be greater than 3 letters");
  } else {
    setsuccess(username);
    isusername = true;
  }
}
function checkmobile() {
  var regx = /^[6-9][0-9]{9}$/;
  if (mobile.value.trim() == "") {
    seterror(mobile, "enter something");
  } else if (!regx.test(mobile.value.trim())) {
    seterror(mobile, "enter valid mobile number");
  } else {
    setsuccess(mobile);
    ismobile = true;
  }
}
function checkemail() {
  var regx =
    /^([a-z A-Z 0-9 \- \_]+)@([A-Z a-z]+)\.([a-z]{2,5})(\.)?([a-z]{2,5})?$/;
  if (email.value.trim() == "") {
    seterror(email, "enter something");
  } else if (!regx.test(email.value.trim())) {
    seterror(email, "enter valid email address");
  } else {
    setsuccess(email);
    isemail = true;
  }
}
function checkpassword() {
  if (password.value.trim() == "") {
    seterror(password, "enter something");
  } else if (password.value.trim().length < 6) {
    seterror(password, "password should contain min 6 characters");
  } else if (!password.value.trim().match(/[A-Z]/)) {
    seterror(password, "password should contain atleast one uppercase");
  } else if (!password.value.trim().match(/[a-z]/)) {
    seterror(password, "password should contain atleast one lowercase");
  } else if (!password.value.trim().match(/[0-9]/)) {
    seterror(password, "password should contain atleast one number");
  } else if (!password.value.trim().match(/[\!\@\#\$\%\^\&\*\_\+]/)) {
    seterror(password, "password should contain atleast one special char");
  } else {
    setsuccess(password);
    ispassword = true;
  }
}

function confirmpassword() {
  if (cpassword.value.trim() == "") {
    seterror(cpassword, "enter something");
  } else if (cpassword.value.trim() != password.value.trim()) {
    seterror(cpassword, "password does not matched");
  } else {
    setsuccess(cpassword);
    iscpassword = true;
  }
}
function checkboxchecker() {
  console.log(checkbox.checked);
  if (!checkbox.checked) {
    checkbox.parentElement.querySelector("small").style.visibility = "visible";
  } else {
    checkbox.parentElement.querySelector("small").style.visibility = "hidden";
    ischeckbox = true;
  }
}
function seterror(input, msg) {
  let parent = input.parentElement;
  parent.querySelector("small").innerText = msg;
  parent.classList.add("error");
  parent.classList.remove("success");
}
function setsuccess(input) {
  let parent = input.parentElement;
  parent.classList.add("success");
  parent.classList.remove("error");
}
