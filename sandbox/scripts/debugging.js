const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log(area);
radius = 4;
area = radius * radius * PI;
console.log(area);

function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}

let areaOne = circleArea(3);
console.log(areaOne);
let areaTwo = circleArea(4);
console.log(areaTwo);