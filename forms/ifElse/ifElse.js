/* Matthew Herrera Assignment 2*/ 

/* if else */ 

let firstName = prompt("Enter your first name:")
let userState = prompt("Enter the state which you live in abbreviated:")
let temp=Number(prompt("Enter the tempaerature of outside in Farenheit degrees"))

let stateCap=userState.toUpperCase()

console.log(firstName)
console.log(userState) 
console.log(temp)

if(userState== "NE" && temp<32){
alert(`${nameCap}, wear a warm coat, hat, scatf and gloves.`)
}else if (userState== "NE" && temp>32 && temp<50){
alert(`${nameCap}, wear a warm coat but you won't need a hat, scarf or gloves.`)
}else if (userState== "FL" && temp>32 && temp<50){
alert(`${nameCap}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
}else if (userState== "FL" && temp>32 && temp<70){
alert(`${nameCap}, wear a warm coat, hat and gloves. Maybe a scarf too.`)
}





