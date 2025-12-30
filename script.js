
function login() {
    let emails = document.getElementById("emailss").value
     let password = document.getElementById("passwordss").value
     let checkemail = document.getElementById("checkemail")
      let checkpassword = document.getElementById("checkpassword")

      let valids = true
      if(emails === ""){
        checkemail.textContent = "Email is required"
        checkemail.style.color = "red"
        valids = false
      }
      else{
        checkemail.textContent = ""
      }
      if(password === ""){
        checkpassword.textContent = "Password is required"
        checkpassword.style.color = "red"
        valids = false
      }
      else{
        checkpassword.textContent = ""
      }
      if (valids) {
        alert("Login Successfully")
      }


}
function signups() {
    let signup = document.getElementById("signup")
    let names = document.getElementById("fullname").value
    let emails = document.getElementById("email").value
    let passwords = document.getElementById("password").value
    let nameresult = document.getElementById("nameresult")
    let emailresult = document.getElementById("emailresult")
    let passwordresult = document.getElementById("passwordresult")
    let isvalid = true

    if (names === "") {
        nameresult.textContent = "Full Name is required"
        nameresult.style.color = "red";
        isvalid = false
    }
    else{
            nameresult.textContent = ""
        }

    if (emails === "") {
        emailresult.textContent = "Email is required"
        emailresult.style.color = "red";
        isvalid = false
    }
    else{
            emailresult.textContent = ""
        }

    
     if (passwords === "") {
        passwordresult.textContent = "Password is required"
        passwordresult.style.color = "red";
        isvalid = false
    }
    else{
            passwordresult.textContent = ""
        }
        if(isvalid) {
            alert("Sign up successfully")
        }
}


