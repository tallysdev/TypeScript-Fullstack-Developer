// Estruturas de repetição

let element: number[] = []

for (let index:number = 0; index < 5; index+=0.05) {
    element.push(index);
}

console.log(element)

let cond = 2

while (cond < 7) {
    console.log(cond)
    cond++
}

//  Array

const arry: number[] = [1,2,3,4,5]

console.log(arry)

arry.push(6)
console.log(arry)
arry.pop()
console.log(arry)
console.log(arry.length)

const busca = arry.find(num => num < 1)

console.log(busca)

arry.forEach(element => {
    if (element > 2) {
        console.log(element)
    }
});

arry.map(num => {
    console.log(num)
})