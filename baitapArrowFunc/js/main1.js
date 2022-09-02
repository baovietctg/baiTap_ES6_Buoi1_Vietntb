//Bài 1 - Đổi màu ngôi nhà

const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

let showButton = () => {
    let content = "";
    colorList.map((color,index) => {
     if(index == 0){
         content += `
             <button class="color-button ${color} active" onclick="changeColor('${color}')" ></button>
         `;
     }else{
         content += `
             <button class="color-button ${color}" onclick="changeColor('${color}')" ></button>
         `;
     }
     })
     document.querySelector("#colorContainer").innerHTML = content;
 }
 showButton();

 let changeColor = (color) => {

    let btn = document.querySelectorAll(".color-button");
    for (let i = 0; i < btn.length; i++) {
       btn[i].classList.remove("active");
    }
    document.querySelector(`.${color}`).className = `color-button ${color} active`;
    document.getElementById("house").className = `house ${color}`;
}