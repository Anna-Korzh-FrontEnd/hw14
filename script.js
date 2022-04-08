"use strict";

//1:
// import storage from './storage.js'
// if (storage.get('users')){
//     let users = storage.get('users');
//     console.log(users)
// } else {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(response => response.json())
//         .then((users) => storage.set("users",users))
//         .catch((error) => console.error("Error"))
// }
// storage.remove("users")

 const isValidDateFormat = (str) => {
        if(str.match(/^\d{4}\/\d{2}\/\d{2}\s\d{2}\:\d{2}$/)){
                return true
        } return false   
 }

console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false











