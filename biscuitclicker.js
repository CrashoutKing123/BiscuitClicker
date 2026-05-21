let point = document.querySelector('.point-cost')
let parsedPoint = parseFloat(point.innerHTML)

//put upgrade code here lil bro

function incrementPoints() {
    parsedPoint += 1;
    point.innerHTML = parsedPoint
    point.innerHTML = Math.round(point.innerHTML)
}