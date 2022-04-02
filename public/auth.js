

const profile = document.querySelector(".profile")
const sign = document.querySelector(".signup")

const user = JSON.parse(localStorage.getItem("user"))

if(user){
    profile.style.display = "block"
    sign.style.display = "none"
} else {
    profile.style.display = "none"
    sign.style.display = "block"
}