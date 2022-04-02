
const currentUser = JSON.parse(localStorage.getItem("user"))

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import {
    ref, getDownloadURL, uploadBytes, deleteObject, getStorage,
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

const name = document.querySelector(".inputName");
const dob = document.querySelector(".inputDate");
const nationality = document.querySelector(".inputNationality");
const mainNation = document.querySelector(".nationality");
const education = document.querySelector(".inputEducation");
const mainEdu = document.querySelector(".education");
const work = document.querySelector(".inputWork");
const phone = document.querySelector(".inputNumber");
const email = document.querySelector(".inputEmail");
const sex = document.querySelector(".inputSex");
const ietls = document.querySelector(".inputIelts");
const travel = document.querySelector(".inputTravel");
const passportNo = document.querySelector(".inputPassNo");
const cvPreview = document.querySelector(".cvPreview");
const passPreview = document.querySelector(".passPreview");
const eduPreview = document.querySelector(".eduPreview");
const cvInput = document.querySelector(".CVInput")
const passInput = document.querySelector(".passportInput")
const eduInput = document.querySelector(".eduInput")
const form = document.querySelector(".registerForm");
const update = document.querySelector(".submit");
const thisSex = document.querySelector(".thisSex");

name.defaultValue = currentUser.name
dob.defaultValue = currentUser.dob
nationality.innerHTML = currentUser.nationality
education.innerHTML = currentUser.education
work.defaultValue = currentUser.work
phone.defaultValue = currentUser.phone
email.defaultValue = currentUser.email
sex.defaultValue = currentUser.sex
ietls.defaultValue = currentUser.ietls
travel.defaultValue = currentUser.travel
passportNo.defaultValue = currentUser.passportNo
thisSex.defaultValue = currentUser.sex
thisSex.innerHTML = currentUser.sex

const deletedFiles = []
const newCvImg = []
const newPassImg = []
const newEduImg = []

// Add CV images to the dom
const addCv = () => {

        const div = document.createElement("div");
        const image = document.createElement("img");
        image.src = URL.createObjectURL(cvInput.files[0]);
        image.className = "previewImg";
        const deleteBtn = document.createElement("p");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "deleteBtn";
        div.appendChild(image);
        div.appendChild(deleteBtn);
        cvPreview.appendChild(div);
        newCvImg.push(cvInput.files[0])
        deleteBtn.onclick = () => {
            cvPreview.removeChild(div);
        };
}

cvInput.addEventListener("change", addCv)

// Add Passport Images to the DOM
const addPass = () => {

    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = URL.createObjectURL(passInput.files[0]);
    image.className = "previewImg";
    const deleteBtn = document.createElement("p");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "deleteBtn";
    div.appendChild(image);
    div.appendChild(deleteBtn);
    passPreview.appendChild(div);
    newPassImg.push(passInput.files[0])
    deleteBtn.onclick = () => {
        passPreview.removeChild(div);
    };
}

passInput.addEventListener("change", addPass)

// Add Passport Images to the DOM
const addEdu = () => {

    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = URL.createObjectURL(eduInput.files[0]);
    image.className = "previewImg";
    const deleteBtn = document.createElement("p");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "deleteBtn";
    div.appendChild(image);
    div.appendChild(deleteBtn);
    eduPreview.appendChild(div);
    newEduImg.push(eduInput.files[0])
    console.log(newEduImg)
    deleteBtn.onclick = () => {
        eduPreview.removeChild(div);
    };
}

eduInput.addEventListener("change", addEdu)

// Get Passport Images from local storage and display on the DOM
currentUser.passPortImg.map((img) => {
    
  const div = document.createElement("div")
  const image = document.createElement("img");
  image.src = img;
  image.className = "previewImg";
  const deleteBtn = document.createElement("p");
  deleteBtn.innerHTML = "Delete"
  deleteBtn.className = "deleteBtn"
  div.appendChild(image);
  div.appendChild(deleteBtn);
  passPreview.appendChild(div);

  deleteBtn.onclick = () => {

    deletedFiles.push(img)
    passPreview.removeChild(div)

}});

// Get CV Images and display on the DOM
currentUser.cvImg.map((img) => {

  const div = document.createElement("div")
  const image = document.createElement("img");
  image.src = img;
  image.className = "previewImg";
  const deleteBtn = document.createElement("p");
  deleteBtn.innerHTML = "Delete"
  deleteBtn.className = "deleteBtn"
  div.appendChild(image);
  div.appendChild(deleteBtn);
  cvPreview.appendChild(div);

  deleteBtn.onclick = () => {

    deletedFiles.push(img)
    cvPreview.removeChild(div)

}});

// Get Edu Images and Display on the DOM
currentUser.educationImg.map(img => {
    const div = document.createElement("div")
    const image = document.createElement("img");
    image.src = img;
    image.className = "previewImg";
    const deleteBtn = document.createElement("p");
    deleteBtn.innerHTML = "Delete"
    deleteBtn.className = "deleteBtn"
    div.appendChild(image);
    div.appendChild(deleteBtn);
    eduPreview.appendChild(div);
    deleteBtn.onclick = () => {

        deletedFiles.push(img)
      eduPreview.removeChild(div)
      console.log(deletedFiles)

}});

const updateAccount = async e => {
 
    e.preventDefault()
    update.innerHTML = "Updating..."

    let allImages = [...deletedFiles]
    let presentCV = currentUser.cvImg.filter(cv => !allImages.includes(cv))
    let presentPass = currentUser.passPortImg.filter(pass => !allImages.includes(pass))
    let presentEdu = currentUser.educationImg.filter(edu => !allImages.includes(edu))
    console.log(presentEdu)

  const newUser = {
    name: name.value,
    email: email.value,
    nationality: mainNation.value,
    dob: dob.value,
    education: mainEdu.value,
    work: work.value,
    phone: phone.value,
    travel: travel.value,
    ietls: ietls.value,
    passportNo: passportNo.value,
    sex: sex.value
};

    const deleteImg = () => {
      return new Promise((resolve) => {
        if(deletedFiles.length != 0){
            deletedFiles.forEach(async (img) => {
              // delete previous file
              const deleteRef = ref(storage, `${img}`);
              // Delete the file
              deleteObject(deleteRef)
                .then(() => {
                  // File deleted successfully
                  console.log("old picture deleted");
                   resolve();
                })
                .catch((error) => {
                  // Uh-oh, an error occurred!
                  console.log(error);
                  resolve();
                });
    
            });
        } else {
            resolve()    
        }
      });
    }; 

    const postcvImg = () => {
        return new Promise(resolve => {
          if(newCvImg.length != 0){
              newCvImg.forEach(async (img) => {
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
                     presentCV.push(downloadURL);
                     newUser.cvImg = presentCV;
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
          } else {
              resolve()
          }
        })
    }

    const postEduImg = () => {
        return new Promise(resolve => {
          if(newEduImg.length != 0){
              newEduImg.forEach(async (img) => {
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
                     presentEdu.push(downloadURL);
                     newUser.educationImg = presentEdu;
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
          } else {
              resolve()
          }
        })
    }

    const postPassImg = () => {
        return new Promise(resolve => {
          if(newPassImg.length != 0){
              newPassImg.forEach(async (img) => {
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
                     presentPass.push(downloadURL);
                     newUser.passPortImg = presentPass;
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
          } else {
              resolve()
          }
        })
    }

    deleteImg()
    .then(() => postcvImg())
    .then(() => postEduImg())
    .then(() => postPassImg())
    .then(() => {
      fetch(`http://localhost:8800/api/user/update/${currentUser._id}`, {
        method: "PUT",
        body: JSON.stringify(newUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `Bearer ${currentUser?.token}`
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
          localStorage.setItem("user", JSON.stringify({...data, token: currentUser.token}))
          update.innerHTML = "UPDATE"
          window.location.href = '/profile'

        })
        .catch(function (error) {
          // console.log(error.response)
          window.alert("Something went wrong.", error);
          update.innerHTML = "UPDATE"
        })
      })
        
  
}

form.addEventListener("submit", updateAccount)
