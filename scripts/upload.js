


const hiddenInput = document.querySelector('.get-input');
document.querySelector('.upload-btn').addEventListener('click', function () {
    hiddenInput.click();
});


const label_Name = document.querySelector('.label');
let setLabel = "No File(s) choose";
let flag = 0;
label_Name.textContent = setLabel;
label_Name.title = setLabel;



function function_1(file_input) {
    let files = file_input.files;
    file_name = (files[0].name);
    label_Name.textContent = `List of Selected Files:`;


    for (let i = 0; i < files.length; i++) {
        file_name = files[i].name;
        label_Name.textContent = label_Name.textContent + "\n\n" + (i + 1) + ") " + file_name;
    }

}

let upload = document.querySelector(".upload");
upload.onclick = myFun;
// let change = document.querySelector(".change");
// change.href = "Quiz(empty).html"


function myFun() {
    // alert("Uploaded");
    window.confirm("Are you sure? You want to upload?");
    window.open("http://127.0.0.1:5500/Suucess.html", "Name", "left=100,top=100,width=500,height=500")
}


// ------For update------

// if (label_Name.textContent == setLabel) {
//     let upload = document.querySelector(".upload");
//     upload.onclick = myFun2;

//     let change = document.querySelector(".change");
//     change.href = "Quiz(empty).html"
// }
// else {

//     upload.onclick = myFun;
//     // let change = document.querySelector(".change");
//     // change.href = "Quiz(empty).html";
// }






// function myFun2() {
//     alert("No file selected");
// }

