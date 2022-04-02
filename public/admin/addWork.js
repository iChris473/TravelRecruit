
const noPicture = document.querySelector(".noPicture")
const withPicture = document.querySelector(".withPicture")
const picImg = document.querySelector(".picImg")
const noPicInput = document.querySelector(".noPicInput")
const picInput = document.querySelector(".picInput")
const label = document.querySelector(".label")
const picLabel = document.querySelector(".picLabel")

label.addEventListener("click", function clickInput(){
    noPicture.click()
})

picLabel.addEventListener("click", function clickInput(){
    withPicture.click()
})

noPicInput.addEventListener("change", function displayImage(){
    noPicture.classList.add("hidden")
    withPicture.classList.remove("hidden")
    picImg.src = URL.createObjectURL(noPicInput.files[0])

})

picInput.addEventListener("change", function displayImage(){
    noPicture.classList.add("hidden")
    withPicture.classList.remove("hidden")
    picImg.src = URL.createObjectURL(picInput.files[0])

})





