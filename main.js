import * as _ from 'lodash';
import axios from 'axios';

const result = 'Hello world'.indexOf('heropy')
console.log(result)

const str = "suhaw0325@naver.com"
console.log(str.indexOf('world'))
console.log(str.slice(0,3))
console.log(str.replace('world', 'heropy'))
console.log(str.replace('world', ''))
console.log(str.match(/.+(?=@)/)[0])

const str_test = ' heelllo world'
console.log(str_test.trim())

//배열(1)
const numbers = [1,2,3,4,10]
const fruits = ["apple", "Banana","cherry", "orange"]

console.log(numbers[1])
console.log(fruits)

const found = numbers.find(element => element >5 );
console.log(found)

const a = fruits.forEach((fruits ,index) => {
    console.log(`${fruits}-${index}`)
})
    console.log(a)
const b =fruits.map( (fruit ,index) =>({
    id: index ,
    name: fruit
}))
console.log(b)

//배열(2)
//filter()
const c = numbers.filter(number =>{
    return number >3 
})
console.log(c)

//.find()
const d = fruits.find(fruit =>{
    return /^B/.test(fruit)
})
console.log(d)

const e = fruits.findIndex(fruit =>{
    return /^B/.test(fruit) 
})
console.log(e)

const user ={
    name: 'jeong',
    age: 27, 
    email : ['suhaw0325@naver.com']
}
const keys = Object.keys(user)
console.log(keys)
console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)


//구조 분해 할당
const {name, age ,email , address= 'korea'} =user

console.log(`사용자의 이름은 ${name}`)
console.log(`address ${address}`)
//전개연산자
console.log(...fruits)

// function toObject(a,b,...c){
//     return {
//         a:a ,
//         b:b,
//         c:c 
//     }
// }
const toObject = (a,b, ...c) =>({a,b,c})
console.log(toObject(...fruits))

// const copyUser = Object.assign({},user)
const copyUser = {...user}
console.log(copyUser === user)
user.age = 22 
console.log("user" ,user)
console.log("copyuser" ,copyUser)

user.email.push('neo@naver.com')
console.log(user.email === copyUser.email)
console.log("user",user)
console.log(copyUser)

//storage
localStorage.setItem('user',JSON.stringify(user))
console.log(localStorage.getItem('user'))
console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')
const stor = localStorage.getItem('user')
const obj = JSON.parse(stor)
obj.age = 30
console.log(obj)

function ferctMovies(){
    axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((res)=>{
        console.log(res)
        const h1El = document.querySelector('h1')
        const imgEl = document.querySelector('img')
        h1El.textContent = res.data.Search[0].Title
        console.log(h1El.textContent)
        imgEl.src =res.data.Search[0].Poster
    })
}
ferctMovies()