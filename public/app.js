
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmsKYLwuwoWbmrRmHKFoQclW63TmFH8Jk",
  authDomain: "perfume-store-ca0eb.firebaseapp.com",
  projectId: "perfume-store-ca0eb",
  storageBucket: "perfume-store-ca0eb.appspot.com",
  messagingSenderId: "117600940233",
  appId: "1:117600940233:web:bd3d621680be87aea0dd18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage =  getStorage(app)

// other stuffs

const cv = document.querySelector(".CVInput");
const eduInput = document.querySelector(".eduInput");
const passportInput = document.querySelector(".passportInput");
const cvPreview = document.querySelector(".cvPreview");
const passPreview = document.querySelector(".passPreview");
const eduPreview = document.querySelector(".eduPreview");

const deleteEdu = document.querySelector(".deleteEdu");
const deletePass = document.querySelector(".deletePass");
const deleteCv = document.querySelector(".deleteCv");

deleteCv.addEventListener("click", DeleteCv);
deletePass.addEventListener("click", DeletePass);
deleteEdu.addEventListener("click", DeleteEdu);

let allImages = [];
let cvImages = [];
let passImages = [];
let eduImages = [];

function DeleteCv() {
  cvPreview.innerHTML = "Add Files";
  deleteCv.style.display = "none";
  allImages.filter((img) => cvImages.some((cv) => cv.name != img.name));
  cvImages = [];
}

function DeletePass() {
  passPreview.innerHTML = "Add Files";
  deletePass.style.display = "none";
  passImages = [];
}

function DeleteEdu() {
  eduPreview.innerHTML = "Add Files";
  deleteEdu.style.display = "none";
  eduImages = [];
}

cv.addEventListener("change", updateCV);
eduInput.addEventListener("change", updateEdu);
passportInput.addEventListener("change", updatePass);

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + "KB";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + "MB";
  }
}

function updateCV() {
  cvImages.push(cv.files[0]);
  // allImages.map(img => {
  //   cvImages.map(cv => {
  //     if(cv.name == img.name){
  //       allImages.filter(img)
  //     }
  //   })
  // })
  const cvFiles = cv.files;
  if (cvFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    cvPreview.appendChild(para);
  } else {
    const list = document.createElement("div");
    list.className = "previewList";
    cvPreview.appendChild(list);

    for (const file of cvFiles) {
      const listItem = document.createElement("div");
      if (validFileType(file)) {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.className = "previewImg";
        listItem.appendChild(image);
        listItem.className = file.name + file.size;
      } else {
        const para = document.createElement("p");
        para.className = "para";
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;

        list.appendChild(para);
      }

      list.appendChild(listItem);
      deleteCv.style.display = "block";
    }
  }
}

function updateEdu() {
  eduImages.push(eduInput.files[0]);
  console.log(allImages);
  const eduFiles = eduInput.files;
  if (eduInput.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    eduPreview.appendChild(para);
  } else {
    const list = document.createElement("div");
    eduPreview.appendChild(list);

    for (const file of eduFiles) {
      const listItem = document.createElement("div");
      if (validFileType(file)) {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.className = "previewImg";
        listItem.appendChild(image);
        listItem.className = file.name + file.size;
      } else {
        const para = document.createElement("p");
        para.className = "para";
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;

        list.appendChild(para);
      }

      list.appendChild(listItem);
      deleteEdu.style.display = "block";
    }
  }
}

function updatePass() {
  passImages.push(passportInput.files[0]);
  const passportFiles = passportInput.files;
  if (passportInput.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    passPreview.appendChild(para);
  } else {
    const list = document.createElement("div");
    passPreview.appendChild(list);

    for (const file of passportFiles) {
      const listItem = document.createElement("div");

      if (validFileType(file)) {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.className = "previewImg";
        listItem.appendChild(image);
        listItem.className = file.name + file.size;
      } else {
        const para = document.createElement("p");
        para.className = "para";
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        list.appendChild(listItem);
      }
      list.appendChild(listItem);
      deletePass.style.display = "block";
    }
  }
}

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
// const inputCv = document.querySelector(".inputCv")
const form = document.querySelector(".registerForm");
const submit = document.querySelector(".submit");

const submitForm = e => {

  submit.innerHTML = "Loading..."
  e.preventDefault();

  const newUser = {
    name: name.value,
    email: email.value,
    password: password.value,
    nationality: nationality.value,
    dob: dob.value,
    education: education.value,
    work: work.value,
    phone: phone.value,
    sex: sex.value,
    travel: travel.value,
    ietls: ietls.value,
    passportNo: passportNo.value,
    // passPortImg: passportInput,
    // cvImg: cvPreview,
    // educationImg: eduPreview,
  };

  let passPortImages = []
  let certImages = []
  let educationImages = []
  allImages = [];
  allImages.push(...cvImages, ...eduImages, ...passImages);

    const postcvImg = () => {
      return new Promise(resolve => {
        cvImages.forEach(async (img) => {
          const firebaseImageRef = ref(storage, `${img.name}`);
          const metadata = {
            contentType: "image/jpeg",
          };
          // Upload the file and metadata
          try {
            // const uploadTask = uploadBytes(storageRef, file, metadata)
            await uploadBytes(firebaseImageRef, img, metadata).then(
              async (snapshot) => {
                const downloadURL = await getDownloadURL(firebaseImageRef);
                certImages.push(downloadURL);
                newUser.cvImg = certImages;
                console.log(newUser)
                resolve();
              }
            );
          } catch (err) {
            console.log(err);
            submit.innerHTML = "Submit"
            return
          }
        }
        )
      }
      )
      
    } 
    const posteduImg = () => {
      return new Promise(resolve => {
        eduImages.forEach(async (img) => {
          const firebaseImageRef = ref(storage, `${img.name}`);
          const metadata = {
            contentType: "image/jpeg",
          };
          // Upload the file and metadata
          try {
            // const uploadTask = uploadBytes(storageRef, file, metadata)
            await uploadBytes(firebaseImageRef, img, metadata).then(
              async (snapshot) => {
                const downloadURL = await getDownloadURL(firebaseImageRef);
                educationImages.push(downloadURL);
                newUser.educationImg = educationImages;
                console.log(newUser)
                resolve();
              }
            );
          } catch (err) {
            console.log(err);
            submit.innerHTML = "Submit"
            return
          }
        })
      }
      )
      
    } 
    const postPassImg = () => {
      return new Promise(resolve => {
        passImages.forEach(async (img) => {
          const firebaseImageRef = ref(storage, `${img.name}`);
          const metadata = {
            contentType: "image/jpeg",
          };
          // Upload the file and metadata
          try {
            // const uploadTask = uploadBytes(storageRef, file, metadata)
            await uploadBytes(firebaseImageRef, img, metadata).then(
              async (snapshot) => {
                const downloadURL = await getDownloadURL(firebaseImageRef);
                passPortImages.push(downloadURL);
                newUser.passPortImg = passPortImages;
                console.log(newUser)
                resolve();
              }
            );
          } catch (err) {
            console.log(err);
            submit.innerHTML = "Submit"
            return
          }
        })
      }
        )
      
    } 
       

  postcvImg()
  .then(() => posteduImg())
  .then(() => postPassImg())
  .then(() => {
    fetch("http://localhost:8800/api/user/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(function (data) {
        console.log(data);
        submit.innerHTML = "Submit"
        window.location.href = '/login'
      })
      .catch(function (error) {
        // console.log(error.response)
        window.alert("Something went wrong.", error);
        submit.innerHTML = "Submit"
      })
  }
  )


};

form.addEventListener("submit", submitForm);
 