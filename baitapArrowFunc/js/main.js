/**
 * B1: Hiển thị danh sách bảng màu
 * B2: Tạo chức năng đổi màu khi click
 */

const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

let loadButton = () => {
    let buttonList = "";
    colorList.map((color, index) => {
        if (index == 0) {
            buttonList += `
                <button class="color-button ${color} active" 
                onclick="changeColor('${color}')"></button>
            `
        } else {
            buttonList += `
                <button class="color-button ${color}" 
                onclick="changeColor('${color}')"></button>
            `
        }
    });

    document.querySelector("#colorContainer").innerHTML = buttonList;
}

loadButton();

let changeColor = (color) => {
    document.querySelector("#house").className = `house ${color}`;
    changeActive(color);
}

let changeActive = (color) => {
    let btnNodelist = document.querySelectorAll(".color-button");
    for (let i = 0; i < btnNodelist.length; i++) {
        if (btnNodelist[i].classList.contains(color)) {
            btnNodelist[i].classList.add("active");
        } else {
            btnNodelist[i].classList.remove("active");
        }
    }
}