const res = document.querySelector("#res");
const btnClr = document.querySelector("#btnClr");
const btnEql = document.querySelector("#btnEql");

const aprAndNumBtn = document.querySelectorAll(".numbers, .operationButton");
aprAndNumBtn.forEach(function(e) {
    e.addEventListener("click", showValue)
});

btnClr.addEventListener("click", function() {
    res.value = "";
})

btnEql.addEventListener("click", function() {
    var expr = res.value;
    var nums = /(\d+)/g;
    // Replace all base 2 nums with base 10 equivs
    expr = expr.replace(nums, function(match) {
        return parseInt(match, 2);
    })
    // eval in base 10 and convert to base 2
    res.value = eval(expr).toString(2);
})

function showValue(e){
    res.value = res.value + e.target.innerHTML;
}