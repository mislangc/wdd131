let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

//array.filter()
const namesB = names.filter((name) => name[0] === "B")
console.log(namesB);

//array.map()
const namesLength = names.map((name) => name.length)
console.log(namesLength);

//array.reduce()
function getAverage(list) {
    const listTotal = list.reduce((accumulator, currentValue) => accumulator + currentValue);
    const listAverage = listTotal / list.length;
    return listAverage;
}
console.log(getAverage(namesLength));