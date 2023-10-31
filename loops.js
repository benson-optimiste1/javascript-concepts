// 1. for loop

const studentsArray = [
    {id: 1, name: 'jhon', field: 'doctor'},
    {id: 2, name: 'fred', field: 'software engineer'},
    {id: 3, name: 'nive', field: 'avocat'},
    {id: 4, name: 'wadd', field: 'police'},
    {id: 5, name: 'bed', field: 'agronome'},
    {id: 6, name: 'feldy', field: 'teacher'},
    {id: 7, name: 'jean', field: 'nurse'},
]

// 1.for loop
// for (let i =0; i < studentsArray.length; i= i+1){
// console.log(studentsArray[i])
// }

 // 2.for each
// studentsArray.forEach((item, index) => {
//     console.log(index, '->', item)
// })

// 3. for map

// const newArray = studentsArray.map((item, index) =>{
    // console.log(index, '->', item)
    // item.age = index + 10 
    // return `<h2> item${item.name, item.field}</h2>`
// })

// 3.1 map one liner
// studentsArray.map((`<h2> item${item.name, item.field}</h2>`))

// loop on an array and if id is a multiple of 3 console fizz
// if id is multiple of 5 console buzz
function fizzBuzz(){
    studentsArray.map((item, index) =>{
        if (item.id % 3 === 0 && item.id % 5 === 0){
            return 'fizzBuzz'
        } else if (item.id % 5 === 0){
            return 'buzz'
        } else if (item.id % 3 === 0){
            return 'fizz'
        } else {
            return 'not divisible by 3 or 5'
        }
    })
}
