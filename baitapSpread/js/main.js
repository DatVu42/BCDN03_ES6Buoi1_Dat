let h2Text = document.querySelector(".heading").textContent;
let h2Arr = [...h2Text];

let spanELE = "";
for (const item of h2Arr) {
    spanELE += `<span>${item}</span>`;
}

document.querySelector(".heading").innerHTML = spanELE;