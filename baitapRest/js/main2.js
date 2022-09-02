//Bài 2 - tính điểm trung bình
let tinhDiemTB = (...scores) => {
    let tongDiem = 0;
    let diemTB = 0;
    let count = 0;
    scores.map((number) => { 
        tongDiem += number;
        count++;
        diemTB = tongDiem/count;
     })
     return diemTB.toFixed(2);
}

let tinhDiemTB1 = () => {
    let toan = Number(document.getElementById("inpToan").value);
    let ly = Number(document.getElementById("inpLy").value);
    let hoa = Number(document.getElementById("inpHoa").value);
    let diemTB = tinhDiemTB(toan, ly, hoa);
    document.getElementById("tbKhoi1").innerHTML = diemTB;
}
document.getElementById("btnKhoi1").onclick = tinhDiemTB1;

let tinhDiemTB2 = () => {
    let van = Number(document.getElementById("inpVan").value);
    let su = Number(document.getElementById("inpSu").value);
    let dia = Number(document.getElementById("inpDia").value);
    let english = Number(document.getElementById("inpEnglish").value);
    let diemTB = tinhDiemTB(van, su, dia, english);
    document.getElementById("tbKhoi2").innerHTML = diemTB;
}
document.getElementById("btnKhoi2").onclick = tinhDiemTB2;