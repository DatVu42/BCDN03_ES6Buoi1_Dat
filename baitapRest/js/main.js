/**
 * Tính điểm TB của cả 2 khối lớp
 * 
 * + Chỉ dc viết 1 hàm tính điểm cho cả 2 khối lớp
 */
 
let tinhTB = (...diem) => {
    console.log(diem); // mảng điểm
    let tong = 0;
    diem.map((item) => {
        tong += item
    });

    return tong / diem.length;
}

let layDiemKhoi1 = () => {
    let toan = document.querySelector("#inpToan").value;
    let ly = document.querySelector("#inpLy").value;
    let hoa = document.querySelector("#inpHoa").value;
    // console.log(toan, ly, hoa);
    let dtb = tinhTB(Number(toan), Number(ly), Number(hoa));
    // console.log(dtb);
    document.querySelector("#tbKhoi1").innerHTML = dtb;
}
document.querySelector("#btnKhoi1").onclick = layDiemKhoi1;

let layDiemKhoi2 = () => {
    let van = document.querySelector("#inpVan").value;
    let su = document.querySelector("#inpSu").value;
    let dia = document.querySelector("#inpDia").value;
    let anh = document.querySelector("#inpEnglish").value;
    // console.log(van, su, dia, anh)
    let dtb = tinhTB(Number(van), Number(su), Number(dia), Number(anh));
    document.querySelector("#tbKhoi2").innerHTML = dtb;
}
document.querySelector("#btnKhoi2").onclick = layDiemKhoi2;