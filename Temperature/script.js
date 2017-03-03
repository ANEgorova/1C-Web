'use strict';

var res_button = document.getElementById("convert");

function print() {
    var button = document.getElementById("field");
    var temp_C = Number(button.value);
    var result = 9 / 5 * temp_C + 32;
    document.getElementById("result").value = result;
    console.log(result);
}

res_button.addEventListener("click", print);
