//Bài 3: Hover text
let hover = () => {
    let str = "Hover Me!"
    let content = "";
    let str2 = [...str];
    str2.map((zoom) => { 
        content +=`
            <span>${zoom}</span>
        `
    });
   document.querySelector(".heading").innerHTML = content;

}
hover();