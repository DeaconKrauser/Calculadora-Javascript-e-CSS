const output = document.getElementById("output");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
btn.addEventListener("click", function () {
    let value = btn.innerHTML;
    if (value === "C") {
        output.innerHTML = 0;
    } else if (value === "=") {
        output.innerHTML = eval(output.innerHTML);
    } else if (value === "⌫") {
        output.innerHTML = output.innerHTML.slice(0, -1);
    } else {
        if (output.innerHTML === "0") {
            output.innerHTML = value;
    } else {
        output.innerHTML += value;
    }
    }
    });
});