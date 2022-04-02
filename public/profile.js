
const currentUser = JSON.parse(localStorage.getItem("user"))

const name = document.querySelector(".inputName");
const dob = document.querySelector(".inputDate");
const nationality = document.querySelector(".inputNationality");
const education = document.querySelector(".inputEducation");
const work = document.querySelector(".inputWork");
const phone = document.querySelector(".inputNumber");
const email = document.querySelector(".inputEmail");
const sex = document.querySelector(".inputSex");
const ietls = document.querySelector(".inputIelts");
const travel = document.querySelector(".inputTravel");
const passportNo = document.querySelector(".inputPassNo");
const password = document.querySelector(".inputPassword");
const cvPreview = document.querySelector(".cvPreview");
const passPreview = document.querySelector(".passPreview");
const eduPreview = document.querySelector(".eduPreview");

name.innerHTML = currentUser.name
dob.innerHTML = currentUser.dob
nationality.innerHTML = currentUser.nationality
education.innerHTML = currentUser.education
work.innerHTML = currentUser.work
phone.innerHTML = currentUser.phone
email.innerHTML = currentUser.email
sex.innerHTML = currentUser.sex
ietls.innerHTML = currentUser.ietls
travel.innerHTML = currentUser.travel
passportNo.innerHTML = currentUser.passportNo

currentUser.passPortImg.map((img) => {
    
  const image = document.createElement("img");
  image.src = img;
  image.className = "previewImg";
   passPreview.appendChild(image);

});

currentUser.cvImg.map((img) => {

  const image = document.createElement("img");
  image.src = img;
  image.className = "previewImg";
  cvPreview.appendChild(image);

});

currentUser.educationImg.map((img) => {

  const image = document.createElement("img");
  image.src = img;
  image.className = "previewImg";
  eduPreview.appendChild(image);

});














